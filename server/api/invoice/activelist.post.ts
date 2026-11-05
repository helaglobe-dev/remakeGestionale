import { z } from 'zod'

// Elenco admin: il periodo si applica alla scadenza (verificato).
const Body = z.object({ client: zFk, project: zFk, from: z.string().nullish(), to: z.string().nullish() })

export default defineEventHandler(async (event) => {
  requireInvoiceAdmin(await requireUser(event))
  const b = await readValid(event, Body)
  return ok(await listActiveInvoices({ clientId: b.client, projectId: b.project, from: b.from, to: b.to }))
})
