import { z } from 'zod'
import { eq, sql } from 'drizzle-orm'
import { db, schema } from '../../db'

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullish().transform(v => v ?? null)
const fk = z.coerce.number().int().min(0).nullish().transform(v => (v ? v : null))

const TaskIn = z.object({
  id: z.coerce.number().int().min(0).default(0),
  project_id: z.coerce.number().int().positive(),
  shortname: z.string().trim().min(1, 'obbligatorio').max(255),
  description: z.string().max(5000).nullish(),
  note: z.string().max(5000).nullish(),
  type: z.enum(['F', 'V', 'P']).default('P'),
  status: z.enum(['A', 'P', 'C']).default('A'),
  internalactivity: z.coerce.number().int().min(0).max(1).default(1),
  esecutivo: z.coerce.number().int().min(0).max(1).default(0),
  iscr: z.coerce.number().int().min(0).max(1).default(0),
  hours: z.coerce.number().min(0).default(0),
  startdate: date,
  enddate: date,
  user_id: fk,
  userprofile_id: fk,
  supplier_id: fk,
  macrovoice_id: fk,
  genericsupplier: z.string().max(255).nullish(),
  supplierprice: z.coerce.number().min(0).default(0),
  suppliercost: z.coerce.number().min(0).default(0),
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const { Task: t } = await readValid(event, z.object({ Task: TaskIn }))
  if (!(await canEditProject(user, t.project_id))) fail(403, 'Non hai i permessi per modificare i task di questo progetto')

  // Regole del form originale per le attività interne
  if (t.internalactivity === 1) {
    if (!t.hours) fail(422, 'Inserire ore budget')
    if (t.user_id && !t.userprofile_id) fail(422, 'Inserire profilo professionale')
  }
  if (t.startdate && t.enddate && t.enddate < t.startdate) fail(422, 'La data di fine precede la data di inizio')

  const values = {
    projectId: t.project_id, shortname: t.shortname, description: t.description ?? null, note: t.note ?? null,
    type: t.type, status: t.status, internalactivity: t.internalactivity, esecutivo: t.esecutivo, iscr: t.iscr,
    hours: t.hours, startdate: t.startdate, enddate: t.enddate,
    userId: t.internalactivity ? t.user_id : null,
    userprofileId: t.internalactivity ? t.userprofile_id : null,
    supplierId: t.internalactivity ? null : t.supplier_id,
    macrovoiceId: t.macrovoice_id,
    genericsupplier: t.internalactivity ? null : (t.genericsupplier ?? null),
    supplierprice: t.supplierprice, suppliercost: t.suppliercost,
    modified: new Date().toISOString(),
  }

  let id = t.id
  if (id === 0) {
    const [agg] = await db.select({ max: sql<number>`coalesce(max(${schema.tasks.ordering}), 0)` })
      .from(schema.tasks).where(eq(schema.tasks.projectId, t.project_id))
    const [row] = await db.insert(schema.tasks).values({ ...values, ordering: (agg?.max ?? 0) + 1 }).returning({ id: schema.tasks.id })
    id = row!.id
  }
  else {
    const [existing] = await db.select({ projectId: schema.tasks.projectId }).from(schema.tasks).where(eq(schema.tasks.id, id))
    if (!existing) fail(404, 'Task non trovato')
    if (existing.projectId !== t.project_id) fail(422, 'Il task appartiene a un altro progetto')
    await db.update(schema.tasks).set(values).where(eq(schema.tasks.id, id))
  }
  await recalcProjectTotals(t.project_id)
  const [saved] = await db.select({ t: schema.tasks, ...TASK_CALC }).from(schema.tasks).where(eq(schema.tasks.id, id))
  const { t: row, ...calc } = saved!
  return ok(serializeTask(row, calc))
})
