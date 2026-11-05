import { z } from 'zod'

// Simulatore carichi: ricalcola i carichi come se il task fosse assegnato a user_id (nessuna scrittura).
const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
const Body = z.object({
  task_id: z.coerce.number().int().positive(), user_id: z.coerce.number().int().positive(),
  user: z.array(z.coerce.number()).min(1), from: day, to: day, periodo: z.coerce.number().int().min(1).max(3).default(1),
})

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S' && me.role !== 'A') fail(403, 'Non hai i permessi per usare il simulatore')
  const b = await readValid(event, Body)
  const users = [...new Set([...b.user, b.user_id])]
  return ok(await computeLoad(users, 2, b.from, b.to, b.periodo as 1 | 2 | 3, { taskId: b.task_id, userId: b.user_id }))
})
