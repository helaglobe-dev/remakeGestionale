import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

export default defineEventHandler(async (event) => {
  const b = await readValid(event, z.object({ code: z.string().min(10), password: z.string(), password_confirmation: z.string() }))
  if (b.password !== b.password_confirmation) fail(422, 'Le password non coincidono')
  if (!STRONG_PASSWORD.test(b.password)) fail(422, STRONG_PASSWORD_MSG)
  const userId = await consumeUserToken(b.code, 'confirm')
  await db.update(schema.users).set({ passwordHash: await hashPassword(b.password), verifyemail: 1 }).where(eq(schema.users.id, userId))
  return ok(null)
})
