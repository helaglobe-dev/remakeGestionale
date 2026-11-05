import { and, eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  await requireUser(event)
  const h = schema.hours
  const rows = await db.select({ h, u: schema.users, a: schema.activities }).from(h)
    .innerJoin(schema.users, eq(h.userId, schema.users.id))
    .leftJoin(schema.activities, eq(h.activityId, schema.activities.id))
    .where(and(eq(h.taskId, idParam(event)), eq(h.status, 'A'))).orderBy(h.startdate)
  return ok(rows.map(({ h, u, a }) => ({
    Hour: { id: h.id, user_id: h.userId, startdate: h.startdate, enddate: h.enddate, description: h.description,
      _ore: Math.round((Date.parse(h.enddate.replace(' ', 'T')) - Date.parse(h.startdate.replace(' ', 'T'))) / 36e3) / 100 },
    User: { firstname: u.firstname, lastname: u.lastname },
    Activity: a ? { id: a.id, name: a.name, type: a.type } : null,
  })))
})
