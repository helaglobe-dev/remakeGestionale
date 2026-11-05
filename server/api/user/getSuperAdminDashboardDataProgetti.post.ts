import { and, eq } from 'drizzle-orm'
import { db, schema } from '../../db'

export default defineEventHandler(async (event) => {
  await requireDashboard(event)
  const b = (await readBody(event)) ?? {}
  const [from, to] = yearRange(b.fromprogetti, b.toprogetti)
  let users: number[] = Array.isArray(b.users) ? b.users.map((u: any) => Number(u?.id ?? u)).filter(Boolean) : []
  if (!users.length) {
    users = (await db.select({ id: schema.users.id }).from(schema.users)
      .where(and(eq(schema.users.activeuser, 1), eq(schema.users.usedindashboard, 1)))).map(u => u.id)
  }
  return ok(await dashboardProgetti(from, to, users, { onlyopen: b.onlyopenProgetti ?? 'O', internal: b.internalFilterProgetti ?? 'ALL' }))
})
