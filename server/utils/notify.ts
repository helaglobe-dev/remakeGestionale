import { eq } from 'drizzle-orm'
import { db, schema } from '../db'

/**
 * Crea una notifica in-app se l'utente ha "Ricezione notifiche" attivo (creanotifica = 1).
 * Con "Notifiche via email" attivo l'email viene solo registrata nel log finché non c'è un SMTP.
 */
export async function notify(userId: number, title: string, content: string, link?: string) {
  const [u] = await db.select({ creanotifica: schema.users.creanotifica, email: schema.users.email, mail: schema.users.sendnotificationemail })
    .from(schema.users).where(eq(schema.users.id, userId))
  if (!u || u.creanotifica !== 1) return
  await db.insert(schema.notifications).values({ userId, title, content, link: link ?? null })
  if (u.mail === 1) console.info(`[email non inviata – SMTP non configurato] A: ${u.email} · ${title}`)
}

/** Testo semplice → HTML sicuro per il campo content delle notifiche. */
export const escapeHtml = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' })[c]!)
