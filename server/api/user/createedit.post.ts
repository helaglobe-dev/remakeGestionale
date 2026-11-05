import { z } from 'zod'
import { and, eq, ne, sql } from 'drizzle-orm'
import { db, schema } from '../../db'

// Body piatto come l'originale. Un nuovo utente non ha password: riceve il link di conferma.
const Body = z.object({
  id: zId,
  firstname: zReq(100), lastname: zReq(100),
  email: z.string().trim().toLowerCase().email('Email non valida'),
  acronym: zReq(10),
  role: z.enum(['S', 'A', 'U']).default('U'),
  userprofile_id: zFk,
  activeuser: zFlag, usedindashboard: zFlag, viewdashboard: zFlag, hasprojects: zFlag, hasinvoice: zFlag,
  cancreatemacro: zFlag, viewfic: zFlag, viewkpi: zFlag, viewbudget: zFlag,
  creanotifica: zFlag, sendnotificationemail: zFlag, sendpresenzealert: zFlag,
})

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  if (me.role !== 'S') fail(403, 'Non hai i permessi per gestire gli utenti')
  const { id, userprofile_id, ...b } = await readValid(event, Body)
  if (id === me.id && b.role !== me.role) fail(422, 'Non puoi cambiare il tuo ruolo')
  if (id === me.id && !b.activeuser) fail(422, 'Non puoi disattivare il tuo utente')
  const [dup] = await db.select({ id: schema.users.id }).from(schema.users)
    .where(and(sql`lower(${schema.users.email}) = ${b.email}`, ne(schema.users.id, id)))
  if (dup) fail(409, 'Email già usata da un altro utente')

  const values = { ...b, userprofileId: userprofile_id, modified: new Date().toISOString() }
  let savedId = id
  let confirmLink: string | null = null
  if (id) {
    const res = await db.update(schema.users).set(values).where(eq(schema.users.id, id))
    if (!res.rowsAffected) fail(404, 'Utente non trovato')
  }
  else {
    const [row] = await db.insert(schema.users).values({ ...values, passwordHash: null, verifyemail: 0 }).returning({ id: schema.users.id })
    savedId = row!.id
    const code = await createUserToken(savedId, 'confirm')
    confirmLink = deliverLink(b.email, 'Conferma account Helaproject', `/confirmemailandsetpassword?code=${code}`)
  }
  const [u] = await db.select().from(schema.users).where(eq(schema.users.id, savedId))
  return ok({ ...publicUser(u!), confirmLink })
})
