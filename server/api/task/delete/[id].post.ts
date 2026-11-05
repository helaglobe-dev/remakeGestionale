import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

// Eliminazione logica (stato "D") come nell'originale: il task resta visibile con "mostra eliminati".
export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = idParam(event)
  const [t] = await db.select({ projectId: schema.tasks.projectId }).from(schema.tasks).where(eq(schema.tasks.id, id))
  if (!t) fail(404, 'Task non trovato')
  if (!(await canEditProject(user, t.projectId))) fail(403, 'Non hai i permessi per eliminare questo task')
  await db.update(schema.tasks).set({ status: 'D', modified: new Date().toISOString() }).where(eq(schema.tasks.id, id))
  await recalcProjectTotals(t.projectId)
  return ok({ id })
})
