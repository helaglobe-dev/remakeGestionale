import { count, eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  requireInvoiceWrite(await requireUser(event))
  const id = idParam(event)
  const [n] = await db.select({ n: count() }).from(schema.activeinvoices).where(eq(schema.activeinvoices.paymentTrancheId, id))
  if (n!.n) fail(409, 'La tranche ha una fattura emessa: elimina prima la fattura')
  await db.delete(schema.paymenttranches).where(eq(schema.paymenttranches.id, id))
  return ok(null)
})
