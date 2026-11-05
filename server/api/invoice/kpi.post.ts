import { z } from 'zod'

const Body = z.object({ client: zFk, project: zFk, aperto: z.coerce.number().int().min(0).max(2).default(1) })
export default defineEventHandler(async (event) => {
  if ((await requireUser(event)).viewkpi !== 1) fail(403, 'Non hai i permessi per visualizzare i KPI')
  const b = await readValid(event, Body)
  return ok(await kpiRows({ client: b.client, project: b.project, aperto: b.aperto as 0 | 1 | 2 }))
})
