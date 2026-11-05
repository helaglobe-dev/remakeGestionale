import { randomBytes } from 'node:crypto'
import { and, eq, gt } from 'drizzle-orm'
import { db, schema } from '../db'

// Regole password dell'originale: per le password scelte dall'utente serve anche un carattere speciale;
// la password forzata dal superadmin richiede solo 8 caratteri, numero, maiuscola e minuscola.
export const STRONG_PASSWORD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
export const ADMIN_PASSWORD = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
export const STRONG_PASSWORD_MSG = 'La password deve contenere almeno 8 caratteri e almeno un numero, una lettera maiuscola, una minuscola e un carattere speciale'
export const ADMIN_PASSWORD_MSG = 'La password deve contenere almeno 8 caratteri e almeno 1 numero, 1 lettera maiuscola, 1 lettera minuscola'

export async function createUserToken(userId: number, purpose: 'confirm' | 'reset') {
  const code = randomBytes(24).toString('hex')
  const hours = purpose === 'confirm' ? 24 * 7 : 2
  await db.delete(schema.usertokens).where(and(eq(schema.usertokens.userId, userId), eq(schema.usertokens.purpose, purpose)))
  await db.insert(schema.usertokens).values({ code, userId, purpose, expiresAt: new Date(Date.now() + hours * 3600_000).toISOString() })
  return code
}

export async function consumeUserToken(code: string, purpose: 'confirm' | 'reset', consume = true) {
  const [t] = await db.select().from(schema.usertokens).where(and(
    eq(schema.usertokens.code, code), eq(schema.usertokens.purpose, purpose), gt(schema.usertokens.expiresAt, new Date().toISOString()),
  ))
  if (!t) fail(400, 'Link non valido o scaduto')
  if (consume) await db.delete(schema.usertokens).where(eq(schema.usertokens.code, code))
  return t.userId
}

/** Non c'è ancora un server di posta: il link viene scritto nel log del server. */
export function deliverLink(email: string, subject: string, path: string) {
  const link = `${process.env.APP_URL ?? 'http://localhost:3000'}${path}`
  console.info(`[email non inviata – SMTP non configurato] A: ${email} · ${subject} · ${link}`)
  return link
}
