import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const h = schema.hours
  const [r] = await db.select({ h, name: schema.tasks.shortname }).from(h)
    .innerJoin(schema.tasks, eq(h.taskId, schema.tasks.id)).where(eq(h.id, idParam(event)))
  if (!r || r.h.status === 'D') fail(404, 'Report ore non trovato')
  if (r.h.userId !== me.id && me.role !== 'S' && me.role !== 'A') fail(403, 'Non puoi vedere le ore di altri utenti')
  return ok({ id: r.h.id, user_id: r.h.userId, startdate: r.h.startdate, enddate: r.h.enddate, task_id: r.h.taskId,
    activity_id: r.h.activityId, description: r.h.description, name: r.name })
})
