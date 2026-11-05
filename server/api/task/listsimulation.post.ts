import { z } from 'zod'

// Task candidabili alla simulazione di riassegnazione (progetti A/C/I) con il loro carico giornaliero attuale.
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S' && me.role !== 'A') fail(403, 'Non hai i permessi per usare il simulatore')
  const b = await readValid(event, z.object({ from: z.string(), to: z.string() }))
  const rows = await loadTasks(2, b.from, b.to)
  const userIds = [...new Set(rows.map(r => r.task.userId).filter((x): x is number => !!x))]
  const from = rows.reduce((m, r) => (r.task.startdate! < m ? r.task.startdate! : m), b.from).slice(0, 10)
  const to = rows.reduce((m, r) => (r.task.enddate! > m ? r.task.enddate! : m), b.to).slice(0, 10)
  const closed = await closedDays(from, to)
  const abs = await absences(userIds, from, to)
  return ok(rows.map(({ task: t, project }) => ({
    Task: { id: t.id, user_id: t.userId ?? 0, userprofile_id: t.userprofileId ?? 0, shortname: t.shortname,
      startdate: t.startdate, enddate: t.enddate, hours: t.hours,
      carico: t.userId ? taskLoad(t, closed, abs[t.userId] ?? {}) : taskLoad(t, closed, {}) },
    Project: project,
  })))
})
