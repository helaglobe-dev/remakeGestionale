import { z } from 'zod'
import { and, eq, gt, inArray, lt, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

// Body come l'originale: {id, tasks:[{datei, datefi, dateff, task_id, activity_id}]}. L'utente è quello del token.
const Row = z.object({
  datei: z.unknown(), datefi: z.unknown(), dateff: z.unknown(),
  task_id: z.coerce.number().int().positive('Seleziona un task'),
  activity_id: zFk,
  description: z.string().max(2000).nullish(),
})
const Body = z.object({ id: zId, tasks: z.array(Row).min(1, 'Nessuna riga').max(50) })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const { id, tasks: rows } = await readValid(event, Body)
  if (id && rows.length !== 1) fail(422, 'In modifica si salva una sola riga')
  const h = schema.hours

  let ownerId = me.id
  let existingTaskId: number | null = null
  if (id) {
    const [existing] = await db.select().from(h).where(eq(h.id, id))
    if (!existing || existing.status === 'D') fail(404, 'Report ore non trovato')
    if (existing.userId !== me.id && me.role !== 'S') fail(403, 'Puoi modificare solo le tue ore')
    ownerId = existing.userId
    existingTaskId = existing.taskId
  }
  const allowed = new Map((await selectableTasks(ownerId)).map(r => [r.task.id, r]))
  const activities = new Map((await db.select().from(schema.activities)).map(a => [a.id, a]))

  const parsed = rows.map((r, i) => {
    const n = rows.length > 1 ? ` (riga ${i + 1})` : ''
    const day = dayOf(r.datei)
    const start = `${day} ${timeOf(r.datefi)}:00`
    const end = `${day} ${timeOf(r.dateff)}:00`
    if (end <= start) fail(422, `Ora fine minore o uguale all'ora inizio${n}`)
    const task = allowed.get(r.task_id)
    // in modifica resta valido il task originale anche se nel frattempo non è più assegnato ("[NON ASSEGNATO]")
    if (!task && r.task_id !== existingTaskId) fail(422, `Task non selezionabile${n}: deve essere assegnato a te e aperto`)
    const act = r.activity_id ? activities.get(r.activity_id) : undefined
    if (r.activity_id && (!act || act.status === 'D')) fail(422, `Attività non valida${n}`)
    return { day, start, end, minutes: (Date.parse(end.replace(' ', 'T')) - Date.parse(start.replace(' ', 'T'))) / 60000,
      taskId: r.task_id, activityId: r.activity_id, isF: act?.type === 'F', description: r.description ?? null }
  })

  // Regole dell'originale sulle attività ferie/permessi: massimo 8 ore per riga e per giorno
  const fByDay = new Map<string, number>()
  for (const r of parsed.filter(r => r.isF)) {
    if (r.minutes > 480) fail(422, 'Per questa attività non è possibile registrare più di 8 ore')
    fByDay.set(r.day, (fByDay.get(r.day) ?? 0) + r.minutes)
  }
  for (const [day, mins] of fByDay) if (mins > 480) fail(422, `Il ${day} il totale delle ore di ferie/permessi supera 8 ore`)

  // Controllo aggiuntivo (non presente nel frontend originale): niente sovrapposizioni con altre ore dell'utente
  for (const [i, r] of parsed.entries()) {
    for (const o of parsed.slice(i + 1)) if (o.start < r.end && r.start < o.end) fail(422, `Le righe si sovrappongono il ${r.day}`)
    const [clash] = await db.select({ id: h.id, s: h.startdate, e: h.enddate }).from(h).where(and(
      eq(h.userId, ownerId), eq(h.status, 'A'), lt(h.startdate, r.end), gt(h.enddate, r.start), id ? ne(h.id, id) : undefined))
    if (clash) fail(409, `Sovrapposizione con ore già registrate il ${r.day} (${clash.s.slice(11, 16)}–${clash.e.slice(11, 16)})`)
  }

  await db.transaction(async (tx) => {
    for (const r of parsed) {
      const values = { taskId: r.taskId, userId: ownerId, activityId: r.activityId, startdate: r.start, enddate: r.end,
        description: r.description, modified: new Date().toISOString() }
      if (id) await tx.update(h).set(values).where(eq(h.id, id))
      else await tx.insert(h).values(values)
    }
  })
  // il costo reale del progetto deriva dalle ore: si aggiornano i totali dei progetti coinvolti
  const touched = await db.select({ p: schema.tasks.projectId }).from(schema.tasks)
    .where(inArray(schema.tasks.id, [...new Set([...parsed.map(r => r.taskId), ...(existingTaskId ? [existingTaskId] : [])])]))
  await recalcProjectTotals(...new Set(touched.map(x => x.p)))
  return ok(null)
})
