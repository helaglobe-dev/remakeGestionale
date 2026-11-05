import { test } from 'node:test'
import assert from 'node:assert/strict'
import { call, as, Y } from './_client.mjs'

// Settimana di prova: primo lunedì di marzo dell'anno corrente (nessuna festività), dentro il progetto PR1 (gen–set).
const firstMonday = (() => { const d = new Date(Date.UTC(Y, 2, 1)); while (d.getUTCDay() !== 1) d.setUTCDate(d.getUTCDate() + 1); return d })()
const day = n => { const d = new Date(firstMonday); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10) }
const [MON, TUE, WED, THU, FRI] = [0, 1, 2, 3, 4].map(day)
const row = (d, from, to, task_id, activity_id = 1) => ({ datei: d, datefi: { hours: from, minutes: 0, seconds: 0 }, dateff: { hours: to, minutes: 0 }, task_id, activity_id })

async function giuliaTasks(g) {
  const all = (await call('task/listall', { token: g })).data
  return {
    work: all.find(r => r.Project.code === `PR1${Y}`).Task.id,
    ferie: all.find(r => r.Project.type === 'F').Task.id,
    all,
  }
}
async function cleanWeek(g) {
  for (const h of (await call('hour/list', { token: g, body: { start: MON, end: FRI } })).data) await call(`hour/delete/${h.id}`, { token: g, method: 'POST' })
}

test('registrazione ore: validazioni', async () => {
  const g = await as.giulia()
  const { work, ferie, all } = await giuliaTasks(g)
  assert.ok(all.every(r => r.Task.status !== 'C'), 'solo task aperti selezionabili')
  await cleanWeek(g)
  assert.equal((await call('hour/createedit', { token: g, body: { id: 0, tasks: [row(MON, 10, 9, work)] } })).status, 422, 'fine prima di inizio')
  assert.equal((await call('hour/createedit', { token: g, body: { id: 0, tasks: [row(MON, 9, 18, ferie, 4)] } })).status, 422, 'ferie > 8 ore')
  assert.equal((await call('hour/createedit', { token: g, body: { id: 0, tasks: [row(MON, 8, 12, ferie, 4), row(MON, 13, 18, ferie, 4)] } })).status, 422, 'ferie nel giorno > 8 ore')
  assert.equal((await call('hour/createedit', { token: g, body: { id: 0, tasks: [row(MON, 9, 12, work), row(MON, 11, 13, work)] } })).status, 422, 'righe sovrapposte')
  const notMine = (await call('task/completelist', { token: await as.admin(), body: { project_id: 3 } })).data.find(r => r.Task.user_id !== 4)?.Task.id
  if (notMine) assert.equal((await call('hour/createedit', { token: g, body: { id: 0, tasks: [row(MON, 9, 10, notMine)] } })).status, 422, 'task di altri')
  // orari come stringhe (formato "non toccato" del time-picker originale)
  const r = await call('hour/createedit', { token: g, body: { id: 0, tasks: [{ ...row(MON, 0, 0, work), datefi: { hours: '08', minutes: '00' }, dateff: { hours: '09', minutes: '00' } }] } })
  assert.equal(r.status, 200, r.error)
  assert.equal((await call('hour/createedit', { token: g, body: { id: 0, tasks: [row(MON, 8, 10, work)] } })).status, 409, 'sovrapposizione con ore registrate')
  // data ISO UTC a cavallo della mezzanotte: vale il giorno locale (Europe/Rome), non quello UTC
  const iso = new Date(`${TUE}T00:30:00+01:00`).toISOString() // = giorno prima in UTC
  assert.equal((await call('hour/createedit', { token: g, body: { id: 0, tasks: [{ ...row(TUE, 7, 8, work), datei: iso }] } })).status, 200)
  const tue = (await call('hour/list', { token: g, body: { start: TUE, end: TUE } })).data
  assert.ok(tue.some(h => h.startdate === `${TUE} 07:00:00`), 'nessuno slittamento UTC')
  await cleanWeek(g)
})

