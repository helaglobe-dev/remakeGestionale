import { count, eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  if ((await requireUser(event)).role !== 'S') fail(403, 'Solo il superadmin gestisce le banche')
  const id = idParam(event)
  const [a] = await db.select({ n: count() }).from(schema.activeinvoices).where(eq(schema.activeinvoices.bankId, id))
  const [p] = await db.select({ n: count() }).from(schema.passiveinvoices).where(eq(schema.passiveinvoices.bankId, id))
  if (a!.n + p!.n) fail(409, `Banca usata da ${a!.n + p!.n} fatture: non si può eliminare`)
  await db.delete(schema.banks).where(eq(schema.banks.id, id))
  return ok(null)
})
