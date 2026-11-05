import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  if ((event.context.user as SessionUser).role !== 'S') fail(403, 'Non hai i permessi per questa operazione')
  await db.delete(schema.holidays).where(eq(schema.holidays.id, idParam(event)))
  return ok(null)
})
