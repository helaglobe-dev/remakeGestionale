import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

// Conferma della simulazione: cambia l'assegnatario e lo notifica.
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const b = await readValid(event, z.object({ task_id: z.coerce.number().int().positive(), user_id: z.coerce.number().int().positive() }))
  const [t] = await db.select({ t: schema.tasks, p: schema.projects }).from(schema.tasks)
    .innerJoin(schema.projects, eq(schema.tasks.projectId, schema.projects.id)).where(eq(schema.tasks.id, b.task_id))
  if (!t) fail(404, 'Task non trovato')
  if (me.role !== 'S' && me.role !== 'A' && !(await canEditProject(me, t.p.id))) fail(403, 'Non puoi riassegnare questo task')
  const [u] = await db.select().from(schema.users).where(eq(schema.users.id, b.user_id))
  if (!u || u.activeuser !== 1) fail(422, 'Dipendente non valido o non attivo')
  await db.update(schema.tasks).set({ userId: u.id, modified: new Date().toISOString() }).where(eq(schema.tasks.id, b.task_id))
  if (u.id !== me.id) {
    await notify(u.id, `Nuovo task assegnato: ${t.t.shortname}`,
      `<p>Ti è stato assegnato il task <b>${escapeHtml(t.t.shortname)}</b> del progetto ${escapeHtml(`[${t.p.code}] ${t.p.name}`)}.</p>`, 'todolist')
  }
  return ok(null)
})
