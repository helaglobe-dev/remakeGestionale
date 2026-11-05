import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

const Body = z.object({ email: z.string().trim().toLowerCase().email(), password: z.string().min(1) })

export default defineEventHandler(async (event) => {
  const { email, password } = await readValid(event, Body)
  const [u] = await db.select().from(schema.users).where(eq(schema.users.email, email))
  if (!u || u.activeuser !== 1 || !u.passwordHash || !(await verifyPassword(password, u.passwordHash))) {
    fail(401, 'Email o password non corretti')
  }
  const token = await createSession(u.id)
  const { passwordHash: _p, ...pub } = u
  return ok({ user: { ...pub, userprofile_id: u.userprofileId, token } })
})
