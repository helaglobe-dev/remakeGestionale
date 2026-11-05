import { z } from 'zod'

// /0 = tutti gli eventi di calendario (calendario To Do); /1 = solo festività e chiusure (giorni non lavorativi).
export default defineEventHandler(async (event) => {
  await requireUser(event)
  const b = await readValid(event, z.object({ start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/) }))
  const onlyClosed = getRouterParam(event, 'all') === '1'
  return ok(await calendarEvents(b.start, b.end, onlyClosed ? ['F', 'C'] : undefined))
})
