import { z } from 'zod'
import { and, eq, inArray, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

// Lista "Assegnazioni" della To Do: task aperti dei progetti aperti, solo i miei o di tutti.
const Body = z.object({ project_id: zFk, onlymytask: z.boolean().default(true) })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const b = await readValid(event, Body)
  const t = schema.tasks
  const p = schema.projects
  const rows = await db.select({ t, p, u: schema.users, color: schema.projectcolors.color, rhours: TASK_NHOURS }).from(t)
    .innerJoin(p, eq(t.projectId, p.id))
    .leftJoin(schema.users, eq(t.userId, schema.users.id))
    .leftJoin(schema.projectcolors, eq(p.projectcolorId, schema.projectcolors.id))
    .where(and(inArray(t.status, ['A', 'P']), eq(p.openstatus, 'A'), ne(p.status, 'D'), ne(p.type, 'F'),
      b.onlymytask ? eq(t.userId, me.id) : undefined, b.project_id ? eq(t.projectId, b.project_id) : undefined))
    .orderBy(t.enddate)
  return ok(rows.map(({ t, p, u, color, rhours }) => ({
    Task: { id: t.id, shortname: t.shortname, description: t.description, hours: t.hours, rhours, project_id: t.projectId,
      startdate: t.startdate, enddate: t.enddate, status: t.status, user_id: t.userId ?? 0 },
    Project: { id: p.id, code: p.code, name: p.name, color: color ?? '#757575', client_id: p.clientId ?? 0 },
    User: u ? { id: u.id, firstname: u.firstname, lastname: u.lastname } : null,
  })))
})
