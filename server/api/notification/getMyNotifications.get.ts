import { desc, eq } from 'drizzle-orm'
import { db, schema } from '../../db'

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const n = schema.notifications
  const rows = await db.select().from(n).where(eq(n.userId, me.id)).orderBy(desc(n.created), desc(n.id)).limit(500)
  return ok(rows.map(({ userId: _u, ...r }) => r))
})
