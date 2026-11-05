// Regole economiche verificate in sola lettura sui dati reali (2026-11-03):
//  - ore lavorate di un task = Σ durate delle registrazioni                         (141/141)
//  - costo reale di un task  = Σ durata × costo orario del dipendente nell'anno della registrazione (141/141)
//  - prezzo/costo di un task: vedi TASK_PRICE / TASK_COST (calcolati, non salvati)
import { and, eq, sql } from 'drizzle-orm'
import { db, schema } from '../db'

const { hours, tasks, usercosts, profileprices, profilecosts } = schema

/** Durata in ore di una registrazione (enddate − startdate). */
export const HOUR_DURATION = sql<number>`((julianday(${hours.enddate}) - julianday(${hours.startdate})) * 24)`

// Riferimento esplicito "tasks"."id": con select da una sola tabella Drizzle omette il nome della tabella
// e dentro la sottoquery "id" verrebbe risolto come hours.id.
const TASK_ID = sql.raw('"tasks"."id"')

/** Ore lavorate su un task (sottoquery correlata su tasks.id). */
export const TASK_NHOURS = sql<number>`(select coalesce(round(sum(julianday(h.enddate) - julianday(h.startdate)) * 24, 4), 0)
  from hours h where h.task_id = ${TASK_ID} and h.status = 'A')`

/** Costo reale di un task: ogni registrazione valorizzata al costo del dipendente per il suo anno. */
export const TASK_REALCOST = sql<number>`(select coalesce(sum(round((julianday(h.enddate) - julianday(h.startdate)) * 24, 4) *
  coalesce((select uc.hcost from usercosts uc where uc.user_id = h.user_id and uc.year = cast(substr(h.startdate, 1, 4) as integer)), 0)), 0)
  from hours h where h.task_id = ${TASK_ID} and h.status = 'A')`

// Prezzo e costo dei task NON sono salvati: come l'originale si calcolano sempre (verificato 100% su campione live,
// 1029/1029 interni con profilo, 115/115 senza profilo = 0, 305/305 esterni):
//  - interno: ore × listino del profilo per l'anno di inizio del task (se manca, anno di creazione del task)
//  - esterno: prezzo/costo del fornitore
const TASK_YEAR = sql.raw(`cast(substr(coalesce("tasks"."startdate", "tasks"."created"), 1, 4) as integer)`)
const rateOf = (table: string) => sql.raw(`coalesce((select r.hcost from ${table} r where r.userprofile_id = "tasks"."userprofile_id" and r.year = `)
export const TASK_PRICE = sql<number>`(case when "tasks"."internalactivity" = 1 then "tasks"."hours" * ${rateOf('profileprices')}${TASK_YEAR}), 0) else "tasks"."supplierprice" end)`
export const TASK_COST = sql<number>`(case when "tasks"."internalactivity" = 1 then "tasks"."hours" * ${rateOf('profilecosts')}${TASK_YEAR}), 0) else "tasks"."suppliercost" end)`

/** Anno di riferimento del listino: suffisso del codice progetto PR<n><anno>, altrimenti anno corrente. */
export function projectYear(code: string | null | undefined) {
  const m = String(code ?? '').match(/(\d{4})$/)
  return m ? Number(m[1]) : new Date().getFullYear()
}

export async function profileRates(userprofileId: number, year: number) {
  const [p] = await db.select({ v: profileprices.hcost }).from(profileprices)
    .where(and(eq(profileprices.userprofileId, userprofileId), eq(profileprices.year, year)))
  const [c] = await db.select({ v: profilecosts.hcost }).from(profilecosts)
    .where(and(eq(profilecosts.userprofileId, userprofileId), eq(profilecosts.year, year)))
  return { price: p?.v ?? null, cost: c?.v ?? null }
}

export async function userCost(userId: number, year: number) {
  const [r] = await db.select({ v: usercosts.hcost }).from(usercosts)
    .where(and(eq(usercosts.userId, userId), eq(usercosts.year, year)))
  return r?.v ?? null
}
