import { count, eq, or } from 'drizzle-orm'
import { db, schema } from '../../../db'

// Un utente con storico (ore, task, responsabilità) non si cancella: va disattivato, per non perdere i dati collegati.
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S') fail(403, 'Non hai i permessi per eliminare utenti')
  const id = idParam(event)
  if (id === me.id) fail(422, 'Non puoi eliminare il tuo utente')
  const [h] = await db.select({ n: count() }).from(schema.hours).where(eq(schema.hours.userId, id))
  const [t] = await db.select({ n: count() }).from(schema.tasks).where(eq(schema.tasks.userId, id))
  const [p] = await db.select({ n: count() }).from(schema.projectusers).where(eq(schema.projectusers.userId, id))
  if (h!.n || t!.n || p!.n) {
    fail(409, `L'utente ha ${h!.n} registrazioni ore, ${t!.n} task e ${p!.n} progetti: disattivalo invece di eliminarlo`)
  }
  await db.delete(schema.users).where(eq(schema.users.id, id))
  return ok({ id })
})
