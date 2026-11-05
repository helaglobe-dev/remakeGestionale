import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

// Listino dell'anno per la stima nel form dei task (lettura per tutti gli utenti autenticati).
export default defineEventHandler(async (event) => {
  const year = Number(getRouterParam(event, 'year'))
  if (!Number.isInteger(year)) fail(400, 'Anno non valido')
  const prices = await db.select().from(schema.profileprices).where(eq(schema.profileprices.year, year))
  const costs = await db.select().from(schema.profilecosts).where(eq(schema.profilecosts.year, year))
  const profiles = await db.select().from(schema.userprofiles)
  return ok(profiles.map(p => ({
    userprofile_id: p.id, year,
    price: prices.find(r => r.userprofileId === p.id)?.hcost ?? null,
    cost: costs.find(r => r.userprofileId === p.id)?.hcost ?? null,
  })))
})
