import { z } from 'zod'

const Body = z.object({
  client: z.coerce.number().int().nullish(),
  status: z.array(z.string()).nullish(),
  openstatus: z.union([z.string(), z.number()]).nullish(),
  responsabile: z.coerce.number().int().nullish(),
  from: z.string().nullish(),
  to: z.string().nullish(),
}).partial()

export default defineEventHandler(async (event) => {
  const f = await readValid(event, Body)
  return ok(await listProjects({ ...f, status: f.status ?? [] }))
})
