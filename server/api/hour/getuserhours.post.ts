import { z } from 'zod'
import { and, eq, gte, inArray, lte } from 'drizzle-orm'
import { db, schema } from '../../db'

// Consultazione ore di tutti i dipendenti (Dipendenti > Imputazione ore, superadmin). Nessun dato sensibile dell'utente.
const Body = z.object({ from: z.string(), to: z.string(), user_id: z.array(z.coerce.number()).default([]), project_id: zFk })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S') fail(403, 'Non hai i permessi per consultare le ore dei dipendenti')
  const b = await readValid(event, Body)
  const h = schema.hours
  const rows = await db.select({ h, t: schema.tasks, p: schema.projects, a: schema.activities }).from(h)
    .innerJoin(schema.tasks, eq(h.taskId, schema.tasks.id))
    .innerJoin(schema.projects, eq(schema.tasks.projectId, schema.projects.id))
    .leftJoin(schema.activities, eq(h.activityId, schema.activities.id))
    .where(and(eq(h.status, 'A'), inArray(h.userId, b.user_id.length ? b.user_id : [-1]),
      gte(h.startdate, `${b.from} 00:00:00`), lte(h.startdate, `${b.to} 23:59:59`),
      b.project_id ? eq(schema.tasks.projectId, b.project_id) : undefined))
    .orderBy(h.startdate)
  return ok(rows.map(({ h, t, p, a }) => ({
    Hour: { id: h.id, user_id: h.userId, startdate: h.startdate, enddate: h.enddate, description: h.description,
      _ore: Math.round((Date.parse(h.enddate.replace(' ', 'T')) - Date.parse(h.startdate.replace(' ', 'T'))) / 36e3) / 100 },
    Task: { id: t.id, project_id: t.projectId, shortname: t.shortname },
    Project: { id: p.id, code: p.code, name: p.name },
    Activity: a ? { id: a.id, name: a.name, type: a.type } : null,
  })))
})
