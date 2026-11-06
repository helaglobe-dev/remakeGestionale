import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

const Body = z.object({ email: z.string().trim().toLowerCase().email(), password: z.string().min(1) })

export default defineEventHandler(async (event) => {
  const { email, password } = await readValid(event, Body)
  assertLoginAllowed(event, email)
  const [u] = await db.select().from(schema.users).where(eq(schema.users.email, email))
  if (!u || u.activeuser !== 1 || !u.passwordHash || !(await verifyPassword(password, u.passwordHash))) {
    recordLoginFailure(event, email)
    fail(401, 'Email o password non corretti')
  }
  clearLoginFailures(event, email)
  const token = await createSession(u.id)
  setSessionCookie(event, token)
  const { passwordHash: _p, ...pub } = u
  // Il token resta nella risposta per compatibilità con i client API; il browser usa il cookie HttpOnly.
  return ok({ user: { ...pub, userprofile_id: u.userprofileId, token } })
})
