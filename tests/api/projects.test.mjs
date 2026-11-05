import { test } from 'node:test'
import assert from 'node:assert/strict'
import { call, as, Y, newCode, baseProject } from './_client.mjs'

test('autenticazione', async () => {
  assert.equal((await call('client/list')).status, 401)
  assert.equal((await call('user/login', { body: { email: 'admin@demo.local', password: 'x' } })).status, 401)
  assert.match(await as.admin(), /^1-/)
})

test('elenco e filtri progetti', async () => {
  const t = await as.admin()
  const all = (await call('project/completelist', { token: t, body: {} })).data
  assert.ok(all.length >= 10)
  const ic = (await call('project/completelist', { token: t, body: { status: ['I', 'C'] } })).data
  assert.ok(ic.every(r => ['I', 'C'].includes(r.Project.status)))
  const old = all.find(r => r.Project.incrementoproposta > 0).Project
  assert.ok(Math.abs(old._totaleprogetto - (old.totaleproposta * 1.1 - 500)) < 0.01, 'incremento 10% e sconto 500€')
})

test('permessi e validazioni progetto', async () => {
  const [pm, ugo] = [await as.pm(), await as.ugo()]
  const code = await newCode(pm)
  assert.equal((await call('project/createedit', { token: ugo, body: { Project: baseProject(code), Owners: [3] } })).status, 403)
  assert.equal((await call('project/createedit', { token: pm, body: { Project: { ...baseProject(code), status: 'A' }, Owners: [2] } })).status, 403)
  assert.equal((await call('project/createedit', { token: pm, body: { Project: { ...baseProject(code), status: 'I', splitpercent: 50, splitpercent1: 30 }, Owners: [2] } })).status, 422)
  assert.equal((await call('project/createedit', { token: pm, body: { Project: { ...baseProject(`PR1${Y}`) }, Owners: [2] } })).status, 409)
})

test('ciclo di vita progetto, task ed economia', async () => {
  const [pm, ugo] = [await as.pm(), await as.ugo()]
  const r = await call('project/createedit', { token: pm, body: { Project: { ...baseProject(await newCode(pm)), client_id: 'Cliente Test Srl', newcliente: 1 }, Owners: [2, 4], sponsors: [{ sponsor: 1, contractdate: `${Y}-05-01`, note: 'x' }] } })
  assert.equal(r.status, 200, r.error)
  const id = r.data.id
  assert.deepEqual(r.data.owners, [2, 4])
  assert.equal((await call('project/createedit', { token: ugo, body: { Project: { ...baseProject(r.data.code), id }, Owners: [3] } })).status, 403)

  // task interno: prezzo/costo dal listino del profilo per l'anno del codice progetto (Senior Y = 130/40 €/h)
  const t1 = await call('task/createedit', { token: pm, body: { Task: { project_id: id, shortname: 'A', internalactivity: 1, hours: 16, user_id: 2, userprofile_id: 1 } } })
  assert.equal(t1.status, 200, t1.error)
  assert.equal(t1.data.price, 2080)
  assert.equal(t1.data.cost, 640)
  assert.equal((await call('task/createedit', { token: pm, body: { Task: { project_id: id, shortname: 'B', internalactivity: 1, hours: 0 } } })).status, 422)
  const t2 = await call('task/createedit', { token: pm, body: { Task: { project_id: id, shortname: 'C', internalactivity: 0, supplier_id: 1, supplierprice: 1000, suppliercost: 600 } } })
  let p = (await call(`project/get/${id}`, { token: pm })).data
  assert.equal(p.totaleproposta, 3080)
  assert.equal(p.costoproposta, 1240)
  assert.equal(p._margineprogetto, 1840)
  assert.equal(p.totalepropostamodified, 0)
  p = (await call('project/salvaCampo', { token: pm, body: { id, field: 'scontoproposta', value: 10 } })).data
  assert.ok(Math.abs(p._totaleprogetto - 2772) < 0.01)
  p = (await call('project/salvaCampo', { token: pm, body: { id, field: 'newtotaleproposta', value: 3000 } })).data
  assert.equal(p._margineprogetto, 1760)
  await call(`task/delete/${t2.data.id}`, { token: pm, method: 'POST' })
  p = (await call(`project/get/${id}`, { token: pm })).data
  assert.equal(p.totaleproposta, 2080, 'task eliminati esclusi dalle somme')
  assert.equal((await call('task/completelist', { token: pm, body: { project_id: id, alsodeleted: 1 } })).data.length, 2)

  const hist = (await call(`projecthistory/list/${id}`, { token: pm })).data
  assert.equal(hist.at(-1).Projecthistory.type, 'C', 'storico di creazione')
  assert.equal((await call(`project/delete/${id}`, { token: ugo, method: 'POST' })).status, 403)
  assert.equal((await call(`project/delete/${id}`, { token: pm, method: 'POST' })).status, 200)
})

