import { test } from 'node:test'
import assert from 'node:assert/strict'
import { call, as, Y, login } from './_client.mjs'

const client = (o = {}) => ({ id: 0, name: `Cliente ${Date.now()}${Math.random()}`, cf: 'X', address: 'Via 1', zip: '00100', city: 'Roma', ...o })

test('clienti: permessi, validazioni, unicità, eliminazione logica, portafoglio', async () => {
  const [a, ugo] = [await as.admin(), await as.ugo()]
  assert.equal((await call('client/createedit', { token: ugo, body: { Client: client() } })).status, 403, 'utente U non gestisce clienti')
  assert.equal((await call('client/createedit', { token: a, body: { Client: client({ cf: '' }) } })).status, 422, 'CF obbligatorio')
  assert.equal((await call('client/createedit', { token: a, body: { Client: client({ pec: 'non-email' }) } })).status, 422)
  const c = await call('client/createedit', { token: a, body: { Client: client({ paymenttype: '60fm', prioritario: true }) } })
  assert.equal(c.status, 200, c.error)
  assert.equal(c.data.state, 'Italia', 'stato di default')
  assert.equal(c.data.prioritario, 1)
  assert.equal((await call('client/createedit', { token: a, body: { Client: client({ name: c.data.name.toUpperCase() }) } })).status, 409, 'ragione sociale duplicata')
  await call(`client/delete/${c.data.id}`, { token: a, method: 'POST' })
  const list = (await call('client/list', { token: a })).data
  assert.ok(!list.some(x => x.id === c.data.id), 'eliminato nascosto')
  const alfa = list.find(x => x.name.startsWith('Alfa'))
  assert.ok(alfa.attivi >= 1 && alfa.portafoglio > 0, 'portafoglio progetti A/C')
})

test('fornitori: tipo e permessi', async () => {
  const [pm, ugo] = [await as.pm(), await as.ugo()]
  const s = await call('supplier/createedit', { token: pm, body: { Supplier: { id: 0, name: `Forn ${Date.now()}`, type: 'C' } } })
  assert.equal(s.status, 200, s.error)
  assert.equal(s.data.type, 'C')
  assert.equal((await call('supplier/createedit', { token: ugo, body: { Supplier: { id: 0, name: 'X' } } })).status, 403)
  assert.equal((await call('supplier/createedit', { token: pm, body: { Supplier: { id: 0, name: 'Y', type: 'Z' } } })).status, 422)
})

test('attività, macrovoci, colori, target: permessi e regole', async () => {
  const [a, pm] = [await as.admin(), await as.pm()]
  assert.equal((await call('activity/createedit', { token: pm, body: { Activity: { id: 0, name: 'X', acronimo: 'X', description: 'x' } } })).status, 403, 'attività solo superadmin')
  const act = await call('activity/createedit', { token: a, body: { Activity: { id: 0, name: 'Test', acronimo: 'TST', type: 'F', description: 'd' } } })
  assert.equal(act.data.type, 'F')
  // macrovoci: superadmin o flag cancreatemacro (pm non lo ha)
  assert.equal((await call('macrovoice/createedit', { token: pm, body: { Macrovoice: { id: 0, name: 'M', description: 'd' } } })).status, 403)
  assert.equal((await call('macrovoice/createedit', { token: a, body: { Macrovoice: { id: 0, name: 'M', description: 'd' } } })).status, 200)
  const col = await call('projectcolor/createedit', { token: a, body: { Projectcolor: { id: 0, color: '#123456' } } })
  assert.equal(col.data.name, '#123456', 'nome = codice se vuoto')
  assert.equal((await call('projectcolor/createedit', { token: a, body: { Projectcolor: { id: 0, color: 'rosso' } } })).status, 422)
  assert.equal((await call('projectcolor/delete/1', { token: a, method: 'POST' })).status, 409, 'colore in uso')
  assert.equal((await call('yeartarget/createedit', { token: a, body: { Yeartarget: { id: 0, year: Y, value: 1, soglia: 10 } } })).status, 409, 'un target per anno')
  assert.equal((await call('yeartarget/createedit', { token: a, body: { Yeartarget: { id: 0, year: 2099, value: 1, soglia: 120 } } })).status, 422, 'soglia ≤ 100')
})

