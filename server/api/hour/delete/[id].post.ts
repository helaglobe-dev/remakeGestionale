import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const id = idParam(event)
  const [r] = await db.select().from(schema.hours).where(eq(schema.hours.id, id))
  if (!r || r.status === 'D') fail(404, 'Report ore non trovato')
  if (r.userId !== me.id && me.role !== 'S') fail(403, 'Puoi eliminare solo le tue ore')
  await db.delete(schema.hours).where(eq(schema.hours.id, id))
  const [t] = await db.select({ p: schema.tasks.projectId }).from(schema.tasks).where(eq(schema.tasks.id, r.taskId))
  if (t) await recalcProjectTotals(t.p)
  return ok(null)
})
