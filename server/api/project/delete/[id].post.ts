import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

// Nell'originale è una GET; qui è POST perché modifica dati.
// Come nell'originale lo stato "D" (Eliminato) è un'eliminazione logica: il record resta consultabile.
export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = idParam(event)
  if (!(await canEditProject(user, id))) fail(403, 'Non hai i permessi per eliminare questo progetto')
  const [before] = await db.select({ status: schema.projects.status }).from(schema.projects).where(eq(schema.projects.id, id))
  const res = await db.update(schema.projects)
    .set({ status: 'D', modified: new Date().toISOString() })
    .where(eq(schema.projects.id, id))
  if (!res.rowsAffected) fail(404, 'Progetto non trovato')
  await addHistory(id, user.id, 'S', before?.status ?? null, 'D')
  return ok({ id })
})
