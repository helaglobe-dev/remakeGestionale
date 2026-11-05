import { z } from 'zod'
import { and, desc, eq, gte, lte, sql, type SQL } from 'drizzle-orm'
import { db, schema } from '../../db'

// Elenco di tutti gli storici (pagina Storici): filtri tipo, progetto, data di creazione dello storico.
// Dall'istantanea si restituisce solo la parte Project (i task si leggono consultando il singolo storico).
const Body = z.object({ type: z.string().nullish(), project: zFk, from: z.string().nullish(), to: z.string().nullish() })

export default defineEventHandler(async (event) => {
  await requireUser(event)
  const b = await readValid(event, Body)
  const h = schema.projecthistories
  const where: SQL[] = [eq(h.status, 'A')]
  if (b.type && ['C', 'S', 'A', 'O', 'P'].includes(b.type)) where.push(eq(h.type, b.type as any))
  if (b.project) where.push(eq(h.projectId, b.project))
  if (b.from) where.push(gte(h.created, `${b.from} 00:00:00`))
  if (b.to) where.push(lte(h.created, `${b.to} 23:59:59`))
  const rows = await db.select({
    h: { id: h.id, projectId: h.projectId, type: h.type, oldvalue: h.oldvalue, newvalue: h.newvalue, created: h.created, userId: h.userId },
    // solo la parte Project dell'istantanea, estratta da SQLite (le istantanee intere pesano decine di MB)
    snap: sql<string | null>`json_extract(${h.history}, '$.Project')`, p: schema.projects, firstname: schema.users.firstname, lastname: schema.users.lastname })
    .from(h).innerJoin(schema.projects, eq(h.projectId, schema.projects.id)).leftJoin(schema.users, eq(h.userId, schema.users.id))
    .where(where.length ? and(...where) : undefined).orderBy(desc(h.created), desc(h.id))
  return ok(rows.map(({ h, snap: raw, p, firstname, lastname }) => {
    let snap: any = null
    try { snap = raw ? JSON.parse(raw) : null; if (Array.isArray(snap)) snap = snap[0] ?? null } catch { /* istantanea non leggibile */ }
    return {
      Projecthistory: { id: h.id, project_id: h.projectId, type: h.type, oldvalue: h.oldvalue, newvalue: h.newvalue, created: h.created,
        user_id: h.userId ?? 0, user: firstname ? `${firstname} ${lastname}` : '' },
      // valori del progetto al momento dello storico (o attuali se l'istantanea manca)
      Project: snap ?? { id: p.id, code: p.code, name: p.name, client_id: p.clientId ?? 0, status: p.status, openstatus: p.openstatus },
    }
  }))
})
