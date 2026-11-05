import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

// Senza id: l'utente cambia la propria password. Con id: il superadmin forza la password di un altro utente.
const Body = z.object({ id: z.coerce.number().int().positive().optional(), password: z.string(), rpassword: z.string() })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const b = await readValid(event, Body)
  const forced = b.id != null && b.id !== me.id
  if (forced && me.role !== 'S') fail(403, 'Non hai i permessi per cambiare la password di altri utenti')
  if (b.password !== b.rpassword) fail(422, 'Le password non coincidono')
  if (forced ? !ADMIN_PASSWORD.test(b.password) : !STRONG_PASSWORD.test(b.password)) {
    fail(422, forced ? ADMIN_PASSWORD_MSG : STRONG_PASSWORD_MSG)
  }
  const userId = forced ? b.id! : me.id
  const res = await db.update(schema.users).set({ passwordHash: await hashPassword(b.password) }).where(eq(schema.users.id, userId))
  if (!res.rowsAffected) fail(404, 'Utente non trovato')
  // la password forzata invalida le sessioni aperte dell'utente
  if (forced) await db.delete(schema.sessions).where(eq(schema.sessions.userId, userId))
  return ok(null)
})
