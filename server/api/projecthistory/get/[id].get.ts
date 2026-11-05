import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  await requireUser(event)
  const [h] = await db.select().from(schema.projecthistories).where(eq(schema.projecthistories.id, idParam(event)))
  if (!h || h.status === 'D') fail(404, 'Storico non trovato')
  let history: any = null
  try { history = h.history ? JSON.parse(h.history) : null } catch { /* istantanea non leggibile */ }
  return ok({ id: h.id, project_id: h.projectId, type: h.type, oldvalue: h.oldvalue, newvalue: h.newvalue, created: h.created, user_id: h.userId ?? 0, history })
})
