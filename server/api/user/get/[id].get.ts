import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  if ((await requireUser(event)).role !== 'S') fail(403, 'Non hai i permessi per questa operazione')
  const [u] = await db.select().from(schema.users).where(eq(schema.users.id, idParam(event)))
  if (!u) fail(404, 'Utente non trovato')
  return ok(publicUser(u))
})
