import { count, eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  if ((await requireUser(event)).role !== 'S') fail(403, 'Solo il superadmin gestisce le voci di budget')
  const id = idParam(event)
  const [n] = await db.select({ n: count() }).from(schema.passiveinvoices).where(eq(schema.passiveinvoices.budgetitemId, id))
  if (n!.n) fail(409, `Voce collegata a ${n!.n} fatture passive: non si può eliminare`)
  await db.delete(schema.budgetitems).where(eq(schema.budgetitems.id, id))
  return ok(null)
})
