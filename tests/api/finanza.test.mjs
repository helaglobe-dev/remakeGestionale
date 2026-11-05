import { test } from 'node:test'
import assert from 'node:assert/strict'
import { call, as, Y } from './_client.mjs'

const tranche = (o = {}) => ({ id: 0, project_id: 1, type: 'I', total: 1000, vat: 220, previewdate: `${Y}-11-01`, paymentdate: `${Y}-12-01`, ...o })
const invoice = (o = {}) => ({ id: 0, project_id: 1, invoicenumber: `T${Date.now()}${Math.floor(Math.random() * 1000)}`, invoicedate: `${Y}-11-01`,
  taxable: 1000, vat: 220, paymentduedate: `${Y}-12-01`, payed: 'N', ...o })

test('permessi: lettura per responsabili e chi gestisce fatture, scrittura solo con permesso fatture', async () => {
  const [ugo, giulia, pm, admin] = [await as.ugo(), await as.giulia(), await as.pm(), await as.admin()]
  assert.equal((await call('invoice/tranchelist/1', { token: ugo })).status, 403, 'non responsabile senza permesso')
  assert.equal((await call('invoice/tranchelist/1', { token: giulia })).status, 200, 'responsabile del progetto legge')
  assert.equal((await call('invoice/tranchecreateedit', { token: giulia, body: { tranche: tranche() } })).status, 403, 'ma non scrive')
  assert.equal((await call('invoice/activelist', { token: giulia, body: {} })).status, 403, 'elenchi admin solo con permesso fatture')
  assert.equal((await call('invoice/activelist', { token: pm, body: {} })).status, 200)
  assert.equal((await call('bank/createedit', { token: pm, body: { id: 0, bankname: 'X' } })).status, 403, 'banche solo superadmin')
  assert.equal((await call('bank/createedit', { token: admin, body: { id: 0, bankname: 'Banca Test' } })).status, 200)
  assert.equal((await call('invoice/kpi', { token: giulia, body: {} })).status, 403)
  assert.equal((await call('invoice/budget', { token: pm, body: { year: Y } })).status, 403, 'pm senza viewbudget')
  assert.equal((await call('user/getSuperAdminDashboardDataEconomico', { token: ugo, body: {} })).status, 403)
})

test('tranche: emissione, pagamento e tipo pagamento derivati', async () => {
  const pm = await as.pm()
  const t = (await call('invoice/tranchelist/1', { token: pm })).data
  assert.equal(t.length, 3)
  const [a, i, s] = t
  assert.deepEqual([a.emessa, a.payed, a.invoicedate], [1, 'P', `${Y}-02-01`], 'pagata come la sua fattura')
  assert.deepEqual([i.emessa, i.payed], [1, 'N'])
  assert.deepEqual([s.emessa, s.payed, s.invoicedate], [0, 'N', null], 'non ancora fatturata')
  assert.equal(a.paymenttype, '60fm', 'tipo pagamento dal cliente del progetto')
  assert.ok(s.sponsor > 0 && s.sponsor !== s.client_id, 'saldo destinato allo sponsor')
  assert.equal((await call('invoice/tranchecreateedit', { token: pm, body: { tranche: tranche({ project_id: 3 }) } })).status, 422, 'solo progetti approvati e aperti')
  assert.equal((await call('invoice/tranchecreateedit', { token: pm, body: { tranche: tranche({ paymentdate: `${Y}-10-01` }) } })).status, 422, 'pagamento prima dell\'emissione')
  assert.equal((await call(`invoice/tranchedelete/${a.id}`, { token: pm, method: 'POST' })).status, 409, 'tranche con fattura')
  const range = (await call('invoice/tranchelist', { token: pm, body: { from: `${Y}-05-01`, to: `${Y}-05-31` } })).data
  assert.deepEqual(range.map(x => x.description), ['Advisory board svolto'], 'filtro su data prevista emissione')
})

