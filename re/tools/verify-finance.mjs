// Verifica in sola lettura delle domande aperte di docs/spec-fatture-finanza.md §18. Output: solo aggregati.
import { get, post, n, eq, counter } from './_live.mjs'
const ALL = { from: '2000-01-01', to: '2100-12-31' }
const out = {}

// --- fatture attive ---
const act = await post('invoice/activelist', { client: 0, project: 0, ...ALL })
const projects = await get('project/list/')
const pById = new Map(projects.map(p => [String((p.Project ?? p).id), p.Project ?? p]))
const tr = await get('invoice/tranchelist/')
const tById = new Map(tr.map(t => [String(t.id), t]))
{
  const { o, inc } = counter()
  o.righe = act.length
  o.campi = Object.keys(act[0] ?? {}).join(',')
  for (const i of act) {
    if (eq(i.total, n(i.taxable) + n(i.vat))) inc('total=taxable+vat')
    const p = pById.get(String(i.project_id))
    const t = tById.get(String(i.payment_tranche_id))
    if (p && String(i.cliente) === String(p.client_id)) inc('cliente=cliente progetto')
    if (t?.sponsor && String(i.cliente) === String(t.sponsor)) inc('cliente=sponsor tranche')
    if (t) {
      inc('con tranche')
      if (t.payed === i.payed) inc('tranche.payed=fattura.payed')
      if (n(t.emessa) === 1) inc('tranche.emessa=1')
      if (t.invoicedate === i.invoicedate) inc('tranche.invoicedate=fattura.invoicedate')
    }
    inc(`payed=${i.payed}`)
  }
  out.attive = o
}
// filtro periodo: una finestra di un mese, quale data cade sempre dentro?
async function dateField(ep, body, fields) {
  const rows = await post(ep, body)
  const { o, inc } = counter()
  o.righe = rows.length
  for (const r of rows) for (const f of fields) if (r[f] >= body.from && r[f] <= body.to) inc(`${f} nel periodo`)
  return o
}
out.filtroAttive = await dateField('invoice/activelist', { client: 0, project: 0, from: '2026-03-01', to: '2026-03-31' }, ['invoicedate', 'paymentduedate', 'payment_date'])
out.filtroPassive = await dateField('invoice/passivelist', { supplier: 0, project: 0, from: '2026-03-01', to: '2026-03-31', filtropay: null }, ['invoicedate', 'paymentduedate', 'payment_date'])
out.filtroTranche = await dateField('invoice/tranchelist', { project: 0, from: '2026-03-01', to: '2026-03-31' }, ['previewdate', 'paymentdate'])

// --- tranche: emessa / hasinvoice ---
{
  const { o, inc } = counter()
  const withInv = new Set(act.filter(i => n(i.payment_tranche_id)).map(i => String(i.payment_tranche_id)))
  o.tranche = tr.length
  o.campi = Object.keys(tr[0] ?? {}).join(',')
  for (const t of tr) {
    if ((n(t.emessa) === 1) === withInv.has(String(t.id))) inc('emessa ⇔ esiste fattura')
    inc(`payed=${t.payed}`)
    if (n(t.percent) !== 0) inc('percent≠0')
  }
  out.tranche = o
}

// --- passive ---
const pas = await post('invoice/passivelist', { supplier: 0, project: 0, ...ALL, filtropay: null })
{
  const { o, inc } = counter()
  o.righe = pas.length
  o.campi = Object.keys(pas[0] ?? {}).join(',')
  for (const i of pas) {
    inc(`payed=${i.payed}`)
    inc(`doc=${i.documenttype}`)
    inc(`type=${i.type ?? 'null'}`)
    const rows = i.tasks ?? []
    if (rows.length && eq(i.taxable, rows.reduce((s, r) => s + n(r.taxable), 0))) inc('testata.taxable=Σrighe')
    if (eq(i.total, n(i.taxable) + n(i.vat))) inc('total=taxable+vat')
    if (!rows.length) inc('senza righe')
  }
  out.passive = o
}

