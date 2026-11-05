import { z } from 'zod'
import { and, eq, gte, lte } from 'drizzle-orm'
import { db, schema } from '../../db'

// Ore dell'utente (o di un altro utente se superadmin) nel periodo, per il calendario attività.
const Body = z.object({ start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  project_id: zFk, user_id: zFk })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const b = await readValid(event, Body)
  const userId = b.user_id && b.user_id !== me.id ? (me.role === 'S' ? b.user_id : fail(403, 'Non puoi vedere le ore di altri utenti')) : me.id
  const h = schema.hours
  const rows = await db.select({ h, t: schema.tasks, p: schema.projects, a: schema.activities, color: schema.projectcolors.color })
    .from(h).innerJoin(schema.tasks, eq(h.taskId, schema.tasks.id))
    .innerJoin(schema.projects, eq(schema.tasks.projectId, schema.projects.id))
    .leftJoin(schema.projectcolors, eq(schema.projects.projectcolorId, schema.projectcolors.id))
    .leftJoin(schema.activities, eq(h.activityId, schema.activities.id))
    .where(and(eq(h.userId, userId), eq(h.status, 'A'), gte(h.startdate, `${b.start} 00:00:00`), lte(h.startdate, `${b.end} 23:59:59`),
      b.project_id ? eq(schema.tasks.projectId, b.project_id) : undefined))
    .orderBy(h.startdate)
  return ok(rows.map(({ h, t, p, a, color }) => ({
    id: h.id, task_id: t.id, task_name: t.shortname, project_code: p.code, project_name: p.name,
    color: color ?? '#1e88e5', startdate: h.startdate, enddate: h.enddate, description: h.description,
    activity_id: h.activityId, activity_name: a?.name ?? null, acttype: a?.type ?? null,
    _ore: Math.round((Date.parse(h.enddate.replace(' ', 'T')) - Date.parse(h.startdate.replace(' ', 'T'))) / 36e3) / 100,
  })))
})
