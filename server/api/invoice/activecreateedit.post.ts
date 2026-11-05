import { z } from 'zod'
import { and, eq, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'data obbligatoria')
const Body = z.object({ invoice: z.object({
  id: zId, project_id: z.coerce.number().int().positive('Seleziona il progetto'), payment_tranche_id: zFk, bank_id: zFk,
  invoicenumber: zReq(50), invoicedate: day,
  taxable: z.coerce.number().default(0), vat: z.coerce.number().default(0),
  paymentduedate: day, payment_date: zDate, payed: z.enum(['P', 'N']).default('N'),
  anticipobancario: zFlag, percentualeanticipo: z.coerce.number().min(0).max(100).default(0),
  meseannoanticipo: z.string().regex(/^\d{4}-\d{2}$/).nullish().transform(v => v ?? null),
  note: zText(5000),
}) })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  requireInvoiceWrite(me)
  const { invoice: i } = await readValid(event, Body)
  const ai = schema.activeinvoices
  if (i.payed === 'P' && !i.payment_date) fail(422, 'Indica la data effettiva di pagamento')
  if (i.payment_tranche_id) {
    const [t] = await db.select().from(schema.paymenttranches).where(eq(schema.paymenttranches.id, i.payment_tranche_id))
    if (!t || t.projectId !== i.project_id) fail(422, 'La tranche non appartiene al progetto della fattura')
  }
  // numero fattura unico nell'anno
  const [dup] = await db.select({ id: ai.id }).from(ai).where(and(eq(ai.invoicenumber, i.invoicenumber),
    eq(sqlYear(ai.invoicedate), i.invoicedate.slice(0, 4)), ne(ai.id, i.id)))
  if (dup) fail(409, `Esiste già la fattura n. ${i.invoicenumber} nel ${i.invoicedate.slice(0, 4)}`)
  const values = {
    projectId: i.project_id, paymentTrancheId: i.payment_tranche_id, bankId: i.bank_id, invoicenumber: i.invoicenumber,
    invoicedate: i.invoicedate, taxable: i.taxable, vat: i.vat, paymentduedate: i.paymentduedate, paymentDate: i.payment_date,
    payed: i.payed, anticipobancario: i.anticipobancario,
    // come l'originale: senza anticipo bancario si azzerano percentuale e mese
    percentualeanticipo: i.anticipobancario ? i.percentualeanticipo : 0, meseannoanticipo: i.anticipobancario ? i.meseannoanticipo : null,
    note: i.note, modified: new Date().toISOString(),
  }
  let id = i.id
  if (id) {
    const res = await db.update(ai).set(values).where(eq(ai.id, id))
    if (!res.rowsAffected) fail(404, 'Fattura non trovata')
  }
  else id = (await db.insert(ai).values(values).returning({ id: ai.id }))[0]!.id
  return ok((await listActiveInvoices({ id }))[0])
})
