import { z } from 'zod'

// Elenco admin: il periodo si applica alla scadenza (verificato); filtropay P/N/null.
const Body = z.object({ supplier: zFk, project: zFk, from: z.string().nullish(), to: z.string().nullish(), filtropay: z.string().nullish() })

export default defineEventHandler(async (event) => {
  requireInvoiceAdmin(await requireUser(event))
  const b = await readValid(event, Body)
  return ok(await listPassiveInvoices({ supplierId: b.supplier, projectId: b.project, from: b.from, to: b.to, payed: b.filtropay }))
})
