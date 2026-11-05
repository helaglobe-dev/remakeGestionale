import { z } from 'zod'
import { and, eq, ne } from 'drizzle-orm'
import { db, schema } from '../../db'

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullish().transform(v => v ?? null)
const optText = z.string().max(5000).nullish().transform(v => (v?.trim() ? v.trim() : null))

const ProjectIn = z.object({
  id: z.coerce.number().int().min(0).default(0),
  code: z.string().trim().regex(/^PR\d+\d{4}$/, 'formato atteso PR<numero><anno>, es. PR12026'),
  name: z.string().trim().min(1, 'obbligatorio').max(255),
  contractname: optText,
  description: optText,
  referent: optText,
  // id cliente esistente, oppure nome di un nuovo cliente quando newcliente = 1
  client_id: z.union([z.coerce.number().int().positive(), z.string().trim().min(1)]).nullish(),
  newcliente: z.coerce.number().int().min(0).max(1).default(0),
  projectcolor_id: z.coerce.number().int().nullish(),
  status: z.enum(['L', 'S', 'I', 'C', 'A', 'R', 'H', 'D']),
  openstatus: z.enum(['A', 'C']),
  type: z.enum(['N', 'A', 'F']).default('N'),
  internalproject: z.coerce.number().int().min(0).max(1).default(0),
  startdate: date,
  enddate: date,
  signaturedate: date,
  successpercent: z.coerce.number().int().min(0).max(99).default(0),
  splitpercent: z.coerce.number().min(0).max(100).default(100),
  splityear: z.coerce.number().int().min(0).default(0),
  splitpercent1: z.coerce.number().min(0).max(100).default(0),
  splityear1: z.coerce.number().int().min(0).default(0),
  note: optText,
  noteaddendum: optText,
  cloneid: z.coerce.number().int().min(0).default(0),
})

