import { and, eq, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

export default defineEventHandler(async () => {
  const p = schema.projects
  return ok(await db.select({ id: p.id, code: p.code, name: p.name, status: p.status, type: p.type }).from(p)
    .where(and(eq(p.openstatus, 'A'), ne(p.status, 'D'))).orderBy(p.code))
})
