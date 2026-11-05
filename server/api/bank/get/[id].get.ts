import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  const [b] = await db.select().from(schema.banks).where(eq(schema.banks.id, idParam(event)))
  if (!b) fail(404, 'Banca non trovata')
  return ok(b)
})
