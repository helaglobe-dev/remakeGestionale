import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  requireInvoiceWrite(await requireUser(event))
  await db.delete(schema.activeinvoices).where(eq(schema.activeinvoices.id, idParam(event)))
  return ok(null)
})
