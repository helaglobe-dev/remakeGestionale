import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  const id = idParam(event)
  const [row] = await db.select({ t: schema.tasks, ...TASK_CALC })
    .from(schema.tasks).where(eq(schema.tasks.id, id))
  if (!row) fail(404, 'Task non trovato')
  const { t, ...calc } = row
  return ok(serializeTask(t, calc))
})
