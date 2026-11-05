import { z } from 'zod'

// Elenco admin: il periodo si applica alla data prevista di emissione (verificato).
const Body = z.object({ project: zFk, from: z.string().nullish(), to: z.string().nullish() })

export default defineEventHandler(async (event) => {
  requireInvoiceAdmin(await requireUser(event))
  const b = await readValid(event, Body)
  return ok(await listTranches({ projectId: b.project, from: b.from, to: b.to }))
})
