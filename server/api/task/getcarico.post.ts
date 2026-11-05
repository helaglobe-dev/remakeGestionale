import { z } from 'zod'

// Carichi di lavoro. Risposta come l'originale: {presenze, holiday, tasks}
//  presenze[user][giorno | "da -> a"] = ore di carico; holiday[user][giorno] = minuti di assenza; tasks[user] = task che contribuiscono.
const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
const Body = z.object({
  stato: z.coerce.number().int().min(1).max(2),
  user: z.array(z.union([z.object({ id: z.coerce.number() }).passthrough().transform(u => u.id), z.coerce.number()])).min(1, 'Seleziona almeno un dipendente'),
  from: day, to: day,
  periodo: z.coerce.number().int().min(1).max(3).default(1),
})

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S' && me.role !== 'A') fail(403, 'Non hai i permessi per consultare i carichi di lavoro')
  const b = await readValid(event, Body)
  if (b.to < b.from) fail(422, 'Periodo non valido')
  return ok(await computeLoad(b.user, b.stato as 1 | 2, b.from, b.to, b.periodo as 1 | 2 | 3))
})
