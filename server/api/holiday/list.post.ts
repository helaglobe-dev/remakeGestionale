import { z } from 'zod'
import { like, or } from 'drizzle-orm'
import { db, schema } from '../../db'

// Eventi dell'anno richiesto + ricorrenti (anno 0000)
export default defineEventHandler(async (event) => {
  const { year } = await readValid(event, z.object({ year: z.coerce.number().int() }))
  const h = schema.holidays
  return ok(await db.select().from(h).where(or(like(h.day, `${year}-%`), like(h.day, '0000-%'))).orderBy(h.day))
})
