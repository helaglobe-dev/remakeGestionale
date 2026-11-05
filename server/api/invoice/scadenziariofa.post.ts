import { z } from 'zod'

const Body = z.object({ client: zFk, project: zFk, anno_da: z.coerce.number().int(), anno_a: z.coerce.number().int(), spostate: z.any().optional() })
export default defineEventHandler(async (event) => {
  requireInvoiceAdmin(await requireUser(event))
  const b = await readValid(event, Body)
  if (b.anno_a < b.anno_da) fail(422, 'Intervallo di anni non valido')
  return ok(await scadenziarioFatture({ client: b.client, project: b.project, from: b.anno_da, to: b.anno_a }))
})
