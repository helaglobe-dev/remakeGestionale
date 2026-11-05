// Terza sonda in sola lettura: internalprice, ricavipresunti, budget 2025. Solo aggregati.
import { get, post, n, eq, counter } from './_live.mjs'
const out = {}
const plist = (await post('project/completelist', { client: 0, status: [], openstatus: 0, responsabile: null, from: null, to: null })).map(r => r.Project)
const P = new Map(plist.map(p => [String(p.id), p]))
const kpi = await post('invoice/kpi', { client: 0, project: 0, aperto: 0 })
const tr = await get('invoice/tranchelist/')
const prices = []
for (const y of [2023, 2024, 2025, 2026]) prices.push(...await post('upprice/list', { user_id: 0, year: y }))
const price = (pid, y) => n(prices.find(r => String(r.userprofile_id) === String(pid) && Number(r.year) === y)?.hcost)

{ // ricavipresunti
  const { o, inc } = counter()
  for (const k of kpi) {
    const p = P.get(String(k.project_id)); if (!p) continue
    const trs = tr.filter(t => String(t.project_id) === String(p.id))
    const c = {
      _totaleprogetto: p._totaleprogetto, totaleproposta: p.totaleproposta, totalepropostamodified: p.totalepropostamodified,
      _totaleprogettomodified: p._totaleprogettomodified, newtot: p.newtotaleproposta, Σtranche: trs.reduce((s, t) => s + n(t.total), 0),
      'Σtranche+iva': trs.reduce((s, t) => s + n(t.total) + n(t.vat), 0),
      'modified se ≠0 else _totale': n(p._totaleprogettomodified) || n(p._totaleprogetto),
      'newtot || modified || _totale': n(p.newtotaleproposta) || n(p._totaleprogettomodified) || n(p._totaleprogetto),
    }
    for (const [name, v] of Object.entries(c)) if (eq(k.ricavipresunti, v)) inc(name)
    if (!n(k.ricavipresunti)) inc('zero')
  }
  out.ricavipresunti = o
}
{ // internalprice su 12 progetti con ore: Σ ore registrate × prezzo profilo (anno codice / anno ora)
  const { o, inc } = counter()
  const sample = kpi.filter(k => n(k.internalprice) > 0).slice(0, 12)
  for (const k of sample) {
    const p = P.get(String(k.project_id)); const yc = Number(String(p?.code).slice(-4))
    const tasks = (await post('task/completelist', { alsodeleted: 0, project_id: String(k.project_id), statotask: [], users: [], userprofiles: [], changerequest: [], intest: 0 })).map(r => r.Task)
    let a = 0, b = 0, c = 0
    for (const t of tasks.filter(t => n(t.internalactivity) === 1)) {
      const hs = (await get(`hour/gettaskhours/${t.id}`)).map(h => h.Hour)
      for (const h of hs) { a += n(h._ore) * price(t.userprofile_id, yc); b += n(h._ore) * price(t.userprofile_id, Number(h.startdate.slice(0, 4))) }
      c += n(t.price) / Math.max(n(t.hours), 1e-9) * n(t.nhours)
    }
    if (eq(k.internalprice, a, 1)) inc('Σore×prezzo profilo anno codice')
    if (eq(k.internalprice, b, 1)) inc('Σore×prezzo profilo anno ora')
    if (eq(k.internalprice, c, 1)) inc('Σ price/hours×nhours')
  }
  o.campione = sample.length
  out.internalprice = o
}
{ // budget 2025
  const b = await post('invoice/budget', { year: 2025 })
  const all = [...(b.V ?? []), ...(b.F ?? []), ...(b.P ?? [])]
  const pi = all.flatMap(v => v.passive_invoices ?? [])
  out.budget2025 = {
    voci: all.length, vociConFatture: all.filter(v => (v.passive_invoices ?? []).length).length,
    vociConCostoEffettivo: all.filter(v => n(v.costo_effettivo)).length, vociConBudget: all.filter(v => n(v.costo)).length,
    tipoPassiveInvoices: typeof (all[0]?.passive_invoices), esempioChiaviFattura: Object.keys(pi[0] ?? {}).join(','),
    'costo_effettivo=Σtaxable': all.filter(v => (v.passive_invoices ?? []).length && eq(v.costo_effettivo, v.passive_invoices.reduce((s, i) => s + n(i.taxable), 0))).length,
    'costo_effettivo=Σtotal': all.filter(v => (v.passive_invoices ?? []).length && eq(v.costo_effettivo, v.passive_invoices.reduce((s, i) => s + n(i.total), 0))).length,
    nomiStessiInAnniDiversi: null,
  }
  const b26 = await post('invoice/budget', { year: 2026 })
  const names = y => new Set([...(y.V ?? []), ...(y.F ?? []), ...(y.P ?? [])].map(v => v.id))
  const s25 = names(b), s26 = names(b26)
  out.budget2025.nomiStessiInAnniDiversi = [...s25].filter(x => s26.has(x)).length
  out.budget2025['fatturato_acquisito vs dashboard'] = typeof b.fatturato_acquisito
}
console.log(JSON.stringify(out, null, 1))
