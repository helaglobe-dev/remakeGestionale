// Scadenziari, budget, KPI e dashboard (spec: docs/spec-fatture-finanza.md §8-12, verifiche §19).
import { and, eq, gte, inArray, lte, ne } from 'drizzle-orm'
import { db, schema } from '../db'

const s = schema
const r2 = (v: number) => Math.round((v + Number.EPSILON) * 100) / 100
const today = () => new Date().toISOString().slice(0, 10)

// ---------------------------------------------------------------- scadenziari

type Cell = { client_id: number, sponsor_client_id: number, project_id: number, anno: number, mese: number }
const cellKey = (c: Cell) => `${c.client_id}|${c.sponsor_client_id}|${c.project_id}|${c.anno}|${c.mese}`

/** Scadenziario attivo: tranche per destinatario × progetto × mese di emissione prevista, importi senza IVA (verificato). */
export async function scadenziarioAttivo(f: { client?: number | null, project?: number | null, from: number, to: number }) {
  const rows = await listTranches({ projectId: f.project, from: `${f.from - 1}-12-01`, to: `${f.to + 1}-01-31` })
  const map = new Map<string, Cell & { totale: number, stati: string[], note: string[] }>()
  for (const t of rows) {
    const c: Cell = { client_id: t.client_id, sponsor_client_id: t.sponsor, project_id: t.project_id,
      anno: Number(t.previewdate.slice(0, 4)), mese: Number(t.previewdate.slice(5, 7)) }
    if (f.client && (t.sponsor || t.client_id) !== f.client) continue
    const e = map.get(cellKey(c)) ?? { ...c, totale: 0, stati: [], note: [] }
    e.totale += t.total
    e.stati.push(t.emessa ? 'E' : 'N')
    e.note.push(`${TRANCHE_TYPES[t.type]} ${fmt(t.previewdate)}: ${eur(t.total)}${t.emessa ? ` – fattura del ${fmt(t.invoicedate!)}` : ' – da emettere'}${t.description ? ` – ${t.description}` : ''}`)
    map.set(cellKey(c), e)
  }
  // verde = tutte le tranche della cella hanno fattura emessa, nero = almeno una da emettere (manuale)
  return [...map.values()].map(e => ({ ...e, totale: r2(e.totale), colore: e.stati.every(x => x === 'E') ? '#62be62' : '#000000',
    stati: e.stati.join(','), note: e.note.join('\n') }))
}

/**
 * Scadenziario fatture: per ogni cella l'importo delle fatture (mese = pagamento effettivo se pagata, altrimenti scadenza)
 * e, per le tranche non ancora fatturate, l'importo previsto IVA inclusa (mese = pagamento previsto).
 */
export async function scadenziarioFatture(f: { client?: number | null, project?: number | null, from: number, to: number }) {
  const from = `${f.from - 1}-12-01`, to = `${f.to + 1}-01-31`
  const tranches = await listTranches({ projectId: f.project })
  const invoices = await listActiveInvoices({ projectId: f.project })
  const trById = new Map(tranches.map(t => [t.id, t]))
  const map = new Map<string, Cell & { totale_fattura: number, vat_fattura: number, totale_tranche: number, vat_tranche: number, stati: string[], scaduta: boolean, note: string[] }>()
  const add = (c: Cell) => map.get(cellKey(c)) ?? map.set(cellKey(c), { ...c, totale_fattura: 0, vat_fattura: 0, totale_tranche: 0, vat_tranche: 0, stati: [], scaduta: false, note: [] }).get(cellKey(c))!
  for (const i of invoices) {
    const d = i.payed === 'P' && i.payment_date ? i.payment_date : i.paymentduedate
    if (d < from || d > to) continue
    const t = trById.get(i.payment_tranche_id)
    const c = add({ client_id: t?.client_id ?? i.cliente, sponsor_client_id: t?.sponsor ?? 0, project_id: i.project_id, anno: Number(d.slice(0, 4)), mese: Number(d.slice(5, 7)) })
    if (f.client && (c.sponsor_client_id || c.client_id) !== f.client) continue
    c.totale_fattura += i.taxable
    c.vat_fattura += i.vat
    c.stati.push(i.payed)
    if (i.payed === 'N' && i.paymentduedate < today()) c.scaduta = true
    c.note.push(`Fattura ${i.invoicenumber} del ${fmt(i.invoicedate)}: ${eur(i.total)} – ${i.payed === 'P' ? `pagata il ${fmt(i.payment_date!)}` : `scadenza ${fmt(i.paymentduedate)}`}`)
  }
  for (const t of tranches.filter(t => !t.emessa && t.paymentdate >= from && t.paymentdate <= to)) {
    if (f.client && (t.sponsor || t.client_id) !== f.client) continue
    const c = add({ client_id: t.client_id, sponsor_client_id: t.sponsor, project_id: t.project_id, anno: Number(t.paymentdate.slice(0, 4)), mese: Number(t.paymentdate.slice(5, 7)) })
    c.totale_tranche += t.total
    c.vat_tranche += t.vat
    c.note.push(`Tranche ${TRANCHE_TYPES[t.type]} non ancora fatturata: ${eur(t.total + t.vat)} IVA inclusa`)
  }
  return [...map.values()].map(c => ({ ...c, totale_fattura: r2(c.totale_fattura), vat_fattura: r2(c.vat_fattura),
    totale_tranche: r2(c.totale_tranche), vat_tranche: r2(c.vat_tranche), stati: c.stati.join(','), note: c.note.join('\n') }))
}

