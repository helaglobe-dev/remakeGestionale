import { z } from 'zod'
import { and, eq, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'data obbligatoria')
// IBAN: niente spazi e checksum mod-97 come il form originale
function validIban(v: string) {
  if (/\s/.test(v) || !/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(v)) return false
  const s = (v.slice(4) + v.slice(0, 4)).replace(/[A-Z]/g, c => String(c.charCodeAt(0) - 55))
  let rem = 0
  for (const ch of s) rem = (rem * 10 + Number(ch)) % 97
  return rem === 1
}
const Body = z.object({
  invoice: z.object({
    id: zId, documenttype: z.enum(['F', 'N', 'S', 'X', 'A']), supplier_id: z.coerce.number().int().positive('Seleziona il fornitore'),
    invoicenumber: zReq(50), invoicedate: day, paymentduedate: day, payment_date: zDate, bank_id: zFk,
    payed: z.enum(['P', 'N']).default('N'), type: z.enum(['B', 'D', 'U']).nullish().transform(v => v ?? null),
    iban: z.string().trim().toUpperCase().nullish().transform(v => (v ? v : null)).refine(v => !v || validIban(v), 'IBAN non valido'),
    causale: zText(255), note: zText(5000), budgetitem_id: zFk,
  }),
  rows: z.array(z.object({
    project_id: zFk, task_id: zFk,
    taxable: z.coerce.number().default(0), vat: z.coerce.number().default(0),
  })).min(1, 'Inserisci almeno una riga'),
})

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  requireInvoiceWrite(me)
  const { invoice: i, rows } = await readValid(event, Body)
  const pi = schema.passiveinvoices
  if (i.payed === 'P' && !i.payment_date) fail(422, 'Indica la data effettiva di pagamento')
  for (const [n, r] of rows.entries()) {
    if (!r.project_id && !i.budgetitem_id) fail(422, `Riga ${n + 1}: indica il progetto (o imputa la fattura a una voce di budget)`)
    if (r.task_id) {
      const [t] = await db.select().from(schema.tasks).where(eq(schema.tasks.id, r.task_id))
      if (!t || t.projectId !== r.project_id) fail(422, `Riga ${n + 1}: il task non appartiene al progetto`)
    }
  }
  const [dup] = await db.select({ id: pi.id }).from(pi).where(and(eq(pi.supplierId, i.supplier_id), eq(pi.invoicenumber, i.invoicenumber),
    eq(sqlYear(pi.invoicedate), i.invoicedate.slice(0, 4)), ne(pi.id, i.id)))
  if (dup) fail(409, `Fattura n. ${i.invoicenumber} del fornitore già registrata nel ${i.invoicedate.slice(0, 4)}`)

  const values = { documenttype: i.documenttype, supplierId: i.supplier_id, invoicenumber: i.invoicenumber, invoicedate: i.invoicedate,
    paymentduedate: i.paymentduedate, paymentDate: i.payment_date, bankId: i.bank_id, payed: i.payed, iban: i.iban, type: i.type,
    causale: i.causale, note: i.note, budgetitemId: i.budgetitem_id, modified: new Date().toISOString() }
  // le righe si sostituiscono sempre: anche duplicando una fattura nascono righe nuove (corregge il bug dell'originale)
  const id = await db.transaction(async (tx) => {
    let id = i.id
    if (id) {
      const res = await tx.update(pi).set(values).where(eq(pi.id, id))
      if (!res.rowsAffected) fail(404, 'Fattura non trovata')
      await tx.delete(schema.passiveinvoicerows).where(eq(schema.passiveinvoicerows.passiveinvoiceId, id))
    }
    else id = (await tx.insert(pi).values(values).returning({ id: pi.id }))[0]!.id
    await tx.insert(schema.passiveinvoicerows).values(rows.map(r => ({ passiveinvoiceId: id, projectId: r.project_id, taskId: r.task_id, taxable: r.taxable, vat: r.vat })))
    return id
  })
  const flagprice = await taskCostMismatch(rows.map(r => r.task_id).filter((x): x is number => !!x))
  return ok({ ...(await listPassiveInvoices({ id }))[0], flagprice })
})
