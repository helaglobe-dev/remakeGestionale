import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

// Body come l'originale: {id, bankname}; accetta anche {id, name} come in lettura. Solo superadmin.
export default defineEventHandler(async (event) => {
  if ((await requireUser(event)).role !== 'S') fail(403, 'Solo il superadmin gestisce le banche')
  const raw = await readValid(event, z.object({ id: zId, bankname: z.string().trim().max(100).optional(), name: z.string().trim().max(100).optional() }))
  const b = { id: raw.id, bankname: raw.bankname || raw.name || fail(422, 'Nome obbligatorio') }
  if (b.id) await db.update(schema.banks).set({ name: b.bankname }).where(eq(schema.banks.id, b.id))
  else await db.insert(schema.banks).values({ name: b.bankname })
  return ok(null)
})
