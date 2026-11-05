// Configurazione delle anagrafiche (spec: docs/spec-anagrafiche.md). Ogni route è un file di una riga.
import { and, eq, ne, inArray, sql, count } from 'drizzle-orm'
import { z } from 'zod'
import { db, schema } from '../db'

const s = schema
const notDeleted = (col: any) => () => ne(col, 'D')
const camelToSnake = (r: Record<string, any>) => Object.fromEntries(Object.entries(r).map(([k, v]) => [k.replace(/[A-Z]/g, m => `_${m.toLowerCase()}`), v]))

const anagraficaInput = {
  id: zId,
  name: zReq(255),
  piva: zText(20), cf: zText(20), sdi: zText(10), pec: zText(255), email: zText(255),
  companyemail: zText(255), invoiceemail: zText(255), address: zText(255), zip: zText(10),
  city: zText(100), province: zText(5), state: zText(100), telephone: zText(50), website: zText(255),
  iban: zText(40), contactperson: zText(255), notes: zText(5000), stopservice: zFlag,
}
const emailRule = (v: string | null) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

async function uniqueName(table: any, name: string, id: number, label: string) {
  const [dup] = await db.select({ id: table.id }).from(table)
    .where(and(sql`lower(${table.name}) = lower(${name})`, ne(table.id, id), ne(table.status, 'D')))
  if (dup) fail(409, `Esiste già un ${label} con ragione sociale "${name}"`)
}

// --- Clienti: portafoglio = preventivo dei progetti A/C; attivi = n. progetti A/C; coda = n. progetti I (manuale) ---
export const clientCrud = crud({
  table: s.clients, wrapper: 'Client', label: 'cliente', flat: true,
  orderBy: s.clients.name, where: notDeleted(s.clients.status),
  canRead: () => true, canWrite: isAdminOrSuper,
  input: z.object({
    ...anagraficaInput,
    codcli: zText(20),
    cf: zReq(20), address: zReq(255), zip: zReq(10), city: zReq(100),
    state: z.string().trim().min(1).max(100).default('Italia'),
    prioritario: zFlag,
    paymenttype: z.enum(['0', '30', '30fm', '45', '60', '60fm', '75', '90', '90fm', '120']).nullish().transform(v => v ?? null),
  }).refine(v => [v.pec, v.email, v.companyemail, v.invoiceemail].every(emailRule), 'Email non valida'),
  validate: (v, { id }) => uniqueName(s.clients, v.name, id, 'cliente'),
  softDelete: { column: 'status', value: 'D' },
  decorate: async (rows) => {
    const projects = await db.select({ clientId: s.projects.clientId, status: s.projects.status, id: s.projects.id, p: s.projects })
      .from(s.projects).where(inArray(s.projects.status, ['A', 'C', 'I']))
    const by = new Map<number, { portafoglio: number, attivi: number, coda: number }>()
    for (const p of projects) {
      if (!p.clientId) continue
      const e = by.get(p.clientId) ?? { portafoglio: 0, attivi: 0, coda: 0 }
      if (p.status === 'I') e.coda++
      else {
        e.attivi++
        const eco = computeEconomics(p.p)
        e.portafoglio += p.p.newtotaleproposta || eco._totaleprogetto
      }
      by.set(p.clientId, e)
    }
    return rows.map(r => ({ ...r, ...(by.get(r.id) ?? { portafoglio: 0, attivi: 0, coda: 0 }) }))
  },
})

export const supplierCrud = crud({
  table: s.suppliers, wrapper: 'Supplier', label: 'fornitore', flat: true,
  orderBy: s.suppliers.name, where: notDeleted(s.suppliers.status),
  canRead: () => true, canWrite: isAdminOrSuper,
  input: z.object({ ...anagraficaInput, codsup: zText(20), type: z.enum(['A', 'P', 'C']).default('A') })
    .refine(v => [v.pec, v.email, v.companyemail, v.invoiceemail].every(emailRule), 'Email non valida'),
  validate: (v, { id }) => uniqueName(s.suppliers, v.name, id, 'fornitore'),
  softDelete: { column: 'status', value: 'D' },
})

export const activityCrud = crud({
  table: s.activities, wrapper: 'Activity', label: 'attività',
  orderBy: s.activities.name, where: notDeleted(s.activities.status),
  canRead: () => true, canWrite: isSuper,
  input: z.object({
    id: zId, name: zReq(255), acronimo: zReq(20), type: z.enum(['N', 'F']).default('N'),
    description: zReq(2000), notes: zText(5000),
  }),
  softDelete: { column: 'status', value: 'D' },
})

export const macrovoiceCrud = crud({
  table: s.macrovoices, wrapper: 'Macrovoice', label: 'macrovoce',
  orderBy: s.macrovoices.name, where: notDeleted(s.macrovoices.status),
  canRead: () => true, canWrite: u => u.role === 'S' || u.cancreatemacro === 1,
  input: z.object({ id: zId, name: zReq(255), description: zReq(2000) }),
  softDelete: { column: 'status', value: 'D' },
})

export const projectcolorCrud = crud({
  table: s.projectcolors, wrapper: 'Projectcolor', label: 'colore',
  canRead: () => true, canWrite: isSuper,
  input: z.object({ id: zId, color: z.string().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, 'colore esadecimale non valido'), name: zText(100) }),
  // come l'originale: se il nome è vuoto si usa il codice colore
  toDb: v => ({ ...v, name: v.name || v.color }),
  inUse: async (id) => {
    const [r] = await db.select({ n: count() }).from(s.projects).where(eq(s.projects.projectcolorId, id))
    return r!.n ? `Colore usato da ${r!.n} progetti: non si può eliminare` : null
  },
})

export const userprofileCrud = crud({
  table: s.userprofiles, wrapper: 'Userprofile', label: 'profilo professionale', flat: true,
  orderBy: s.userprofiles.profilename,
  canRead: () => true, canWrite: isSuper,
  input: z.object({ id: zId, profilename: zReq(100), code: zReq(20) }),
  inUse: async (id) => {
    const [t] = await db.select({ n: count() }).from(s.tasks).where(eq(s.tasks.userprofileId, id))
    const [u] = await db.select({ n: count() }).from(s.users).where(eq(s.users.userprofileId, id))
    return t!.n || u!.n ? `Profilo usato da ${t!.n} task e ${u!.n} utenti: non si può eliminare` : null
  },
})

export const yeartargetCrud = crud({
  table: s.yeartargets, wrapper: 'Yeartarget', label: 'target', orderBy: s.yeartargets.year, orderDir: 'desc',
  canRead: () => true, canWrite: isSuper,
  input: z.object({
    id: zId, year: z.coerce.number().int().min(2000).max(2100),
    value: z.coerce.number().min(0), soglia: z.coerce.number().min(0).max(100),
  }),
  validate: async (v, { id }) => {
    const [dup] = await db.select({ id: s.yeartargets.id }).from(s.yeartargets)
      .where(and(eq(s.yeartargets.year, v.year), ne(s.yeartargets.id, id)))
    if (dup) fail(409, `Esiste già un target per l'anno ${v.year}`)
  },
})

// Utenti: elenco piatto senza dati sensibili, con descrizione ruolo come l'originale
const ROLE_NAMES = { S: 'Super Amministratore', A: 'Amministratore', U: 'Utente' } as const
export const publicUser = (u: typeof s.users.$inferSelect) => {
  const { passwordHash: _p, ...rest } = u
  return { ...camelToSnake(rest), descrole: ROLE_NAMES[u.role], fullname: `${u.firstname} ${u.lastname}` }
}
