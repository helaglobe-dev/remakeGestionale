import { z } from 'zod'
import { and, eq, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

// Voci di budget: nell'originale non c'è una schermata di gestione (dati solo lato server); qui le gestisce il superadmin.
const Body = z.object({ Budgetitem: z.object({ id: zId, year: z.coerce.number().int().min(2000).max(2100), group: z.enum(['V', 'F', 'P']), nome: zReq(100), costo: z.coerce.number().min(0) }) })
export default defineEventHandler(async (event) => {
  if ((await requireUser(event)).role !== 'S') fail(403, 'Solo il superadmin gestisce le voci di budget')
  const { Budgetitem: b } = await readValid(event, Body)
  const t = schema.budgetitems
  const [dup] = await db.select({ id: t.id }).from(t).where(and(eq(t.year, b.year), eq(t.group, b.group), eq(t.nome, b.nome), ne(t.id, b.id)))
  if (dup) fail(409, `La voce "${b.nome}" esiste già per il ${b.year}`)
  const { id, ...values } = b
  if (id) await db.update(t).set(values).where(eq(t.id, id))
  else await db.insert(t).values(values)
  return ok(null)
})
