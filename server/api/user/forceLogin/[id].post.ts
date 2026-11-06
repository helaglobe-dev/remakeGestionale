import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

// Impersonazione: solo superadmin, verso un utente diverso da sé. Restituisce un token come il login.
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S') fail(403, 'Solo il superadmin può impersonare un utente')
  const id = idParam(event)
  if (id === me.id) fail(422, 'Stai già usando questo utente')
  const [u] = await db.select().from(schema.users).where(eq(schema.users.id, id))
  if (!u) fail(404, 'Utente non trovato')
  console.info(`[impersonazione] utente ${me.id} → utente ${id}`)
  const token = await createSession(id)
  setSessionCookie(event, token)
  return ok({ user: { ...publicUser(u), token } })
})
