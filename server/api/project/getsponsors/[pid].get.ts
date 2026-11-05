import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const pid = Number(getRouterParam(event, 'pid'))
  await requireProjectFinance(me, pid)
  const rows = await db.select({ s: schema.sponsors, c: schema.clients }).from(schema.sponsors)
    .innerJoin(schema.clients, eq(schema.sponsors.clientId, schema.clients.id)).where(eq(schema.sponsors.projectId, pid))
  return ok(rows.map(({ s, c }) => ({ id: s.id, client_id: c.id, name: c.name, paymenttype: c.paymenttype })))
})
