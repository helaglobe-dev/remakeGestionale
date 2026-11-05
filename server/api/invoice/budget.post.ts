import { z } from 'zod'

export default defineEventHandler(async (event) => {
  if ((await requireUser(event)).viewbudget !== 1) fail(403, 'Non hai i permessi per visualizzare il budget')
  const { year } = await readValid(event, z.object({ year: z.coerce.number().int().min(2000).max(2100) }))
  return ok(await budget(year))
})