const Body = z.object({
  Project: ProjectIn,
  Owners: z.array(z.coerce.number().int().positive()).default([]),
  clonetask: z.coerce.number().int().min(0).max(1).default(0),
  sponsors: z.array(z.object({
    id: z.coerce.number().int().min(0).default(0),
    sponsor: z.coerce.number().int().positive('seleziona un cliente esistente come sponsor'),
    contractdate: date,
    note: optText,
  })).default([]),
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const { Project: p, Owners, clonetask, sponsors } = await readValid(event, Body)
  const { projects, projectusers, clients, tasks } = schema
  const isNew = p.id === 0
  const isClone = isNew && p.cloneid > 0

  // --- permessi (stessa logica del frontend originale, applicata anche lato server) ---
  let previous: typeof projects.$inferSelect | undefined
  if (isNew) {
    if (user.hasprojects !== 1) fail(403, 'Non hai i permessi per creare progetti')
  }
  else {
    [previous] = await db.select().from(projects).where(eq(projects.id, p.id))
    if (!previous) fail(404, 'Progetto non trovato')
    if (!(await canEditProject(user, p.id))) fail(403, 'Non hai i permessi per modificare questo progetto')
    if (previous.code !== p.code && user.hasprojects !== 1) fail(403, 'Non puoi modificare il codice progetto')
  }
  if (user.role !== 'S') {
    const prev = previous?.status
    if (p.status === 'A' && prev !== 'A') fail(403, 'Solo un superadmin può impostare lo stato Approvato / Siglato')
    if (p.status === 'D' && prev !== 'D') fail(403, 'Usa "Elimina" per eliminare il progetto')
    if ((prev === 'A' || prev === 'C') && !['A', 'C'].includes(p.status)) {
      fail(403, 'Un progetto Approvato o Confermato può passare solo tra questi due stati')
    }
  }

  // --- regole di business ---
  if (p.status === 'I' && p.splitpercent + p.splitpercent1 !== 100) {
    fail(422, 'La somma delle due percentuali di split deve essere esattamente 100%.')
  }
  if (p.startdate && p.enddate && p.enddate < p.startdate) fail(422, 'La data di fine precede la data di inizio')
  const [dup] = await db.select({ id: projects.id }).from(projects)
    .where(and(eq(projects.code, p.code), ne(projects.id, p.id)))
  if (dup) fail(409, `Il codice ${p.code} è già usato da un altro progetto`)

  const id = await db.transaction(async (tx) => {
    // Cliente: esistente, nuovo (testo libero confermato dall'utente) o nessuno
    let clientId: number | null = null
    if (typeof p.client_id === 'string') {
      if (p.newcliente !== 1) fail(422, 'Seleziona un cliente esistente')
      const [c] = await tx.insert(clients).values({ name: p.client_id }).returning({ id: clients.id })
      clientId = c!.id
    }
    else if (typeof p.client_id === 'number') {
      clientId = p.client_id
    }

    const now = new Date().toISOString()
    const values = {
      code: p.code, name: p.name, contractname: p.contractname, description: p.description,
      referent: p.referent, clientId, projectcolorId: p.projectcolor_id || null,
      status: p.status, openstatus: p.openstatus, type: p.type, internalproject: p.internalproject,
      startdate: p.startdate, enddate: p.enddate, signaturedate: p.status === 'A' ? p.signaturedate : null,
      successpercent: p.status === 'I' ? p.successpercent : 0,
      splitpercent: p.splitpercent, splityear: p.splityear, splitpercent1: p.splitpercent1, splityear1: p.splityear1,
      note: p.note, noteaddendum: p.noteaddendum, cloneid: isClone ? p.cloneid : 0, modified: now,
    }

    let projectId: number
    if (isNew) {
      if (isClone) {
        // eredita gli aggiustamenti economici dalla sorgente
        const [src] = await tx.select().from(projects).where(eq(projects.id, p.cloneid))
        if (!src) fail(404, 'Progetto da duplicare non trovato')
        Object.assign(values, {
          incrementoproposta: src.incrementoproposta, tipoincrementoproposta: src.tipoincrementoproposta,
          noteincremento: src.noteincremento, scontoproposta: src.scontoproposta,
          tiposcontoproposta: src.tiposcontoproposta, notesconto: src.notesconto,
        })
      }
      const [row] = await tx.insert(projects).values(values).returning({ id: projects.id })
      projectId = row!.id
    }
    else {
      await tx.update(projects).set(values).where(eq(projects.id, p.id))
      projectId = p.id
    }

    // Responsabili: l'ordine conta (il primo è il responsabile principale)
    const previousOwners = isNew ? [] : (await tx.select().from(projectusers)
      .where(eq(projectusers.projectId, projectId)).orderBy(projectusers.position)).map(o => o.userId)
    await tx.delete(projectusers).where(eq(projectusers.projectId, projectId))
    const owners = [...new Set(Owners)]
    if (owners.length) {
      await tx.insert(projectusers).values(owners.map((userId, position) => ({ projectId, userId, position })))
    }

    // Sponsor: sostituzione completa con quelli inviati
    await tx.delete(schema.sponsors).where(eq(schema.sponsors.projectId, projectId))
    if (sponsors.length) {
      await tx.insert(schema.sponsors).values(sponsors.map(s => ({
        projectId, clientId: s.sponsor, contractdate: s.contractdate, note: s.note,
      })))
    }

    // Duplica anche i task (esclusi quelli eliminati), azzerando stato e codice
    if (isClone && clonetask === 1) {
      const srcTasks = await tx.select().from(tasks).where(and(eq(tasks.projectId, p.cloneid), ne(tasks.status, 'D')))
      if (srcTasks.length) {
        await tx.insert(tasks).values(srcTasks.map(({ id: _id, created: _c, modified: _m, ...t }) => ({
          ...t, projectId, code: null, status: 'A' as const,
        })))
      }
    }

    return { projectId, previousOwners, owners }
  })

  await recalcProjectTotals(id.projectId)
  // Storici (istantanee) come l'originale, dopo il ricalcolo dei totali: creazione, cambio stato, cambio apertura, cambio responsabili
  const pid = id.projectId
  if (isNew) await addHistory(pid, user.id, 'C')
  else {
    if (previous!.status !== p.status) await addHistory(pid, user.id, 'S', previous!.status, p.status)
    if (previous!.openstatus !== p.openstatus) await addHistory(pid, user.id, 'A', previous!.openstatus, p.openstatus)
    if (JSON.stringify(id.previousOwners) !== JSON.stringify(id.owners)) {
      await addHistory(pid, user.id, 'O', await ownerAcronyms(id.previousOwners), await ownerAcronyms(id.owners))
    }
  }
  return ok(await getProject(pid))
})
