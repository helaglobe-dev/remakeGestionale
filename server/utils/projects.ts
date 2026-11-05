import { eq, ne, inArray, sql, and, gte, lte, type SQL } from 'drizzle-orm'
import { db, schema } from '../db'
import { recalcTotalsSql } from '../db/totals'
import type { SessionUser } from './auth'

const { projects, clients, projectcolors, projectusers, tasks, sponsors } = schema

export type Economics = {
  totaleproposta: number
  costoproposta: number
  costopropostareal: number
  totalepropostamodified: number
  costopropostamodified: number
  _totaleprogetto: number
  _totaleprogettomodified: number
  _margineprogetto: number
  _margineprogettoorig: number
  _margineprogettoreal: number
}

const round2 = (n: number) => Math.round(n * 100) / 100

/**
 * Valori economici del progetto a partire dai totali salvati (server/db/totals.ts).
 * Formule verificate sui dati reali (522 progetti):
 *  - _totaleprogetto = totaleproposta + incremento − sconto (V valore, P %)                          (522/522)
 *  - _margineprogetto = (newtotaleproposta se ≠ 0, altrimenti _totaleprogetto) − costoproposta        (522/522)
 *  - _margineprogettoreal = idem − costopropostareal                                                (504/522)
 *  - _totaleprogettomodified = totalepropostamodified (senza incremento/sconto)                    (17/18)
 */
type StoredTotals = Pick<typeof projects.$inferSelect, 'incrementoproposta' | 'tipoincrementoproposta' | 'scontoproposta' | 'tiposcontoproposta'
  | 'newtotaleproposta' | 'totaleproposta' | 'costoproposta' | 'costopropostareal' | 'totalepropostamodified' | 'costopropostamodified'>
export function computeEconomics(p: StoredTotals): Economics {
  const adjust = (base: number) => {
    const incr = p.tipoincrementoproposta === 'V' ? p.incrementoproposta : base * p.incrementoproposta / 100
    const sconto = p.tiposcontoproposta === 'V' ? p.scontoproposta : (base + incr) * p.scontoproposta / 100
    return round2(base + incr - sconto)
  }
  const totale = adjust(p.totaleproposta)
  const ricavo = p.newtotaleproposta !== 0 ? p.newtotaleproposta : totale
  return {
    totaleproposta: round2(p.totaleproposta),
    costoproposta: round2(p.costoproposta),
    costopropostareal: round2(p.costopropostareal),
    totalepropostamodified: round2(p.totalepropostamodified),
    costopropostamodified: round2(p.costopropostamodified),
    _totaleprogetto: totale,
    // verificato: il totale con change request è il valore grezzo, senza incremento/sconto (17/18)
    _totaleprogettomodified: round2(p.totalepropostamodified),
    _margineprogetto: round2(ricavo - p.costoproposta),
    _margineprogettoorig: round2(p.totaleproposta - p.costoproposta),
    _margineprogettoreal: round2(ricavo - p.costopropostareal),
  }
}

/** Ricalcola i totali salvati dei progetti (dopo modifiche a task o ore). */
export async function recalcProjectTotals(...ids: number[]) {
  const list = ids.filter(Boolean)
  if (list.length) await db.run(sql.raw(recalcTotalsSql(list)))
}

export type ProjectFilters = {
  client?: number | null
  status?: string[]
  openstatus?: string | number | null
  responsabile?: number | null
  from?: string | null
  to?: string | null
}

/** Equivalente di POST project/completelist: righe con wrapper {Project, Client, Projectcolor, Projectuser}. */
export async function listProjects(f: ProjectFilters) {
  const where: SQL[] = []
  if (f.client) where.push(eq(projects.clientId, f.client))
  if (f.status?.length) where.push(inArray(projects.status, f.status as any))
  if (f.openstatus === 'A' || f.openstatus === 'C') where.push(eq(projects.openstatus, f.openstatus))
  if (f.from) where.push(gte(sql`date(${projects.created})`, f.from))
  if (f.to) where.push(lte(sql`date(${projects.created})`, f.to))
  if (f.responsabile) {
    where.push(inArray(projects.id,
      db.select({ id: projectusers.projectId }).from(projectusers).where(eq(projectusers.userId, f.responsabile))))
  }

  const rows = await db
    .select({ p: projects, c: clients, pc: projectcolors })
    .from(projects)
    .leftJoin(clients, eq(projects.clientId, clients.id))
    .leftJoin(projectcolors, eq(projects.projectcolorId, projectcolors.id))
    .where(where.length ? and(...where) : undefined)
    .orderBy(projects.id)

  const ids = rows.map(r => r.p.id)
  const owners = ids.length
    ? await db.select().from(projectusers).where(inArray(projectusers.projectId, ids)).orderBy(projectusers.position)
    : []
  return rows.map(({ p, c, pc }) => ({
    Project: serializeProject(p),
    Client: { id: c?.id ?? 0, name: c?.name ?? '' },
    Projectcolor: { id: pc?.id ?? 0, name: pc?.name ?? '', color: pc?.color ?? '' },
    Projectuser: owners.filter(o => o.projectId === p.id).map(o => ({ project_id: o.projectId, user_id: o.userId })),
  }))
}

/** Converte una riga DB nei nomi di campo dell'API originale (snake_case per le FK). */
export function serializeProject(p: typeof projects.$inferSelect) {
  const { clientId, projectcolorId, ...rest } = p
  return {
    ...rest,
    client_id: clientId ?? 0,
    projectcolor_id: projectcolorId ?? 0,
    ...computeEconomics(p),
  }
}

/** Equivalente di GET project/get/<id> (senza l'effetto collaterale su `modified` dell'originale). */
export async function getProject(id: number) {
  const [p] = await db.select().from(projects).where(eq(projects.id, id))
  if (!p) return null
  const owners = await db.select().from(projectusers).where(eq(projectusers.projectId, id)).orderBy(projectusers.position)
  const sp = await db
    .select({ s: sponsors, c: clients })
    .from(sponsors)
    .innerJoin(clients, eq(sponsors.clientId, clients.id))
    .where(eq(sponsors.projectId, id))
  return {
    ...serializeProject(p),
    owners: owners.map(o => o.userId),
    sponsors: sp.map(({ s, c }) => ({
      Sponsor: { id: s.id, project_id: s.projectId, client_id: s.clientId, contractdate: s.contractdate, note: s.note },
      Client: { id: c.id, name: c.name },
    })),
  }
}

export async function canEditProject(user: SessionUser, projectId: number) {
  if (user.role === 'S' || user.role === 'A') return true
  const [row] = await db.select().from(projectusers)
    .where(and(eq(projectusers.projectId, projectId), eq(projectusers.userId, user.id)))
  return !!row
}

/** Prossimo codice libero nel formato PR<n><anno>, es. PR422026. */
export async function nextProjectCode(year = new Date().getFullYear()) {
  const rows = await db.select({ code: projects.code }).from(projects)
    .where(sql`${projects.code} like ${'PR%' + year}`)
  let max = 0
  for (const { code } of rows) {
    const m = code.match(/^PR(\d+)(\d{4})$/)
    if (m && Number(m[2]) === year) max = Math.max(max, Number(m[1]))
  }
  return `PR${max + 1}${year}`
}