test('statistiche dipendenti e carichi su una settimana nota', async () => {
  const [g, a] = [await as.giulia(), await as.admin()]
  const { work, ferie } = await giuliaTasks(g)
  await cleanWeek(g)
  const ok = await call('hour/createedit', { token: g, body: { id: 0, tasks: [
    row(MON, 8, 13, work), row(MON, 14, 18, work), // 9 h → 1 h di straordinario
    row(TUE, 9, 15, work), // 6 h → 2 h mancanti
    row(WED, 9, 17, ferie, 4), // 8 h di ferie
  ] } })
  assert.equal(ok.status, 200, ok.error)
  const list = (await call('hour/list', { token: g, body: { start: MON, end: FRI } })).data
  assert.equal(list.length, 4)
  assert.equal(list.reduce((s, h) => s + h._ore, 0), 23)
  assert.equal(list.filter(h => h.acttype === 'F').length, 1)

  const [s] = (await call('hour/getStatisticheDipendenti', { token: a, body: { from: MON, to: FRI, user_id: [4] } })).data
  assert.deepEqual({ lavorativi: s.lavorativi, ferie: s.ferie, straordinari: s.straordinari, mancanze: s.mancanze, lavorati: s.lavorati },
    { lavorativi: 5, ferie: 1, straordinari: 0.13, mancanze: 2.25, lavorati: 1.75 }) // 1 h di straordinario = 0,125 gg
  assert.equal((await call('hour/getStatisticheDipendenti', { token: g, body: { from: MON, to: FRI, user_id: [4] } })).status, 403)

  // carico: il giorno di ferie intere non riceve carico, gli altri giorni lo stesso valore
  const load = (await call('task/getcarico', { token: a, body: { stato: 1, user: [{ id: 4, name: 'Giulia' }], from: MON, to: FRI, periodo: 1 } })).data
  assert.equal(load.holiday[4][WED], 480)
  assert.equal(load.presenze[4][WED], 0)
  assert.ok(load.presenze[4][MON] > 0)
  assert.equal(load.presenze[4][MON], load.presenze[4][THU])
  const sum = load.tasks[4].reduce((s, t) => s + (t.Task.carico[MON] ?? 0), 0)
  assert.ok(Math.abs(sum - load.presenze[4][MON]) < 0.001, 'presenze = Σ carico dei task')
  const week = (await call('task/getcarico', { token: a, body: { stato: 1, user: [4], from: MON, to: FRI, periodo: 2 } })).data
  assert.deepEqual(Object.keys(week.presenze[4]), [`${MON} -> ${day(6)}`], 'chiave settimana lun→dom')
  assert.equal((await call('task/getcarico', { token: g, body: { stato: 1, user: [4], from: MON, to: FRI } })).status, 403, 'solo S/A')

  // ore lavorate e costo reale del task aggiornati
  const t = (await call(`task/get/${work}`, { token: a })).data
  assert.ok(t.nhours >= 15)
  await cleanWeek(g)
})

