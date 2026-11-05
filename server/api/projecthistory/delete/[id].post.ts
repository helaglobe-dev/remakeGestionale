import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const id = idParam(event)
  const [h] = await db.select({ projectId: schema.projecthistories.projectId }).from(schema.projecthistories).where(eq(schema.projecthistories.id, id))
  if (!h) fail(404, 'Storico non trovato')
  if (!(await canEditProject(me, h.projectId))) fail(403, 'Non puoi eliminare gli storici di questo progetto')
  await db.update(schema.projecthistories).set({ status: 'D' }).where(eq(schema.projecthistories.id, id))
  return ok(null)
})
