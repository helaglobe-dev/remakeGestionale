import { z } from 'zod'
import { and, eq, isNull } from 'drizzle-orm'
import { db, schema } from '../../db'

// {id} segna una notifica; {all: true} le segna tutte (l'originale faceva una chiamata per notifica)
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const b = await readValid(event, z.object({ id: z.coerce.number().int().positive().optional(), all: z.boolean().optional() }))
  const n = schema.notifications
  const now = new Date().toISOString()
  if (b.all) await db.update(n).set({ readon: now }).where(and(eq(n.userId, me.id), isNull(n.readon)))
  else if (b.id) await db.update(n).set({ readon: now }).where(and(eq(n.id, b.id), eq(n.userId, me.id), isNull(n.readon)))
  else fail(422, 'Indica la notifica')
  return ok(null)
})
