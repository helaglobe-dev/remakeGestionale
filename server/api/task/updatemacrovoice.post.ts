import { z } from 'zod'
import { eq, inArray } from 'drizzle-orm'
import { db, schema } from '../../db'

// Economics: assegna le macrovoci ai task (0 = non assegnato)
const Body = z.object({ task: z.array(z.object({ id: z.coerce.number().int().positive(), macrovoice_id: z.coerce.number().int().min(0) })).min(1) })
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const { task } = await readValid(event, Body)
  const rows = await db.select({ id: schema.tasks.id, projectId: schema.tasks.projectId }).from(schema.tasks).where(inArray(schema.tasks.id, task.map(t => t.id)))
  for (const pid of new Set(rows.map(r => r.projectId))) if (!(await canEditProject(me, pid))) fail(403, 'Non puoi modificare i task di questo progetto')
  for (const t of task) await db.update(schema.tasks).set({ macrovoiceId: t.macrovoice_id || null }).where(eq(schema.tasks.id, t.id))
  return ok(null)
})
