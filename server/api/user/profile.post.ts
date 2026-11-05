import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const b = await readValid(event, z.object({ firstname: zReq(100), lastname: zReq(100) }))
  await db.update(schema.users).set({ ...b, modified: new Date().toISOString() }).where(eq(schema.users.id, me.id))
  return ok(null)
})
