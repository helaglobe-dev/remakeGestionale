// Seconda sonda in sola lettura: KPI interni, struttura budget, scadenziario fatture pagate. Solo aggregati.
import { get, post, n, eq, counter } from './_live.mjs'
const out = {}
const plist = (await post('project/completelist', { client: 0, status: [], openstatus: 0, responsabile: null, from: null, to: null })).map(r => r.Project)
const P = new Map(plist.map(p => [String(p.id), p]))

// KPI: internalcost / internalprice e margini
{
  const kpi = await post('invoice/kpi', { client: 0, project: 0, aperto: 0 })
  const { o, inc } = counter()
  for (const k of kpi) {
    const p = P.get(String(k.project_id)); if (!p) continue
    const ricavo = n(p.newtotaleproposta) || n(p._totaleprogetto)
    const t = {
      'margprog=primomarg-internalcost': eq(k.margprog, n(k.primomarg) - n(k.internalcost)),
      'margcomm=primomarg-internalprice': eq(k.margcomm, n(k.primomarg) - n(k.internalprice)),
      'margcomm=ricavi-costi-internalprice': eq(k.margcomm, n(k.ricavi) - n(k.costi) - n(k.internalprice)),
      'internalcost=costopropostareal': eq(k.internalcost, p.costopropostareal),
      'internalprice=Σprezzo task interni': null,
      'ricavipresunti=ricavo progetto': eq(k.ricavipresunti, ricavo),
      'ricavipresunti=_totaleprogetto': eq(k.ricavipresunti, p._totaleprogetto),
      'ricavipresunti=newtot se ≠0 else totaleproposta': eq(k.ricavipresunti, n(p.newtotaleproposta) || n(p.totaleproposta)),
      'costipresunti=costoproposta': eq(k.costipresunti, p.costoproposta),
      'margpercent=margprog/ricavi': eq(k.margpercent, n(k.ricavi) ? n(k.margprog) / n(k.ricavi) * 100 : 0, 0.06),
    }
    for (const [name, okk] of Object.entries(t)) if (okk) inc(name)
    if (!n(k.ricavi)) inc('ricavi=0')
  }
  o.righe = kpi.length
  out.kpi = o
}

// task: costi presunti = Σ costi fornitori task esterni? prezzi interni = Σ price task interni? (campione 40 progetti)
{
  const kpi = await post('invoice/kpi', { client: 0, project: 0, aperto: 0 })
  const { o, inc } = counter()
  for (const k of kpi.slice(0, 40)) {
    const rows = (await post('task/completelist', { alsodeleted: 0, project_id: String(k.project_id), statotask: [], users: [], userprofiles: [], changerequest: [], intest: 0 })).map(r => r.Task)
    const ext = rows.filter(t => n(t.internalactivity) === 0), int = rows.filter(t => n(t.internalactivity) === 1)
    const s = (a, f) => a.reduce((x, t) => x + n(t[f]), 0)
    const cand = {
      'costipresunti=Σcost esterni': s(ext, 'cost'), 'costipresunti=Σsuppliercost esterni': s(ext, 'suppliercost'), 'costipresunti=Σcost tutti': s(rows, 'cost'),
      'internalprice=Σprice interni': s(int, 'price'), 'internalprice=Σcost interni': s(int, 'cost'),
      'internalcost=Σrealcost interni': s(int, 'realcost'), 'internalcost=Σcost interni': s(int, 'cost'),
    }
    for (const [name, v] of Object.entries(cand)) {
      const field = name.split('=')[0]
      if (eq(k[field], v)) inc(name)
    }
  }
  o.campione = 40
  out.kpiTask = o
}

// budget: struttura delle voci
{
  const b = await post('invoice/budget', { year: 2026 })
  const all = [...(b.V ?? []), ...(b.F ?? []), ...(b.P ?? [])]
  const pi = all.flatMap(v => v.passive_invoices ?? [])
  const o = {
    totalehbuget: typeof b.totalehbuget,
    voci: all.length,
    vociConFatture: all.filter(v => (v.passive_invoices ?? []).length).length,
    campiFatturaVoce: Object.keys(pi[0] ?? {}).join(','),
    'costo_effettivo=Σtaxable fatture voce': all.filter(v => eq(v.costo_effettivo, (v.passive_invoices ?? []).reduce((s, i) => s + n(i.taxable ?? i.Passiveinvoice?.taxable), 0))).length,
    'costo_effettivo=Σtotal fatture voce': all.filter(v => eq(v.costo_effettivo, (v.passive_invoices ?? []).reduce((s, i) => s + n(i.total ?? i.Passiveinvoice?.total), 0))).length,
    costoZero: all.filter(v => !n(v.costo)).length,
  }
  out.budget = o
}

// scadenziario fatture pagate
{
  const rows = await post('invoice/scadenziariofa', { client: 0, project: 0, anno_da: 2026, anno_a: 2026, spostate: 1 })
  const { o, inc } = counter()
  o.righe = rows.length
  o.campi = Object.keys(rows[0] ?? {}).join(',')
  o.tipo_importo = [...new Set(rows.map(r => r.tipo_importo))].join(',')
  for (const r of rows) { if (r.scaduta) inc('scaduta'); if (n(r.totale_fattura) && n(r.totale_tranche)) inc('fattura e tranche nella stessa cella') }
  out.scadfa = o
}
console.log(JSON.stringify(out, null, 1))