test('fatture attive: cliente, totale, filtro su scadenza, validazioni', async () => {
  const pm = await as.pm()
  const list = (await call('invoice/activelist/1', { token: pm })).data
  assert.ok(list.every(i => i.total === i.taxable + i.vat))
  const [t] = (await call('invoice/tranchelist/1', { token: pm })).data.filter(x => !x.emessa)
  const r = await call('invoice/activecreateedit', { token: pm, body: { invoice: invoice({ payment_tranche_id: t.id, invoicenumber: 'S-1' }) } })
  assert.equal(r.status, 200, r.error)
  assert.equal(r.data.cliente, t.sponsor, 'cliente = sponsor della tranche')
  assert.equal(r.data.total, 1220)
  const after = (await call(`invoice/trancheget/${t.id}`, { token: pm })).data
  assert.equal(after.emessa, 1, 'la tranche risulta emessa')
  assert.equal((await call('invoice/activecreateedit', { token: pm, body: { invoice: invoice({ invoicenumber: 'S-1' }) } })).status, 409, 'numero duplicato nell\'anno')
  assert.equal((await call('invoice/activecreateedit', { token: pm, body: { invoice: invoice({ payed: 'P' }) } })).status, 422, 'pagata senza data')
  const other = (await call('invoice/tranchelist/2', { token: pm })).data[0]
  assert.equal((await call('invoice/activecreateedit', { token: pm, body: { invoice: invoice({ payment_tranche_id: other.id }) } })).status, 422, 'tranche di altro progetto')
  const due = (await call('invoice/activelist', { token: pm, body: { from: `${Y}-07-01`, to: `${Y}-07-31` } })).data
  assert.deepEqual(due.map(i => i.invoicenumber), ['48'], 'filtro su scadenza')
  const a = (await call('invoice/activecreateedit', { token: pm, body: { invoice: invoice({ anticipobancario: 0, percentualeanticipo: 50, meseannoanticipo: `${Y}-12` }) } })).data
  assert.deepEqual([a.percentualeanticipo, a.meseannoanticipo], [0, null], 'senza anticipo si azzerano percentuale e mese')
  await call(`invoice/activedelete/${r.data.id}`, { token: pm, method: 'POST' })
  await call(`invoice/activedelete/${a.id}`, { token: pm, method: 'POST' })
})

test('fatture passive: righe, IBAN, avviso costo task, duplicazione', async () => {
  const pm = await as.pm()
  const tasks = (await call('task/completelist', { token: pm, body: { project_id: 1 } })).data.map(r => r.Task)
  const ext = tasks.find(t => !t.internalactivity)
  const head = { id: 0, documenttype: 'F', supplier_id: ext.supplier_id, invoicenumber: `P${Date.now()}`, invoicedate: `${Y}-06-01`, paymentduedate: `${Y}-07-01`, payed: 'N' }
  assert.equal((await call('invoice/passivecreateedit', { token: pm, body: { invoice: { ...head, iban: 'IT00X0000000000000000000000' }, rows: [{ project_id: 1, taxable: 1 }] } })).status, 422, 'IBAN non valido')
  assert.equal((await call('invoice/passivecreateedit', { token: pm, body: { invoice: head, rows: [{ project_id: 2, task_id: ext.id, taxable: 1 }] } })).status, 422, 'task di altro progetto')
  const r = await call('invoice/passivecreateedit', { token: pm, body: { invoice: { ...head, iban: 'IT60X0542811101000000123456' },
    rows: [{ project_id: 1, task_id: ext.id, taxable: 100, vat: 22 }, { project_id: 2, taxable: 50, vat: 11 }] } })
  assert.equal(r.status, 200, r.error)
  assert.deepEqual([r.data.taxable, r.data.vat, r.data.total], [150, 33, 183], 'testata = somma righe')
  assert.equal(r.data.flagprice, true, 'fatture del task ≠ costo del task')
  assert.ok(r.data.projects.includes(`PR1${Y}`) && r.data.projects.includes(`PR2${Y}`))
  // duplicazione: nuove righe, l'originale resta intatta
  const dup = await call('invoice/passivecreateedit', { token: pm, body: { invoice: { ...head, invoicenumber: `${head.invoicenumber}-B` }, rows: r.data.tasks } })
  assert.equal(dup.status, 200)
  assert.equal((await call(`invoice/passiveget/${r.data.id}`, { token: pm })).data.rows.length, 2)
  assert.equal((await call('invoice/passivecreateedit', { token: pm, body: { invoice: head, rows: [{ project_id: 1, taxable: 1 }] } })).status, 409, 'stesso numero e fornitore')
  const onlyPaid = (await call('invoice/passivelist', { token: pm, body: { filtropay: 'P' } })).data
  assert.ok(onlyPaid.length && onlyPaid.every(i => i.payed === 'P'))
  assert.ok((await call('invoice/passivelist/2', { token: pm })).data.some(i => i.id === r.data.id), 'visibile anche dal secondo progetto')
  await call(`invoice/passivedelete/${r.data.id}`, { token: pm, method: 'POST' })
  await call(`invoice/passivedelete/${dup.data.id}`, { token: pm, method: 'POST' })
})

