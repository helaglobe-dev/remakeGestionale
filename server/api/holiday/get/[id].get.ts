import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  const [r] = await db.select().from(schema.holidays).where(eq(schema.holidays.id, idParam(event)))
  if (!r) fail(404, 'Evento non trovato')
  return ok(r)
})