test('listini annuali: profili e dipendenti', async () => {
  const [a, pm] = [await as.admin(), await as.pm()]
  assert.equal((await call('upprice/list', { token: pm, body: { year: Y } })).status, 403)
  const prices = (await call('upprice/list', { token: a, body: { year: Y } })).data
  assert.equal(prices.length, 3)
  assert.deepEqual(Object.keys(prices[0]).sort(), ['hcost', 'id', 'userprofile_id', 'year'])
  const yr = 2031
  for (const k of ['upprice', 'upcost', 'cost']) {
    for (const r of (await call(`${k}/list`, { token: a, body: { year: yr } })).data) await call(`${k}/delete/${r.id}`, { token: a, method: 'POST' })
  }
  assert.equal((await call('upprice/savecost', { token: a, body: { Cost: { hcost: 111, year: yr, user_id: 1 } } })).status, 200)
  assert.equal((await call('upprice/savecost', { token: a, body: { Cost: { hcost: 112, year: yr, user_id: 1 } } })).status, 409, 'un valore per profilo e anno')
  const row = (await call('upprice/list', { token: a, body: { year: yr } })).data[0]
  await call('upprice/savecost', { token: a, body: { Cost: { id: row.id, hcost: 120, year: yr, user_id: 1 } } })
  assert.equal((await call(`upprice/get/${row.id}`, { token: a })).data.hcost, 120)
  const rates = (await call(`userprofile/rates/${yr}`, { token: pm })).data
  assert.equal(rates.find(r => r.userprofile_id === 1).price, 120, 'listino leggibile da tutti per la stima')
  const uc = await call('cost/savecost', { token: a, body: { Cost: { hcost: 33.5, year: yr, user_id: 3 } } })
  assert.equal(uc.status, 200)
  assert.equal((await call('cost/list', { token: a, body: { year: yr } })).data[0].user_id, 3)
  assert.equal((await call('userprofile/delete/1', { token: a, method: 'POST' })).status, 409, 'profilo in uso')
})

test('calendario: ricorrenti, intervalli, formato date', async () => {
  const a = await as.admin()
  const list = (await call('holiday/list', { token: a, body: { year: Y } })).data
  assert.ok(list.some(h => h.day === '0000-12-25'), 'Natale ricorrente')
  for (const h of (await call('holiday/list', { token: a, body: { year: 2030 } })).data.filter(h => h.day.startsWith('2030'))) {
    await call(`holiday/delete/${h.id}`, { token: a, method: 'POST' })
  }
  assert.equal((await call('holiday/createedit', { token: a, body: { Holiday: { type: 'C', ricorrente: 0, day: '28-12-2030', daya: '31-12-2030', description: 'Chiusura' } } })).status, 200)
  assert.equal((await call('holiday/list', { token: a, body: { year: 2030 } })).data.filter(h => h.description === 'Chiusura').length, 4, 'un evento per giorno')
  assert.equal((await call('holiday/createedit', { token: a, body: { Holiday: { type: 'F', ricorrente: 1, giornomese: '31-02', description: 'x' } } })).status, 422, 'data inesistente')
  assert.equal((await call('holiday/createedit', { token: a, body: { Holiday: { type: 'F', ricorrente: 0, day: '2030-01-01', description: 'x' } } })).status, 422, 'formato GG-MM-AAAA')
})

