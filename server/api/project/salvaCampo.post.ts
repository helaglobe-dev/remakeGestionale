import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

// Salvataggio puntuale dei campi economici, come project/salvaCampo dell'originale.
const Body = z.discriminatedUnion('field', [
  z.object({ id: z.coerce.number().int().positive(), field: z.enum(['incrementoproposta', 'scontoproposta', 'newtotaleproposta']), value: z.coerce.number().min(0) }),
  z.object({ id: z.coerce.number().int().positive(), field: z.enum(['tipoincrementoproposta', 'tiposcontoproposta']), value: z.enum(['V', 'P']) }),
  z.object({ id: z.coerce.number().int().positive(), field: z.enum(['noteincremento', 'notesconto']), value: z.string().max(2000).nullable() }),
])

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const b = await readValid(event, Body)
  if (!(await canEditProject(user, b.id))) fail(403, 'Non hai i permessi per modificare questo progetto')
  await db.update(schema.projects)
    .set({ [b.field]: b.value, modified: new Date().toISOString() })
    .where(eq(schema.projects.id, b.id))
  return ok(await getProject(b.id))
})