// --- KPI: confronto con i campi progetto e le fatture ---
const kpi = await post('invoice/kpi', { client: 0, project: 0, aperto: 0 })
const plist = (await post('project/completelist', { client: 0, status: [], openstatus: 0, responsabile: null, from: null, to: null })).map(r => r.Project)
const P = new Map(plist.map(p => [String(p.id), p]))
const actBy = new Map(); act.forEach(i => actBy.set(String(i.project_id), (actBy.get(String(i.project_id)) ?? 0) + n(i.taxable)))
const pasBy = new Map(); pas.forEach(i => (i.tasks ?? []).forEach(r => pasBy.set(String(r.project_id), (pasBy.get(String(r.project_id)) ?? 0) + n(r.taxable))))
const trBy = new Map(); tr.forEach(t => trBy.set(String(t.project_id), (trBy.get(String(t.project_id)) ?? 0) + n(t.total)))
{
  const { o, inc } = counter()
  o.righe = kpi.length
  o.campi = Object.keys(kpi[0] ?? {}).join(',')
  for (const k of kpi) {
    const p = P.get(String(k.project_id)); if (!p) { inc('progetto non trovato'); continue }
    const ricavo = n(p.newtotaleproposta) || n(p._totaleprogetto)
    const tests = {
      'ricavipresunti=ricavo progetto': eq(k.ricavipresunti, ricavo),
      'ricavipresunti=Σtranche': eq(k.ricavipresunti, trBy.get(String(p.id)) ?? 0),
      'ricavi=Σimponibile fatture attive': eq(k.ricavi, actBy.get(String(p.id)) ?? 0),
      'costipresunti=costoproposta': eq(k.costipresunti, p.costoproposta),
      'costi=Σrighe passive progetto': eq(k.costi, pasBy.get(String(p.id)) ?? 0),
      'costi=costopropostareal': eq(k.costi, p.costopropostareal),
      'primomarg=ricavi-costi': eq(k.primomarg, n(k.ricavi) - n(k.costi)),
      'primomarg=ricavipresunti-costipresunti': eq(k.primomarg, n(k.ricavipresunti) - n(k.costipresunti)),
      'margprog=ricavipresunti-costipresunti': eq(k.margprog, n(k.ricavipresunti) - n(k.costipresunti)),
      'margprog=_margineprogetto': eq(k.margprog, p._margineprogetto),
      'margprog=ricavi-costi-costoreale': eq(k.margprog, n(k.ricavi) - n(k.costi) - n(p.costopropostareal)),
      'margprog=primomarg-costoreale': eq(k.margprog, n(k.primomarg) - n(p.costopropostareal)),
      'margcomm=ricavipresunti-costipresunti': eq(k.margcomm, n(k.ricavipresunti) - n(k.costipresunti)),
      'margcomm=_margineprogetto': eq(k.margcomm, p._margineprogetto),
      'margpercent=margprog/ricavipresunti': eq(k.margpercent, n(k.ricavipresunti) ? n(k.margprog) / n(k.ricavipresunti) * 100 : 0, 0.06),
      'margpercent=margprog/ricavi': eq(k.margpercent, n(k.ricavi) ? n(k.margprog) / n(k.ricavi) * 100 : 0, 0.06),
      'margpercent=margcomm/ricavipresunti': eq(k.margpercent, n(k.ricavipresunti) ? n(k.margcomm) / n(k.ricavipresunti) * 100 : 0, 0.06),
    }
    for (const [name, okk] of Object.entries(tests)) if (okk) inc(name)
  }
  out.kpi = o
}

