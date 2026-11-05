// Storici di progetto (istantanee), stesso formato dell'originale: { Project: {...}, Task: [{ Task, User, Userprofile, Supplier }] }
import { and, eq, inArray, ne } from 'drizzle-orm'
import { db, schema } from '../db'

export const HISTORY_TYPES = { C: 'Creazione progetto', S: 'Cambio stato', A: 'Cambio apertura', O: 'Cambio owner/s', P: 'Pulsante' } as const
export type HistoryType = keyof typeof HISTORY_TYPES

/** Istantanea del progetto com'è ora: dati, valori economici, responsabili e task (eliminati esclusi). */
export async function snapshotProject(projectId: number) {
  const p = await getProject(projectId)
  if (!p) return null
  const users = await db.select().from(schema.users)
  const name = (id: number) => { const u = users.find(x => x.id === id); return u ? `${u.firstname} ${u.lastname}` : '' }
  const [client] = p.client_id ? await db.select().from(schema.clients).where(eq(schema.clients.id, p.client_id)) : []
  const tasks = await db.select({ t: schema.tasks, up: schema.userprofiles, s: schema.suppliers, ...TASK_CALC }).from(schema.tasks)
    .leftJoin(schema.userprofiles, eq(schema.tasks.userprofileId, schema.userprofiles.id))
    .leftJoin(schema.suppliers, eq(schema.tasks.supplierId, schema.suppliers.id))
    .where(and(eq(schema.tasks.projectId, projectId), ne(schema.tasks.status, 'D'))).orderBy(schema.tasks.ordering, schema.tasks.id)
  return {
    Project: { ...p, ownersname: p.owners.map(name), clientname: client?.name ?? '', openstatuscoded: p.openstatus },
    Task: tasks.map(({ t, up, s, ...calc }) => ({
      Task: serializeTask(t, calc),
      User: { id: t.userId ?? 0, name: t.userId ? name(t.userId) : '' },
      Userprofile: { id: up?.id ?? 0, profilename: up?.profilename ?? '' },
      Supplier: { id: s?.id ?? 0, name: s?.name ?? '' },
    })),
  }
}

// ora italiana come le voci importate dall'originale (MySQL in ora locale), così filtri per data e ordinamento restano coerenti
const romeNow = () => new Date().toLocaleString('sv-SE', { timeZone: 'Europe/Rome' }).slice(0, 19)

export async function addHistory(projectId: number, userId: number | null, type: HistoryType, oldvalue?: string | null, newvalue?: string | null) {
  const snap = await snapshotProject(projectId)
  await db.insert(schema.projecthistories).values({ projectId, userId, type, oldvalue: oldvalue ?? null, newvalue: newvalue ?? null,
    history: snap ? JSON.stringify(snap) : null, created: romeNow() })
}

/** Sigle dei responsabili (vecchio/nuovo valore dei cambi owner, come l'originale) */
export async function ownerAcronyms(ids: number[]) {
  if (!ids.length) return ''
  const rows = await db.select({ id: schema.users.id, a: schema.users.acronym, f: schema.users.firstname, l: schema.users.lastname })
    .from(schema.users).where(inArray(schema.users.id, ids))
  return ids.map(id => { const u = rows.find(r => r.id === id); return u ? (u.a || `${u.f[0]}${u.l[0]}`) : '' }).filter(Boolean).join(',')
}
