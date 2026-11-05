import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

// Il dipendente segna il task come completato (P); i responsabili vengono notificati e potranno chiuderlo (C).
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const { task_id } = await readValid(event, z.object({ task_id: z.coerce.number().int().positive() }))
  const [t] = await db.select({ t: schema.tasks, p: schema.projects }).from(schema.tasks)
    .innerJoin(schema.projects, eq(schema.tasks.projectId, schema.projects.id)).where(eq(schema.tasks.id, task_id))
  if (!t) fail(404, 'Task non trovato')
  if (t.t.userId !== me.id && !(await canEditProject(me, t.p.id))) fail(403, 'Puoi completare solo i task assegnati a te')
  if (t.t.status !== 'A') fail(422, 'Il task non è aperto')
  await db.update(schema.tasks).set({ status: 'P', modified: new Date().toISOString() }).where(eq(schema.tasks.id, task_id))
  const owners = await db.select().from(schema.projectusers).where(eq(schema.projectusers.projectId, t.p.id))
  for (const o of owners.filter(o => o.userId !== me.id)) {
    await notify(o.userId, `Task completato: ${t.t.shortname}`,
      `<p>${escapeHtml(`${me.firstname} ${me.lastname}`)} ha completato il task <b>${escapeHtml(t.t.shortname)}</b> del progetto ${escapeHtml(`[${t.p.code}] ${t.p.name}`)}.</p><p>Puoi verificarlo e chiuderlo dal dettaglio del progetto.</p>`,
      `projects/${t.p.id}`)
  }
  return ok(null)
})
