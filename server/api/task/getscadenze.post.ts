import { z } from 'zod'
import { and, eq, gte, inArray, lte, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

const Body = z.object({ start: z.string(), end: z.string(), onlymytask: z.boolean().default(true) })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const b = await readValid(event, Body)
  const t = schema.tasks
  const p = schema.projects
  const rows = await db.select({ t, p, color: schema.projectcolors.color }).from(t)
    .innerJoin(p, eq(t.projectId, p.id))
    .leftJoin(schema.projectcolors, eq(p.projectcolorId, schema.projectcolors.id))
    .where(and(inArray(t.status, ['A', 'P']), eq(p.openstatus, 'A'), ne(p.type, 'F'),
      gte(t.enddate, b.start), lte(t.enddate, b.end), b.onlymytask ? eq(t.userId, me.id) : undefined))
  return ok(rows.map(({ t, p, color }) => ({
    Task: { id: t.id, shortname: t.shortname, enddate: t.enddate, status: t.status, color: color ?? '#757575' },
    Project: { id: p.id, code: p.code, name: p.name },
  })))
})
