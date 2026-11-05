// Calendario lavorativo, assenze e carichi (spec: docs/spec-ore-pianificazione.md).
// Regole verificate in sola lettura sui dati reali (2026-11-03, ottobre 2026, 12 dipendenti):
//  - giorni lavorativi = lun–ven esclusi festività e chiusure                         (12/12)
//  - ferie = ore su attività di tipo F ÷ 8                                             (12/12)
//  - straordinari = Σ giorni max(0, ore del giorno − 8) ÷ 8                            (12/12)
//  - mancanze = Σ giorni lavorativi passati max(0, 8 − ore del giorno) ÷ 8              (12/12)
//  - lavorati = lavorativi − ferie − mancanze                                          (12/12)
//  - carico giornaliero dipendente = Σ carico dei suoi task                             (264/264)
//  - il carico di un task cade solo lun–ven, mai su festivi o fuori dal periodo del task (0 eccezioni)
//  - mai sui giorni di assenza intera del dipendente                                    (61/61)
//  - distribuzione uniforme sui giorni rimanenti: IPOTESI, coincide in 161/251 casi
import { and, eq, gte, inArray, like, lte, ne, or, sql } from 'drizzle-orm'
import { db, schema } from '../db'

export const DAY_MINUTES = 480
const pad = (n: number) => String(n).padStart(2, '0')
export const isoDay = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`

export function daysBetween(from: string, to: string): string[] {
  const out: string[] = []
  const end = new Date(`${to}T00:00:00Z`)
  for (let d = new Date(`${from}T00:00:00Z`); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    out.push(isoDay(d))
    if (out.length > 3700) break
  }
  return out
}
export const isWeekday = (day: string) => {
  const g = new Date(`${day}T00:00:00Z`).getUTCDay()
  return g !== 0 && g !== 6
}

/** Eventi di calendario espansi sulle date reali (le ricorrenze 0000-MM-DD per ogni anno del periodo). */
export async function calendarEvents(from: string, to: string, types?: ('F' | 'C' | 'M' | 'Z')[]) {
  const h = schema.holidays
  const years = Array.from({ length: Number(to.slice(0, 4)) - Number(from.slice(0, 4)) + 1 }, (_, i) => Number(from.slice(0, 4)) + i)
  const rows = await db.select().from(h).where(and(
    or(and(gte(h.day, from), lte(h.day, to)), like(h.day, '0000-%')),
    types ? inArray(h.type, types) : undefined,
  ))
  const out: { date: string, name: string, color: string | null, type: string }[] = []
  for (const r of rows) {
    const dates = r.day.startsWith('0000') ? years.map(y => `${y}${r.day.slice(4)}`) : [r.day]
    for (const date of dates) if (date >= from && date <= to) out.push({ date, name: r.description, color: r.color, type: r.type })
  }
  return out.sort((a, b) => a.date.localeCompare(b.date))
}

/** Giorni non lavorativi aziendali (festività e chiusure). */
export async function closedDays(from: string, to: string) {
  return new Set((await calendarEvents(from, to, ['F', 'C'])).map(e => e.date))
}

export async function workingDays(from: string, to: string) {
  const closed = await closedDays(from, to)
  return daysBetween(from, to).filter(d => isWeekday(d) && !closed.has(d))
}

/** Ore registrate per utente e giorno, separando quelle su attività di tipo F (ferie/permessi/malattia). */
export async function hoursByUserDay(userIds: number[], from: string, to: string, projectId?: number | null) {
  const h = schema.hours
  const rows = await db.select({
    userId: h.userId, day: sql<string>`substr(${h.startdate}, 1, 10)`,
    ore: sql<number>`round((julianday(${h.enddate}) - julianday(${h.startdate})) * 24, 4)`,
    acttype: schema.activities.type, projectId: schema.tasks.projectId,
  }).from(h)
    .leftJoin(schema.activities, eq(h.activityId, schema.activities.id))
    .innerJoin(schema.tasks, eq(h.taskId, schema.tasks.id))
    .where(and(inArray(h.userId, userIds.length ? userIds : [-1]), eq(h.status, 'A'),
      gte(h.startdate, `${from} 00:00:00`), lte(h.startdate, `${to} 23:59:59`),
      projectId ? eq(schema.tasks.projectId, projectId) : undefined))
  const map = new Map<number, Map<string, { all: number, f: number }>>()
  for (const r of rows) {
    const u = map.get(r.userId) ?? new Map()
    const e = u.get(r.day) ?? { all: 0, f: 0 }
    e.all += r.ore
    if (r.acttype === 'F') e.f += r.ore
    u.set(r.day, e)
    map.set(r.userId, u)
  }
  return map
}

/** Minuti di assenza per utente e giorno: festività/chiusure = giornata intera, più le ore registrate come ferie/permessi. */
export async function absences(userIds: number[], from: string, to: string) {
  const closed = await closedDays(from, to)
  const hours = await hoursByUserDay(userIds, from, to)
  const out: Record<number, Record<string, number>> = {}
  for (const u of userIds) {
    out[u] = {}
    for (const d of daysBetween(from, to)) {
      const f = hours.get(u)?.get(d)?.f ?? 0
      out[u][d] = closed.has(d) ? DAY_MINUTES : Math.min(DAY_MINUTES, Math.round(f * 60))
    }
  }
  return out
}

/** Statistiche dipendente nel periodo, in giorni (formule verificate, vedi intestazione). */
export async function employeeStats(userIds: number[], from: string, to: string) {
  const working = await workingDays(from, to)
  const today = new Date().toISOString().slice(0, 10)
  const hours = await hoursByUserDay(userIds, from, to)
  const r2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100
  return userIds.map((id) => {
    const days = hours.get(id) ?? new Map()
    let ferie = 0, straordinari = 0, mancanze = 0
    for (const e of days.values()) { ferie += e.f; straordinari += Math.max(0, e.all - 8) }
    for (const d of working) if (d <= today) mancanze += Math.max(0, 8 - (days.get(d)?.all ?? 0))
    const lavorativi = working.length
    return { user_id: id, lavorativi, ferie: r2(ferie / 8), straordinari: r2(straordinari / 8), mancanze: r2(mancanze / 8),
      lavorati: r2(lavorativi - ferie / 8 - mancanze / 8) }
  })
}

type LoadTask = { id: number, userId: number | null, hours: number, startdate: string | null, enddate: string | null }

/**
 * Carico giornaliero di un task: ore ÷ giorni lavorativi del task in cui l'assegnatario non è assente tutto il giorno.
 * `absent` contiene le assenze dell'assegnatario (minuti) per tutto l'intervallo del task.
 */
export function taskLoad(t: LoadTask, closed: Set<string>, absent: Record<string, number>) {
  if (!t.startdate || !t.enddate || !t.hours) return {}
  const days = daysBetween(t.startdate.slice(0, 10), t.enddate.slice(0, 10))
    .filter(d => isWeekday(d) && !closed.has(d) && (absent[d] ?? 0) < DAY_MINUTES)
  if (!days.length) return {}
  const per = t.hours / days.length
  return Object.fromEntries(days.map(d => [d, Math.round(per * 10000) / 10000]))
}

/** Task che pesano sul carico: interni, assegnati, aperti, di progetti nello stato richiesto (1 = A, 2 = A/C/I). */
export async function loadTasks(stato: 1 | 2, from: string, to: string, userIds?: number[], statuses?: string[]) {
  const t = schema.tasks
  const p = schema.projects
  return db.select({ task: t, project: { id: p.id, code: p.code, name: p.name } }).from(t)
    .innerJoin(p, eq(t.projectId, p.id))
    .where(and(
      inArray(p.status, (statuses ?? (stato === 1 ? ['A'] : ['A', 'C', 'I'])) as any),
      ne(t.status, 'D'), ne(t.status, 'C'), eq(t.internalactivity, 1), sql`${t.hours} > 0`,
      lte(t.startdate, to), gte(t.enddate, from),
      userIds ? inArray(t.userId, userIds.length ? userIds : [-1]) : undefined,
    ))
}

/** Normalizza un orario del time-picker: {hours, minutes} con numeri o stringhe (l'originale invia entrambi). */
export function timeOf(v: unknown): string {
  if (typeof v === 'string' && /^\d{1,2}:\d{2}$/.test(v)) return v.padStart(5, '0')
  if (v && typeof v === 'object') {
    const h = Number((v as any).hours)
    const m = Number((v as any).minutes ?? 0)
    if (Number.isInteger(h) && Number.isInteger(m) && h >= 0 && h <= 23 && m >= 0 && m <= 59) return `${pad(h)}:${pad(m)}`
  }
  fail(422, 'Orario non valido')
}

/** Data della riga: "YYYY-MM-DD" (consigliato) o ISO. Con ISO usa la data locale Europe/Rome, evitando lo slittamento UTC dell'originale. */
export function dayOf(v: unknown): string {
  if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)) return v
  const d = new Date(String(v))
  if (Number.isNaN(d.getTime())) fail(422, 'Data non valida')
  return d.toLocaleDateString('fr-CA', { timeZone: 'Europe/Rome' })
}

/** Task su cui l'utente può registrare ore: assegnati a lui e aperti, più quelli dei progetti amministrativi (tipo A). */
export async function selectableTasks(userId: number) {
  const t = schema.tasks
  const p = schema.projects
  return db.select({ task: t, project: p, profile: schema.userprofiles }).from(t)
    .innerJoin(p, eq(t.projectId, p.id))
    .leftJoin(schema.userprofiles, eq(t.userprofileId, schema.userprofiles.id))
    .where(and(inArray(t.status, ['A', 'P']), eq(p.openstatus, 'A'), ne(p.status, 'D'),
      or(eq(t.userId, userId), eq(p.type, 'A'))))
    .orderBy(p.code, t.ordering)
}

/** Chiave di aggregazione: giorno, settimana lun→dom o mese, come le chiavi "da -> a" dell'originale. */
export function bucketOf(day: string, periodo: 1 | 2 | 3) {
  if (periodo === 1) return day
  const d = new Date(`${day}T00:00:00Z`)
  if (periodo === 2) {
    const mon = new Date(d); mon.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7))
    const sun = new Date(mon); sun.setUTCDate(mon.getUTCDate() + 6)
    return `${isoDay(mon)} -> ${isoDay(sun)}`
  }
  const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0))
  return `${day.slice(0, 8)}01 -> ${isoDay(last)}`
}

/**
 * Carichi per dipendente. Con `reassign` calcola lo scenario in cui un task passa a un altro dipendente
 * (simulatore): stessa regola dei carichi reali, nessuna scrittura.
 */
export async function computeLoad(userIds: number[], stato: 1 | 2, from: string, to: string, periodo: 1 | 2 | 3,
  reassign?: { taskId: number, userId: number }, statuses?: string[]) {
  let rows = await loadTasks(stato, from, to, undefined, statuses)
  if (reassign) rows = rows.map(r => (r.task.id === reassign.taskId ? { ...r, task: { ...r.task, userId: reassign.userId } } : r))
  rows = rows.filter(r => r.task.userId && userIds.includes(r.task.userId))
  // assenze e festività sull'intero arco dei task, non solo sul periodo: la distribuzione dipende da tutti i giorni del task
  const spanFrom = rows.reduce((m, r) => (r.task.startdate && r.task.startdate < m ? r.task.startdate : m), from).slice(0, 10)
  const spanTo = rows.reduce((m, r) => (r.task.enddate && r.task.enddate > m ? r.task.enddate : m), to).slice(0, 10)
  const closed = await closedDays(spanFrom, spanTo)
  const abs = await absences(userIds, spanFrom, spanTo)
  const presenze: Record<number, Record<string, number>> = {}
  const holiday: Record<number, Record<string, number>> = {}
  const tasks: Record<number, any[]> = {}
  for (const u of userIds) {
    presenze[u] = {}
    holiday[u] = Object.fromEntries(daysBetween(from, to).map(d => [d, abs[u]?.[d] ?? 0]))
    tasks[u] = []
    for (const d of daysBetween(from, to)) presenze[u][bucketOf(d, periodo)] ??= 0
  }
  for (const { task: t, project } of rows) {
    const u = t.userId!
    const carico = taskLoad(t, closed, abs[u] ?? {})
    const inPeriod = Object.fromEntries(Object.entries(carico).filter(([d]) => d >= from && d <= to))
    if (!Object.keys(inPeriod).length) continue
    for (const [d, v] of Object.entries(inPeriod)) {
      const k = bucketOf(d, periodo)
      presenze[u]![k] = Math.round(((presenze[u]![k] ?? 0) + v) * 10000) / 10000
    }
    tasks[u]!.push({ Task: { id: t.id, user_id: u, userprofile_id: t.userprofileId ?? 0, shortname: t.shortname,
      startdate: t.startdate, enddate: t.enddate, hours: t.hours, carico }, Project: project })
  }
  return { presenze, holiday, tasks }
}