test('to do: i miei task, scadenze, completamento con notifica, riassegnazione', async () => {
  const [g, pm] = [await as.giulia(), await as.pm()]
  const mine = (await call('task/getmytasks', { token: g, body: { onlymytask: true } })).data
  assert.ok(mine.length > 0 && mine.every(r => r.User?.id === 4), 'solo task miei')
  assert.ok(!mine.some(r => r.Project.code.startsWith('PR8')), 'esclusi i task ferie')
  // task di un progetto con un altro responsabile (PR1: Paolo e Giulia), così Paolo riceve la notifica
  const open = mine.find(r => r.Task.status === 'A' && r.Project.code === `PR1${Y}`)
  const before = (await call('notification/getMyNotifications', { token: pm })).data.length
  assert.equal((await call('task/completetask', { token: await as.ugo(), body: { task_id: open.Task.id } })).status, 403)
  assert.equal((await call('task/completetask', { token: g, body: { task_id: open.Task.id } })).status, 200)
  assert.equal((await call(`task/get/${open.Task.id}`, { token: g })).data.status, 'P')
  assert.equal((await call('task/completetask', { token: g, body: { task_id: open.Task.id } })).status, 422, 'già completato')
  const after = (await call('notification/getMyNotifications', { token: pm })).data
  assert.equal(after.length, before + 1, 'responsabile notificato')
  assert.match(after[0].title, /Task completato/)
  assert.equal(after[0].link, `projects/${open.Task.project_id}`)

  // riapre il task per rendere il test ripetibile (stesso oggetto, prezzo/costo invariati)
  const full = (await call(`task/get/${open.Task.id}`, { token: pm })).data
  assert.equal((await call('task/createedit', { token: pm, body: { Task: { ...full, status: 'A' } } })).status, 200)

  const sc = (await call('task/getscadenze', { token: g, body: { start: `${Y}-01-01`, end: `${Y}-12-31`, onlymytask: true } })).data
  assert.ok(sc.length > 0)

  const sim = (await call('task/listsimulation', { token: pm, body: { from: `${Y}-03-01`, to: `${Y}-03-31` } })).data
  const cand = sim.find(r => r.Task.user_id && r.Task.user_id !== 3)
  assert.ok(Object.keys(cand.Task.carico).length > 0)
  const ugoBefore = (await call('notification/getMyNotifications', { token: await as.ugo() })).data.length
  assert.equal((await call('task/changeassegnatario', { token: pm, body: { task_id: cand.Task.id, user_id: 5 } })).status, 422, 'utente non attivo')
  assert.equal((await call('task/changeassegnatario', { token: pm, body: { task_id: cand.Task.id, user_id: 3 } })).status, 200)
  assert.equal((await call('notification/getMyNotifications', { token: await as.ugo() })).data.length, ugoBefore + 1)
  await call('task/changeassegnatario', { token: pm, body: { task_id: cand.Task.id, user_id: cand.Task.user_id } })
})

test('calendario: festività espanse sulle date reali', async () => {
  const g = await as.giulia()
  const closed = (await call('holiday/isholidaydate/1', { token: g, body: { start: `${Y}-12-01`, end: `${Y}-12-31` } })).data
  assert.deepEqual(closed.map(h => h.date), [`${Y}-12-08`, `${Y}-12-25`, `${Y}-12-26`])
  const aug = (await call('holiday/isholidaydate/1', { token: g, body: { start: `${Y}-08-10`, end: `${Y}-08-16` } })).data
  assert.equal(aug.length, 4, 'chiusura estiva 12-14 + Ferragosto')
})

test('simulatore: sposta il carico senza salvare', async () => {
  const pm = await as.pm()
  const from = `${Y}-03-02`, to = `${Y}-03-27`
  const sim = (await call('task/listsimulation', { token: pm, body: { from, to } })).data
  const t = sim.find(r => r.Task.user_id === 2)
  assert.ok(t, 'task di Paolo nel periodo')
  const before = (await call('task/getcarico', { token: pm, body: { stato: 2, user: [2, 3], from, to, periodo: 3 } })).data
  const after = (await call('task/simulate', { token: pm, body: { task_id: t.Task.id, user_id: 3, user: [2, 3], from, to, periodo: 3 } })).data
  const key = Object.keys(before.presenze[2])[0]
  const moved = before.presenze[2][key] - after.presenze[2][key]
  assert.ok(moved > 0, 'carico tolto al vecchio assegnatario')
  assert.ok(Math.abs((after.presenze[3][key] - before.presenze[3][key]) - moved) < 0.01, 'stesso carico aggiunto al nuovo')
  assert.equal((await call(`task/get/${t.Task.id}`, { token: pm })).data.user_id, 2, 'nessuna scrittura')
  assert.equal((await call('task/simulate', { token: await as.ugo(), body: { task_id: t.Task.id, user_id: 3, user: [2], from, to } })).status, 403)
})