const TRANCHE_TYPES: Record<string, string> = { A: 'Anticipo', I: 'Intermedio', S: 'Saldo' }
const fmt = (d: string) => (d ? `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(0, 4)}` : '')
const eur = (v: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(v)

// ---------------------------------------------------------------- economia di progetto (per KPI e dashboard)

export type ProjectFigures = {
  id: number, code: string, name: string, client_id: number, status: string, type: string, openstatus: string, internalproject: number,
  startdate: string | null, enddate: string | null, created: string, successpercent: number,
  splitpercent: number, splityear: number, splitpercent1: number, splityear1: number,
  preventivo: number, totale: number, costoproposta: number, costoreale: number,
  ricavi: number, costi: number, costipresunti: number, internalcost: number, internalprice: number,
}

/** Valori economici per progetto: preventivo/costi dal modulo progetti, ricavi/costi effettivi dalle fatture. */
export async function projectFigures(filter?: { ids?: number[], statuses?: string[] }) {
  const where = [ne(s.projects.status, 'D'),
    filter?.ids ? inArray(s.projects.id, filter.ids.length ? filter.ids : [-1]) : undefined,
    filter?.statuses ? inArray(s.projects.status, filter.statuses as any) : undefined]
  const projects = await db.select().from(s.projects).where(and(...where))
  const ids = projects.map(p => p.id)
  if (!ids.length) return []
  const tasks = await db.select({ t: s.tasks, ...TASK_CALC }).from(s.tasks)
    .where(and(inArray(s.tasks.projectId, ids), ne(s.tasks.status, 'D')))
  const prices = await db.select().from(s.profileprices)
  const act = await db.select().from(s.activeinvoices).where(inArray(s.activeinvoices.projectId, ids))
  const pas = await db.select().from(s.passiveinvoicerows).where(inArray(s.passiveinvoicerows.projectId, ids))
  return projects.map((p): ProjectFigures => {
    const eco = computeEconomics(p)
    const mine = tasks.filter(x => x.t.projectId === p.id)
    const year = projectYear(p.code)
    const internal = mine.filter(x => x.t.internalactivity === 1)
    return {
      id: p.id, code: p.code, name: p.contractname || p.name, client_id: p.clientId ?? 0, status: p.status, type: p.type, openstatus: p.openstatus,
      internalproject: p.internalproject, startdate: p.startdate, enddate: p.enddate, created: p.created, successpercent: p.successpercent,
      splitpercent: p.splitpercent, splityear: p.splityear, splitpercent1: p.splitpercent1, splityear1: p.splityear1,
      // ricavi presunti = totale "modificato" se presente, altrimenti totale progetto (verificato 198/198; i modificati qui sono sempre 0)
      preventivo: eco._totaleprogettomodified || eco._totaleprogetto, totale: eco._totaleprogetto,
      costoproposta: eco.costoproposta, costoreale: eco.costopropostareal,
      ricavi: r2(act.filter(i => i.projectId === p.id).reduce((a, i) => a + i.taxable, 0)),
      costi: r2(pas.filter(r => r.projectId === p.id).reduce((a, r) => a + r.taxable, 0)),
      costipresunti: r2(mine.filter(x => x.t.internalactivity === 0).reduce((a, x) => a + x.cost, 0)),
      internalcost: r2(internal.reduce((a, x) => a + x.realcost, 0)),
      // IPOTESI [I]: ore lavorate valorizzate al prezzo orario del profilo (formula originale non ricostruita, spec §19)
      internalprice: r2(internal.reduce((a, x) => a + x.nhours * (prices.find(r => r.userprofileId === x.t.userprofileId && r.year === year)?.hcost ?? 0), 0)),
    }
  })
}

/** KPI di progetto (formule verificate 198/198): solo progetti Approvati, esclusi quelli ferie/permessi (tipo F). */
export async function kpiRows(f: { client?: number | null, project?: number | null, aperto: 0 | 1 | 2 }) {
  const rows = (await projectFigures({ statuses: ['A'] })).filter(p => p.type !== 'F')
  const clients = new Map((await db.select().from(s.clients)).map(c => [c.id, c.name]))
  return rows
    .filter(p => (!f.client || p.client_id === f.client) && (!f.project || p.id === f.project)
      && (f.aperto === 0 || (f.aperto === 1 ? p.openstatus === 'A' : p.openstatus === 'C')))
    .map((p) => {
      const primomarg = r2(p.ricavi - p.costi)
      const margprog = r2(primomarg - p.internalcost)
      return {
        project_id: p.id, project_code: p.code, project_name: p.name, client_id: p.client_id, client_name: clients.get(p.client_id) ?? '',
        openstatus: p.openstatus, ricavipresunti: p.preventivo, ricavi: p.ricavi, costipresunti: p.costipresunti, costi: p.costi,
        internalcost: p.internalcost, internalprice: p.internalprice,
        primomarg, margprog, margcomm: r2(primomarg - p.internalprice),
        margpercent: p.ricavi ? r2(margprog / p.ricavi * 100) : 0,
      }
    })
}

// ---------------------------------------------------------------- budget

export async function budget(year: number) {
  const items = await db.select().from(s.budgetitems).where(eq(s.budgetitems.year, year)).orderBy(s.budgetitems.nome)
  const from = `${year}-01-01`, to = `${year}-12-31`
  const pis = await listPassiveInvoices({ from: null, to: null })
  const inYear = pis.filter(i => i.invoicedate >= from && i.invoicedate <= to)
  const group = (g: 'V' | 'F' | 'P') => items.filter(i => i.group === g).map((i) => {
    const linked = inYear.filter(p => p.budgetitem_id === i.id)
    return { id: i.id, nome: i.nome, costo: i.costo, costo_effettivo: r2(linked.reduce((a, p) => a + p.taxable, 0)),
      passive_invoices: linked.map(p => ({ id: p.id, invoicenumber: p.invoicenumber, invoicedate: p.invoicedate, taxable: p.taxable })) }
  })
  const figures = await projectFigures({ statuses: ['A', 'C'] })
  const tranches = (await listTranches({ from, to })).filter(t => ['A', 'C'].includes(t.project_status))
  // IPOTESI [I]: costi passanti presunti = costi dei task esterni dei progetti A/C con tranche nell'anno;
  // effettivi = righe di fatture passive su progetto con data fattura nell'anno
  const withTranche = new Set(tranches.map(t => t.project_id))
  return {
    V: group('V'), F: group('F'), P: group('P'),
    fatturato_acquisito: r2(tranches.reduce((a, t) => a + t.total, 0)),
    totalecostopreventivato: r2(figures.filter(p => withTranche.has(p.id)).reduce((a, p) => a + p.costipresunti, 0)),
    totalecostoeffettivo: r2(inYear.flatMap(i => i.tasks).filter(r => r.project_id).reduce((a, r) => a + r.taxable, 0)),
  }
}

// ---------------------------------------------------------------- dashboard

type Scope = { onlyopen?: string | null, internal?: string | number | null }
const inScope = (p: { openstatus: string, internalproject: number }, sc: Scope) =>
  (!sc.onlyopen || sc.onlyopen === 'A' || (sc.onlyopen === 'O' ? p.openstatus === 'A' : p.openstatus === 'C'))
  && (sc.internal == null || sc.internal === 'ALL' || Number(sc.internal) === p.internalproject)

async function target(year = new Date().getFullYear()) {
  const [t] = await db.select().from(s.yeartargets).where(eq(s.yeartargets.year, year))
  return { targetannuo: t?.value ?? 0, soglia: t?.soglia ?? 0 }
}

/** Passaggi di stato nel periodo (dallo storico progetto) */
async function statusChanges(from: string, to: string) {
  const h = s.projecthistories
  // solo i cambi di stato: status = nuovo stato (newvalue)
  const rows = await db.select({ projectId: h.projectId, newvalue: h.newvalue, created: h.created }).from(h)
    .where(and(gte(h.created, `${from} 00:00:00`), lte(h.created, `${to} 23:59:59`), eq(h.type, 'S')))
  return rows.map(r => ({ projectId: r.projectId, status: r.newvalue ?? '', created: r.created }))
}

export async function dashboardEconomico(from: string, to: string, sc: Scope) {
  const figures = (await projectFigures()).filter(p => inScope(p, sc))
  const ids = new Set(figures.map(p => p.id))
  const ac = new Set(figures.filter(p => ['A', 'C'].includes(p.status)).map(p => p.id))
  const y = new Date().getFullYear()
  const acquired = async (a: string, b: string) => r2((await listTranches({ from: a, to: b })).filter(t => ac.has(t.project_id)).reduce((x, t) => x + t.total, 0))
  const invoices = (await listActiveInvoices({})).filter(i => ids.has(i.project_id) && i.invoicedate >= from && i.invoicedate <= to)
  // pipeline ponderata anno corrente (verificata al centesimo): totale progetto (senza change request)
  // × quota split dell'anno × probabilità (I: % successo, C: 100%), progetti In discussione e Confermati
  const pipeline = figures.filter(p => p.status === 'I' || p.status === 'C').reduce((a, p) => {
    const share = (p.splityear === y ? p.splitpercent : 0) + (p.splityear1 === y ? p.splitpercent1 : 0)
    return a + p.totale * share / 100 * (p.status === 'C' ? 1 : p.successpercent / 100)
  }, 0)
  // win rate (verificato sui dati reali, 41/86 = 47,67%): progetti esterni passati ad Approvato nel periodo
  // ÷ (passati ad Approvato + passati a Rifiutato), contando i progetti distinti per ciascun esito
  // (inclusi i progetti poi eliminati, come l'originale)
  const external = new Set((await db.select({ id: s.projects.id }).from(s.projects).where(eq(s.projects.internalproject, 0))).map(p => p.id))
  const changes = (await statusChanges(from, to)).filter(c => external.has(c.projectId))
  const won = new Set(changes.filter(c => c.status === 'A').map(c => c.projectId))
  const lost = new Set(changes.filter(c => c.status === 'R').map(c => c.projectId))
  return {
    fatturato_acquisito: await acquired(from, to), fatturato_acquisito_corrente: await acquired(`${y}-01-01`, `${y}-12-31`),
    pipeline: r2(pipeline), ndiscussione: figures.filter(p => p.status === 'I').length,
    fatturato_emesso: r2(invoices.reduce((a, i) => a + i.taxable, 0)),
    fatturato_emesso_pagato: r2(invoices.filter(i => i.payed === 'P').reduce((a, i) => a + i.taxable, 0)),
    winrate: won.size + lost.size ? r2(won.size / (won.size + lost.size) * 100) : null,
    ...(await target()),
  }
}

export async function dashboardMacchina(from: string, to: string, sc: Scope) {
  const figures = new Map((await projectFigures()).filter(p => inScope(p, sc)).map(p => [p.id, p]))
  const changes = (await statusChanges(from, to)).filter(c => figures.has(c.projectId))
  const closedSet = await closedDays(`${Number(from.slice(0, 4)) - 3}-01-01`, to)
  const workingBetween = (a: string, b: string) => daysBetween(a.slice(0, 10), b.slice(0, 10)).filter(d => isWeekday(d) && !closedSet.has(d)).length - 1
  const avg = (xs: number[]) => (xs.length ? r2(xs.reduce((a, b) => a + b, 0) / xs.length) : null)
  const firstBy = (st: string[]) => {
    const m = new Map<number, string>()
    for (const c of changes.filter(c => st.includes(c.status)).sort((a, b) => a.created.localeCompare(b.created))) if (!m.has(c.projectId)) m.set(c.projectId, c.created)
    return m
  }
  const toI = firstBy(['I'])
  const toEnd = firstBy(['A', 'C', 'R'])
  return {
    ninviate: toI.size,
    tempomedioallaproposta: avg([...toI].map(([pid, d]) => Math.max(0, workingBetween(figures.get(pid)!.created, d)))),
    tempomedioaltro: avg([...toEnd].map(([pid, d]) => Math.max(0, workingBetween(figures.get(pid)!.created, d)))),
    ...(await target()),
  }
}

export async function dashboardClienti(sc: Scope) {
  const clients = await db.select().from(s.clients).where(and(eq(s.clients.prioritario, 1), ne(s.clients.status, 'D')))
  const figures = (await projectFigures()).filter(p => inScope(p, sc))
  return {
    arycliente: Object.fromEntries(clients.map((c) => {
      const mine = figures.filter(p => p.client_id === c.id)
      const ac = mine.filter(p => ['A', 'C'].includes(p.status))
      return [c.id, { client_name: c.name, valore_portafoglio: r2(ac.reduce((a, p) => a + p.preventivo, 0)),
        attivi: ac.length, coda: mine.filter(p => p.status === 'I').length }]
    })),
  }
}

export async function dashboardProgetti(from: string, to: string, userIds: number[], sc: Scope) {
  const figures = (await projectFigures({ statuses: ['A', 'C'] })).filter(p => inScope(p, sc))
  // carico medio: ore assegnate su progetti A/C ÷ ore disponibili (lun–ven meno festività e assenze) per persona
  const load = await computeLoad(userIds, 1, from, to, 1, undefined, ['A', 'C'])
  const caricoutenti = userIds.map((u) => {
    const usate = Object.values(load.presenze[u] ?? {}).reduce((a, b) => a + b, 0)
    const disponibili = Object.entries(load.holiday[u] ?? {}).filter(([d]) => isWeekday(d)).reduce((a, [, m]) => a + (DAY_MINUTES - m) / 60, 0)
    return { id: u, usate: r2(usate), disponibili: r2(disponibili) }
  })
  const totU = caricoutenti.reduce((a, c) => a + c.usate, 0), totD = caricoutenti.reduce((a, c) => a + c.disponibili, 0)
  const open = figures.filter(p => p.openstatus === 'A')
  const tasks = open.length ? await db.select().from(s.tasks).where(and(inArray(s.tasks.projectId, open.map(p => p.id)), ne(s.tasks.status, 'D'))) : []
  const now = today()
  const progress = open.filter(p => p.startdate && p.enddate && p.enddate > p.startdate).map((p) => {
    const total = daysBetween(p.startdate!, p.enddate!).length
    const elapsed = now < p.startdate! ? 0 : now > p.enddate! ? total : daysBetween(p.startdate!, now).length
    return elapsed / total * 100
  })
  return {
    caricomedio: totD ? r2(totU / totD * 100) : 0, caricoutenti,
    taskcompletati: tasks.filter(t => t.status === 'P' || t.status === 'C').length, tasktotali: tasks.length,
    percentule_avanzamento: progress.length ? r2(progress.reduce((a, b) => a + b, 0) / progress.length) : 0,
    ...(await target()),
  }
}

export async function dashboardPerformance(sc: Scope) {
  const { soglia, targetannuo } = await target()
  const figures = (await projectFigures({ statuses: ['A', 'C'] })).filter(p => inScope(p, sc))
  // margine attuale = preventivo − costo reale; % sul preventivo
  const margin = new Map(figures.map(p => [p.id, r2(p.preventivo - p.costoreale)]))
  const pct = new Map(figures.map(p => [p.id, p.preventivo ? r2(margin.get(p.id)! / p.preventivo * 100) : 0]))
  const under = figures.filter(p => p.openstatus === 'A' && p.preventivo && pct.get(p.id)! < soglia)
  const totPrev = figures.reduce((a, p) => a + p.preventivo, 0)
  const aggregatovalore = r2([...margin.values()].reduce((a, b) => a + b, 0))
  return {
    soglia, targetannuo, countprog: under.length, tot: r2(under.reduce((a, p) => a + p.preventivo, 0)),
    aggregatovalore, aggregatopercentuale: totPrev ? r2(aggregatovalore / totPrev * 100) : 0,
    arymargini: Object.fromEntries(margin), arypercentuale: Object.fromEntries(pct),
    elencoprogetti: Object.fromEntries(under.map(p => [p.id, `[${p.code}] ${p.name}`])),
    progetti: figures.map(p => ({ id: p.id, code: p.code, name: p.name, openstatus: p.openstatus, internalproject: p.internalproject })),
  }
}

/** Alert ore: il giorno lavorativo precedente l'utente ha registrato meno di 8 ore (manuale). */
export async function hoursAlert(userId: number) {
  let d = new Date().toISOString().slice(0, 10)
  const closed = await closedDays(`${Number(d.slice(0, 4)) - 1}-01-01`, d)
  do { const x = new Date(`${d}T00:00:00Z`); x.setUTCDate(x.getUTCDate() - 1); d = x.toISOString().slice(0, 10) } while (!isWeekday(d) || closed.has(d))
  const h = (await hoursByUserDay([userId], d, d)).get(userId)?.get(d)?.all ?? 0
  return { alerttask: h < 8 ? 1 : 0, giorno: d, ore: r2(h) }
}
