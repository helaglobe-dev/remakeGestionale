import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.viewbudget !== 1 && me.hasinvoice !== 1) fail(403, 'Non hai i permessi per il budget')
  const { year } = await readValid(event, z.object({ year: z.coerce.number().int() }))
  return ok(await db.select().from(schema.budgetitems).where(eq(schema.budgetitems.year, year)).orderBy(schema.budgetitems.group, schema.budgetitems.nome))
})
