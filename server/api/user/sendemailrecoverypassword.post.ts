import { z } from 'zod'
import { eq, sql } from 'drizzle-orm'
import { db, schema } from '../../db'

// Risposta identica che l'email esista o no, per non rivelare quali account esistono.
export default defineEventHandler(async (event) => {
  const { email } = await readValid(event, z.object({ email: z.string().trim().toLowerCase().email('Email non valida') }))
  const [u] = await db.select().from(schema.users).where(sql`lower(${schema.users.email}) = ${email}`)
  if (u) {
    const code = await createUserToken(u.id, 'reset')
    deliverLink(u.email, 'Recupero password Helaproject', `/resetpassword?code=${code}`)
  }
  return ok(null)
})
