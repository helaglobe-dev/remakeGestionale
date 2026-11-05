import { and, desc, eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

// Storici di un progetto (senza istantanea, che si legge con projecthistory/get)
export default defineEventHandler(async (event) => {
  await requireUser(event)
  const h = schema.projecthistories
  const rows = await db.select({ id: h.id, type: h.type, oldvalue: h.oldvalue, newvalue: h.newvalue, created: h.created, userId: h.userId,
    firstname: schema.users.firstname, lastname: schema.users.lastname })
    .from(h).leftJoin(schema.users, eq(h.userId, schema.users.id))
    .where(and(eq(h.projectId, idParam(event)), eq(h.status, 'A'))).orderBy(desc(h.created), desc(h.id))
  return ok(rows.map(r => ({
    Projecthistory: { id: r.id, type: r.type, oldvalue: r.oldvalue, newvalue: r.newvalue, created: r.created, user_id: r.userId ?? 0 },
    User: { id: r.userId ?? 0, name: r.firstname ? `${r.firstname} ${r.lastname}` : '' },
  })))
})