test('scadenziari', async () => {
  const pm = await as.pm()
  const sa = (await call('invoice/scadenziario', { token: pm, body: { anno_da: Y, anno_a: Y } })).data
  const feb = sa.find(c => c.mese === 2 && c.anno === Y)
  assert.deepEqual([feb.totale, feb.colore], [6000, '#62be62'], 'mese di emissione prevista, senza IVA, verde se emessa')
  const oct = sa.find(c => c.mese === 10 && c.anno === Y)
  assert.equal(oct.colore, '#000000', 'nero se da emettere')
  const fa = (await call('invoice/scadenziariofa', { token: pm, body: { anno_da: Y, anno_a: Y, spostate: 1 } })).data
  const mar = fa.find(c => c.mese === 3 && c.project_id === 1)
  assert.equal(mar.totale_fattura, 6000, 'fattura pagata nel mese del pagamento')
  const jul = fa.find(c => c.mese === 7 && c.project_id === 1)
  assert.equal(jul.scaduta, true, 'non pagata e scaduta')
  const dec = fa.find(c => c.mese === 12 && c.project_id === 1)
  assert.equal(dec.totale_tranche + dec.vat_tranche, 8540, 'tranche non fatturata con IVA')
})

test('KPI di progetto: formule verificate', async () => {
  const a = await as.admin()
  const rows = (await call('invoice/kpi', { token: a, body: { aperto: 0 } })).data
  const k = rows.find(r => r.project_code === `PR1${Y}`)
  assert.equal(k.ricavi, 14000, 'Σ imponibile fatture attive')
  const p = (await call('project/get/1', { token: a })).data
  assert.equal(k.ricavipresunti, p._totaleprogetto)
  for (const r of rows) {
    assert.equal(r.primomarg, +(r.ricavi - r.costi).toFixed(2))
    assert.equal(r.margprog, +(r.primomarg - r.internalcost).toFixed(2))
    assert.equal(r.margcomm, +(r.primomarg - r.internalprice).toFixed(2))
    assert.equal(r.margpercent, r.ricavi ? +(r.margprog / r.ricavi * 100).toFixed(2) : 0)
  }
  assert.ok(rows.every(r => ['A', 'C'].length && r.project_code !== `PR3${Y}`), 'solo progetti approvati/confermati')
  assert.equal((await call('invoice/kpi', { token: a, body: { aperto: 2 } })).data.every(r => r.openstatus === 'C'), true)
})

test('budget e dashboard', async () => {
  const a = await as.admin()
  const b = (await call('invoice/budget', { token: a, body: { year: Y } })).data
  const affitto = b.F.find(v => v.nome === 'Affitto ufficio')
  assert.deepEqual([affitto.costo, affitto.costo_effettivo], [36000, 6000])
  assert.equal(b.fatturato_acquisito, 40000, 'tranche dei progetti A/C con emissione prevista nell\'anno')

  const e = (await call('user/getSuperAdminDashboardDataEconomico', { token: a, body: { from: `${Y}-01-01`, to: `${Y}-12-31` } })).data
  assert.equal(e.fatturato_emesso, 19000)
  assert.equal(e.fatturato_emesso_pagato, 11000)
  assert.equal(e.fatturato_acquisito, 40000)
  assert.equal(e.winrate, 50, 'approvato PR1, rifiutato PR6 (PR2 confermato non conta, regola verificata)')
  assert.equal(e.targetannuo, 1000000)
  const m = (await call('user/getSuperAdminDashboardDataMacchina', { token: a, body: { frommacchina: `${Y}-01-01`, tomacchina: `${Y}-12-31` } })).data
  assert.equal(m.ninviate, 4)
  const perf = (await call('user/getSuperAdminDashboardDataPerformance', { token: a, body: {} })).data
  assert.ok(typeof perf.aggregatopercentuale === 'number' && perf.soglia === 30)
  const cl = (await call('user/getSuperAdminDashboardDataClienti', { token: a, body: {} })).data
  assert.ok(Object.values(cl.arycliente).some(c => c.client_name.startsWith('Alfa') && c.attivi >= 1))
  const pr = (await call('user/getSuperAdminDashboardDataProgetti', { token: a, body: { fromprogetti: `${Y}-03-01`, toprogetti: `${Y}-03-31` } })).data
  assert.ok(pr.caricoutenti.length > 0 && pr.tasktotali > 0)
  const alert = (await call('user/getSuperAdminDashboardData', { token: await as.ugo(), body: {} })).data
  assert.equal(alert.alerttask, 1, 'Ugo non ha registrato ore')
})
