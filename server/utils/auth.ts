import type { H3Event } from 'h3'
import { randomBytes } from 'node:crypto'
import { eq, and, gt, lte } from 'drizzle-orm'
import { db, schema } from '../db'

export type SessionUser = {
  id: number
  email: string
  firstname: string
  lastname: string
  role: 'S' | 'A' | 'U'
  acronym: string | null
  hasprojects: number
  hasinvoice: number
  viewdashboard: number
  viewkpi: number
  viewbudget: number
  cancreatemacro: number
}

const SESSION_HOURS = 48
export const SESSION_COOKIE = 'hp_session'
const SESSION_MAX_AGE = SESSION_HOURS * 3600

export async function createSession(userId: number): Promise<string> {
  // Prefisso "<userId>-" come nell'originale, utile per riconoscere l'identità dal token.
  const token = `${userId}-${randomBytes(32).toString('hex')}`
  const expiresAt = new Date(Date.now() + SESSION_HOURS * 3600_000).toISOString()
  await db.delete(schema.sessions).where(lte(schema.sessions.expiresAt, new Date().toISOString()))
  await db.insert(schema.sessions).values({ token, userId, expiresAt })
  return token
}

function bearer(event: H3Event): string | null {
  const h = getHeader(event, 'authorization')
  return h?.startsWith('Bearer ') ? h.slice(7) : null
}

function sessionToken(event: H3Event): string | null {
  return bearer(event) ?? getCookie(event, SESSION_COOKIE) ?? null
}

export function setSessionCookie(event: H3Event, token: string) {
  setCookie(event, SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
}

export async function getSessionUser(event: H3Event): Promise<SessionUser | null> {
  const token = sessionToken(event)
  if (!token) return null
  const [row] = await db
    .select({
      id: schema.users.id, email: schema.users.email, firstname: schema.users.firstname,
      lastname: schema.users.lastname, role: schema.users.role, acronym: schema.users.acronym,
      hasprojects: schema.users.hasprojects, hasinvoice: schema.users.hasinvoice,
      viewdashboard: schema.users.viewdashboard, viewkpi: schema.users.viewkpi,
      viewbudget: schema.users.viewbudget, cancreatemacro: schema.users.cancreatemacro,
    })
    .from(schema.sessions)
    .innerJoin(schema.users, eq(schema.sessions.userId, schema.users.id))
    .where(and(eq(schema.sessions.token, token), gt(schema.sessions.expiresAt, new Date().toISOString())))
  return row ?? null
}

export async function requireUser(event: H3Event): Promise<SessionUser> {
  const user = event.context.user as SessionUser | undefined
  if (!user) fail(401, 'Sessione scaduta o non valida')
  return user
}

export async function destroySession(event: H3Event) {
  const token = sessionToken(event)
  if (token) await db.delete(schema.sessions).where(eq(schema.sessions.token, token))
  deleteCookie(event, SESSION_COOKIE, { path: '/' })
}

export const isAdmin = (u: SessionUser) => u.role === 'S' || u.role === 'A'