// --- scadenziario attivo: mese e importo ---
{
  const y = 2026
  const rows = await post('invoice/scadenziario', { client: 0, project: 0, anno_da: y, anno_a: y })
  const { o, inc } = counter()
  o.righe = rows.length
  o.campi = Object.keys(rows[0] ?? {}).join(',')
  o.colori = [...new Set(rows.map(r => r.colore))].join(',')
  const sumBy = (field, withVat) => {
    const m = new Map()
    for (const t of tr) {
      const d = t[field]; if (!d || !d.startsWith(String(y))) continue
      const k = `${t.project_id}|${Number(d.slice(5, 7))}`
      m.set(k, (m.get(k) ?? 0) + n(t.total) + (withVat ? n(t.vat) : 0))
    }
    return m
  }
  const cand = { 'paymentdate senza IVA': sumBy('paymentdate', false), 'paymentdate con IVA': sumBy('paymentdate', true),
    'previewdate senza IVA': sumBy('previewdate', false), 'previewdate con IVA': sumBy('previewdate', true) }
  const agg = new Map()
  for (const r of rows) { const k = `${r.project_id}|${Number(r.mese)}`; agg.set(k, (agg.get(k) ?? 0) + n(r.totale)) }
  for (const [name, m] of Object.entries(cand)) for (const [k, v] of agg) if (eq(m.get(k) ?? 0, v)) inc(name)
  o.celle = agg.size
  out.scadenziario = o
}

// --- budget ---
{
  const b = await post('invoice/budget', { year: 2026 })
  const o = { chiavi: Object.keys(b).join(','), V: (b.V ?? []).length, F: (b.F ?? []).length, P: (b.P ?? []).length,
    campiVoce: Object.keys((b.V ?? b.F ?? [])[0] ?? {}).join(',') }
  const pc = await post('passcost/list', { from: '2026-01-01', to: '2026-12-31', tag: '', type: '' }).catch(e => ({ err: e.message }))
  if (Array.isArray(pc)) {
    o.passcostRighe = pc.length
    o.passcostCampi = Object.keys(pc[0] ?? {}).join(',')
    const tags = new Set(pc.map(r => (r.Passcost ?? r).tag))
    o.vociUgualiATag = ['V', 'F', 'P'].reduce((s, g) => s + (b[g] ?? []).filter(v => tags.has(v.nome)).length, 0)
    for (const g of ['V', 'F', 'P']) {
      let okE = 0
      for (const v of b[g] ?? []) {
        const tot = pc.map(r => r.Passcost ?? r).filter(r => r.type === g && r.tag === v.nome).reduce((s, r) => s + n(r.taxable), 0)
        if (eq(tot, v.costo_effettivo)) okE++
      }
      o[`${g}: costo_effettivo=Σpasscost per tag`] = okE
    }
  }
  else o.passcost = pc.err
  out.budget = o
}

// --- dashboard economico ---
{
  const d = await post('user/getSuperAdminDashboardDataEconomico', { from: '2026-01-01', to: '2026-12-31', onlyopenEconomico: 'A', internalFilterEconomico: 'ALL' })
  const o = { campi: Object.keys(d).join(',') }
  const emesso = act.filter(i => i.invoicedate >= '2026-01-01' && i.invoicedate <= '2026-12-31')
  o['fatturato_emesso=Σtaxable data fattura'] = eq(d.fatturato_emesso, emesso.reduce((s, i) => s + n(i.taxable), 0), 1)
  o['fatturato_emesso_pagato=Σtaxable pagate'] = eq(d.fatturato_emesso_pagato, emesso.filter(i => i.payed === 'P').reduce((s, i) => s + n(i.taxable), 0), 1)
  const ac = tr.filter(t => ['A', 'C'].includes(P.get(String(t.project_id))?.status))
  for (const f of ['previewdate', 'paymentdate']) {
    o[`fatturato_acquisito=Σtranche A/C per ${f}`] = eq(d.fatturato_acquisito, ac.filter(t => t[f] >= '2026-01-01' && t[f] <= '2026-12-31').reduce((s, t) => s + n(t.total), 0), 1)
  }
  out.dashboard = o
}

console.log(JSON.stringify(out, null, 1))