test('prezzo e costo calcolati: listino dell\'anno di inizio del task, 0 se manca', async () => {
  const pm = await as.pm()
  const r = await call('project/createedit', { token: pm, body: { Project: baseProject(await newCode(pm)), Owners: [2] } })
  const mk = async startdate => (await call('task/createedit', { token: pm, body: { Task: { project_id: r.data.id, shortname: 'X', internalactivity: 1, hours: 8, userprofile_id: 1, startdate } } })).data
  const prev = await mk(`${Y - 1}-06-01`)
  const cur = await mk(`${Y}-06-01`)
  assert.ok(prev.price > 0 && prev.price < cur.price, 'listino anno precedente più basso (+3%/anno nel seed)')
  const none = await mk('2040-01-01')
  assert.deepEqual([none.price, none.cost], [0, 0], 'nessun listino per quell\'anno')
  const ext = (await call('task/createedit', { token: pm, body: { Task: { project_id: r.data.id, shortname: 'E', internalactivity: 0, supplierprice: 900, suppliercost: 700 } } })).data
  assert.deepEqual([ext.price, ext.cost], [900, 700], 'esterno: valori del fornitore')
})

test('duplica progetto con task', async () => {
  const a = await as.admin()
  const r = await call('project/createedit', { token: a, body: { Project: { ...baseProject(await newCode(a)), name: 'Copia PR1', cloneid: 1 }, Owners: [1], clonetask: 1 } })
  const n = (await call('task/completelist', { token: a, body: { project_id: r.data.id } })).data.length
  const src = (await call('task/completelist', { token: a, body: { project_id: 1 } })).data.length
  assert.equal(n, src)
})

test('costo reale = ore × costo dipendente dell\'anno', async () => {
  const a = await as.admin()
  const rows = (await call('task/completelist', { token: a, body: { project_id: 1 } })).data
  const t = rows.find(r => r.Task.nhours > 0).Task
  assert.equal(t.nhours, 8)
  const costs = (await call('cost/list', { token: a, body: { year: Y } })).data
  const hc = costs.find(c => c.user_id === t.user_id).hcost
  assert.ok(Math.abs(t.realcost - 8 * hc) < 0.01, `${t.realcost} vs ${8 * hc}`)
})

test('regressione: ore e costo reale coerenti tra dettaglio task, elenco task e progetto', async () => {
  const a = await as.admin()
  const rows = (await call('task/completelist', { token: a, body: { project_id: 1 } })).data
  for (const { Task: t } of rows) {
    const g = (await call(`task/get/${t.id}`, { token: a })).data
    assert.equal(g.nhours, t.nhours, `nhours task ${t.id}`)
    assert.equal(g.realcost, t.realcost, `realcost task ${t.id}`)
  }
  const p = (await call('project/get/1', { token: a })).data
  const sum = rows.reduce((s, r) => s + r.Task.realcost, 0)
  assert.ok(Math.abs(p.costopropostareal - sum) < 0.02, `${p.costopropostareal} vs ${sum}`)
})

test('storici: creazione, cambio stato e owner, istantanea manuale, consultazione, filtri, eliminazione', async () => {
  const pm = await as.pm()
  const ugo = await as.ugo()
  const r = await call('project/createedit', { token: pm, body: { Project: baseProject(await newCode(pm)), Owners: [2] } })
  const id = r.data.id
  await call('task/createedit', { token: pm, body: { Task: { project_id: id, shortname: 'Analisi', internalactivity: 1, hours: 8, userprofile_id: 1, startdate: `${Y}-06-01` } } })
  await call('project/createedit', { token: pm, body: { Project: { ...baseProject(r.data.code), id, status: 'I', successpercent: 50, splitpercent: 100 }, Owners: [2, 1] } })
  assert.equal((await call(`projecthistory/saveprojecthistory/${id}`, { token: ugo, method: 'POST' })).status, 403)
  assert.equal((await call(`projecthistory/saveprojecthistory/${id}`, { token: pm, method: 'POST' })).status, 200)

  const list = (await call(`projecthistory/list/${id}`, { token: pm })).data.map(x => x.Projecthistory)
  assert.deepEqual(list.map(h => h.type).sort(), ['C', 'O', 'P', 'S'])
  const s = list.find(h => h.type === 'S')
  assert.equal(s.oldvalue, 'S')
  assert.equal(s.newvalue, 'I')

  const full = (await call(`projecthistory/get/${list.find(h => h.type === 'P').id}`, { token: pm })).data
  assert.equal(full.history.Project.status, 'I', 'istantanea con lo stato del momento')
  assert.equal(full.history.Task.length, 1)
  assert.equal(full.history.Task[0].Task.shortname, 'Analisi')
  assert.ok(full.history.Project.totaleproposta > 0, 'totali già ricalcolati')

  const filtered = (await call('projecthistory/historieslist', { token: pm, body: { project: id, type: 'S' } })).data
  assert.equal(filtered.length, 1)
  assert.equal(filtered[0].Project.code, r.data.code)

  assert.equal((await call(`projecthistory/delete/${s.id}`, { token: ugo, method: 'POST' })).status, 403)
  assert.equal((await call(`projecthistory/delete/${s.id}`, { token: pm, method: 'POST' })).status, 200)
  assert.equal((await call(`projecthistory/list/${id}`, { token: pm })).data.length, 3)
})
