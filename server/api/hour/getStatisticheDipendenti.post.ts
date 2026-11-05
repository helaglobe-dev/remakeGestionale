import { z } from 'zod'
import { inArray } from 'drizzle-orm'
import { db, schema } from '../../db'

const Body = z.object({ from: z.string(), to: z.string(), user_id: z.array(z.coerce.number()).default([]) })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S') fail(403, 'Non hai i permessi per consultare le statistiche dei dipendenti')
  const b = await readValid(event, Body)
  const users = await db.select().from(schema.users).where(inArray(schema.users.id, b.user_id.length ? b.user_id : [-1]))
  const stats = await employeeStats(users.map(u => u.id), b.from, b.to)
  return ok(stats.map(s => {
    const u = users.find(x => x.id === s.user_id)!
    return { ...s, name: `${u.firstname} ${u.lastname}`, sigla: u.acronym ?? `${u.firstname[0]}${u.lastname[0]}` }
  }))
})