test('utenti: gestione, conferma, password, impersonazione', async () => {
  const [a, pm] = [await as.admin(), await as.pm()]
  const base = { firstname: 'Nuovo', lastname: 'Utente', acronym: 'NU', role: 'U', userprofile_id: 2, activeuser: 1, hasprojects: 1 }
  assert.equal((await call('user/createedit', { token: pm, body: { id: 0, email: 'x@demo.local', ...base } })).status, 403)
  const email = `nuovo${Date.now()}@demo.local`
  const u = await call('user/createedit', { token: a, body: { id: 0, email, ...base } })
  assert.equal(u.status, 200, u.error)
  assert.ok(!('password_hash' in u.data) && !('passwordHash' in u.data), 'nessun hash in risposta')
  assert.match(u.data.confirmLink, /confirmemailandsetpassword\?code=/)
  assert.equal((await call('user/createedit', { token: a, body: { id: 0, email, ...base } })).status, 409, 'email unica')
  assert.equal((await call('user/login', { body: { email, password: 'Qualsiasi1!' } })).status, 401, 'senza password non accede')

  const code = new URL(u.data.confirmLink).searchParams.get('code')
  assert.equal((await call('user/confirmuser', { body: { code } })).data.firstname, 'Nuovo')
  assert.equal((await call('user/set_password', { body: { code, password: 'debole', password_confirmation: 'debole' } })).status, 422)
  assert.equal((await call('user/set_password', { body: { code, password: 'Forte123!', password_confirmation: 'Forte123!' } })).status, 200)
  assert.equal((await call('user/set_password', { body: { code, password: 'Forte123!', password_confirmation: 'Forte123!' } })).status, 400, 'link monouso')
  assert.equal((await call('user/login', { body: { email, password: 'Forte123!' } })).status, 200)

  // password forzata dal superadmin: regola senza carattere speciale, invalida le sessioni
  assert.equal((await call('user/changePassword', { token: pm, body: { id: u.data.id, password: 'Abcdefg1', rpassword: 'Abcdefg1' } })).status, 403)
  assert.equal((await call('user/changePassword', { token: a, body: { id: u.data.id, password: 'Abcdefg1', rpassword: 'Abcdefg1' } })).status, 200)
  assert.equal((await call('user/login', { body: { email, password: 'Abcdefg1' } })).status, 200)

  // impersonazione
  assert.equal((await call(`user/forceLogin/${u.data.id}`, { token: pm, method: 'POST' })).status, 403)
  const imp = await call(`user/forceLogin/${u.data.id}`, { token: a, method: 'POST' })
  assert.equal((await call('user/me', { token: imp.data.user.token })).data.email, email)
  assert.equal((await call('user/forceLogin/1', { token: a, method: 'POST' })).status, 422, 'non se stessi')

  // eliminazione: bloccata se l'utente ha storico
  assert.equal((await call('user/delete/2', { token: a, method: 'POST' })).status, 409)
  assert.equal((await call('user/delete/1', { token: a, method: 'POST' })).status, 422, 'non se stessi')
  assert.equal((await call(`user/delete/${u.data.id}`, { token: a, method: 'POST' })).status, 200)

  // lista: dati completi solo al superadmin
  assert.ok('hasinvoice' in (await call('user/list', { token: a })).data[0])
  assert.ok(!('hasinvoice' in (await call('user/list', { token: pm })).data[0]))
})

test('recupero password e profilo', async () => {
  assert.equal((await call('user/sendemailrecoverypassword', { body: { email: 'inesistente@demo.local' } })).status, 200, 'non rivela se esiste')
  assert.equal((await call('user/reset_password', { body: { code: 'x'.repeat(20), password: 'Forte123!', password_confirmation: 'Forte123!' } })).status, 400)
  const g = await login('giulia@demo.local')
  assert.equal((await call('user/profile', { token: g, body: { firstname: 'Giulia', lastname: 'Consulente' } })).status, 200)
  assert.equal((await call('user/changePassword', { token: g, body: { password: 'debole1A', rpassword: 'debole1A' } })).status, 422, 'utente: serve carattere speciale')
})

test('notifiche', async () => {
  const a = await as.admin()
  const r = await call('notification/getMyNotifications', { token: a })
  assert.equal(r.status, 200)
  assert.equal((await call('notification/markAsRead', { token: a, body: { all: true } })).status, 200)
})
