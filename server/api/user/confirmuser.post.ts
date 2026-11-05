import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

// Verifica il link di conferma senza consumarlo (lo consuma set_password).
export default defineEventHandler(async (event) => {
  const { code } = await readValid(event, z.object({ code: z.string().min(10) }))
  const userId = await consumeUserToken(code, 'confirm', false)
  const [u] = await db.select({ firstname: schema.users.firstname, email: schema.users.email }).from(schema.users).where(eq(schema.users.id, userId))
  return ok(u)
})
