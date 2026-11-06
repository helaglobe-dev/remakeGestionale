// Importa i dati di produzione (JSON prodotti da parse-dump.mjs) nel database del remake.
// Uso: node server/db/import/import-production.ts data/import [--user email-per-link-password] [--keep email-utente-da-conservare]
// - svuota tutte le tabelle (dopo un backup del file DB) e reimporta mantenendo gli ID originali
// - NON importa le password: gli hash dell'originale (SHA1/MD5) sono deboli e non verificabili. Ogni utente
//   imposta una nuova password dal link di conferma; per l'utente indicato con --user il link viene stampato.
// - non importa: log, sincronizzazione Fatture in Cloud, change request, istantanee economiche dello storico,
//   record eliminati (status D) di fatture e tranche.
// Stampa solo conteggi e anomalie, mai dati.
import fs from 'node:fs'
import path from 'node:path'
import { randomBytes } from 'node:crypto'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from '../schema.ts'
import { mapHistories } from './histories.ts'

const dir = process.argv[2] ?? 'data/import'
const arg = (name: string) => process.argv.indexOf(name) > 0 ? process.argv[process.argv.indexOf(name) + 1] : null
const userArg = arg('--user')
const keepArg = arg('--keep')
const DB = process.env.DATABASE_URL ?? 'file:./data/helaproject.db'
const dbFile = DB.replace(/^file:/, '')

type Row = Record<string, any>
const load = (t: string): Row[] => {
  const d = JSON.parse(fs.readFileSync(path.join(dir, `${t}.json`), 'utf8'))
  return d.rows.map((r: unknown[]) => Object.fromEntries(d.columns.map((c: string, i: number) => [c, r[i]])))
}
const warn: Record<string, number> = {}
const note = (k: string) => (warn[k] = (warn[k] ?? 0) + 1)

// --- normalizzazioni ---
const str = (v: any) => (v == null || v === '' ? null : String(v))
const num = (v: any) => (v == null || v === '' ? 0 : Number(v))
const int01 = (v: any) => (Number(v) ? 1 : 0)
const fk = (v: any, valid?: Set<number>, what?: string) => {
  const n = Number(v)
  if (!n) return null
  if (valid && !valid.has(n)) { note(`riferimento a ${what} inesistente → vuoto`); return null }
  return n
}
const date = (v: any) => {
  const s = str(v)
  if (!s || s.startsWith('0000-00-00')) return null
  if (/^\d{2}-\d{2}-\d{4}$/.test(s)) return `${s.slice(6)}-${s.slice(3, 5)}-${s.slice(0, 2)}`
  return s.slice(0, 10)
}
const dt = (v: any) => {
  const s = str(v)
  return !s || s.startsWith('0000-00-00') ? new Date().toISOString().slice(0, 19).replace('T', ' ') : s.slice(0, 19)
}
const oneOf = <T extends string>(v: any, allowed: readonly T[], dflt: T, what: string): T => {
  if (allowed.includes(v)) return v
  if (v != null && v !== '') note(`${what}: valore "${v}" non previsto → ${dflt}`)
  return dflt
}

// --- backup e svuotamento ---
if (fs.existsSync(dbFile)) {
  const backup = dbFile.replace(/\.db$/, `.backup-${new Date().toISOString().replace(/[:.]/g, '-')}.db`)
  fs.copyFileSync(dbFile, backup)
  console.log(`Backup del database precedente: ${backup}`)
}
const client = createClient({ url: DB })
const db = drizzle(client, { schema })
// utente locale (es. admin) da reinserire dopo l'import con un nuovo ID, così sopravvive allo svuotamento
const kept = keepArg ? await db.query.users.findFirst({ where: (u, { eq }) => eq(u.email, keepArg.toLowerCase()) }) : null
if (keepArg && !kept) throw new Error(`Utente da conservare ${keepArg} non trovato: nessuna modifica fatta`)
if (kept && load('users').some(u => String(u.email).trim().toLowerCase() === kept.email)) throw new Error(`${kept.email} è già nel dump: nessuna modifica fatta`)
const TABLES = ['sessions', 'usertokens', 'notifications', 'passiveinvoicerows', 'passiveinvoices', 'activeinvoices', 'paymenttranches',
  'budgetitems', 'banks', 'hours', 'projecthistories', 'sponsors', 'tasks', 'projectusers', 'projects', 'usercosts', 'profileprices',
  'profilecosts', 'holidays', 'yeartargets', 'activities', 'macrovoices', 'suppliers', 'projectcolors', 'clients', 'users', 'userprofiles']
await client.batch(['PRAGMA foreign_keys = OFF', ...TABLES.map(t => `delete from ${t}`),
  `delete from sqlite_sequence where name in (${TABLES.map(t => `'${t}'`).join(',')})`, 'PRAGMA foreign_keys = ON'], 'write')

async function insert(table: any, rows: Row[], label: string) {
  for (let i = 0; i < rows.length; i += 400) await db.insert(table).values(rows.slice(i, i + 400))
  console.log(`${label}: ${rows.length}`)
}
const ids = (rows: Row[]) => new Set(rows.map(r => Number(r.id)))

// --- anagrafiche ---
const userprofiles = load('userprofiles')
await insert(schema.userprofiles, userprofiles.map(r => ({ id: r.id, profilename: str(r.profilename) ?? `Profilo ${r.id}`, code: str(r.code) ?? '' })), 'profili')
const profileIds = ids(userprofiles)

const users = load('users')
await insert(schema.users, users.map(u => ({
  id: u.id, email: String(u.email).trim().toLowerCase(), passwordHash: null, firstname: str(u.firstname) ?? '', lastname: str(u.lastname) ?? '',
  role: oneOf(u.role, ['S', 'A', 'U'] as const, 'U', 'ruolo utente'), acronym: str(u.acronym), code: null, image: str(u.image),
  userprofileId: fk(u.userprofile_id, profileIds, 'profilo'), verifyemail: 0,
  hasprojects: int01(u.hasprojects), hasinvoice: int01(u.hasinvoice), viewdashboard: int01(u.viewdashboard), viewkpi: int01(u.viewkpi),
  viewbudget: int01(u.viewbudget), cancreatemacro: int01(u.cancreatemacro), viewfic: int01(u.viewfic), usedindashboard: int01(u.usedindashboard),
  sendnotificationemail: int01(u.sendnotificationemail), sendpresenzealert: int01(u.sendpresenzealert), creanotifica: int01(u.creanotifica),
  // utenti eliminati (status D) restano per lo storico ma non attivi
  activeuser: u.status === 'D' ? 0 : int01(u.activeuser), created: dt(u.created), modified: dt(u.modified),
})), 'utenti')
const userIds = ids(users)
if (kept) {
  const { id: _id, ...rest } = kept
  await db.insert(schema.users).values({ ...rest, userprofileId: null })
  console.log(`utente conservato: ${kept.email}`)
}

const dedupe = (rows: Row[], key: (r: Row) => string) => [...new Map(rows.map(r => [key(r), r])).values()]
await insert(schema.profileprices, dedupe(load('upprices').filter(r => profileIds.has(r.userprofile_id)), r => `${r.userprofile_id}|${r.year}`)
  .map(r => ({ id: r.id, userprofileId: r.userprofile_id, year: r.year, hcost: num(r.hcost) })), 'prezzi orari profili')
await insert(schema.profilecosts, dedupe(load('upcosts').filter(r => profileIds.has(r.userprofile_id)), r => `${r.userprofile_id}|${r.year}`)
  .map(r => ({ id: r.id, userprofileId: r.userprofile_id, year: r.year, hcost: num(r.hcost) })), 'costi orari profili')
await insert(schema.usercosts, dedupe(load('costs').filter(r => userIds.has(r.user_id)), r => `${r.user_id}|${r.year}`)
  .map(r => ({ id: r.id, userId: r.user_id, year: r.year, hcost: num(r.hcost) })), 'costi orari dipendenti')

const PAY = ['0', '30', '30fm', '45', '60', '60fm', '75', '90', '90fm', '120'] as const
const anag = (r: Row) => ({
  name: str(r.name) ?? `(senza nome ${r.id})`, piva: str(r.piva), cf: str(r.cf), sdi: str(r.sdi), pec: str(r.pec), email: str(r.email),
  companyemail: str(r.companyemail), invoiceemail: str(r.invoiceemail), address: str(r.address), zip: str(r.zip), city: str(r.city),
  province: str(r.province), state: str(r.state), telephone: str(r.telephone), website: str(r.website), iban: str(r.iban),
  contactperson: str(r.contactperson), notes: str(r.notes), stopservice: int01(r.stopservice), status: r.status === 'D' ? 'D' as const : 'A' as const,
  created: dt(r.created), modified: dt(r.modified),
})
const clients = load('clients')
await insert(schema.clients, clients.map(r => ({ id: r.id, codcli: str(r.codcli), ...anag(r), prioritario: int01(r.prioritario),
  paymenttype: r.paymenttype == null || r.paymenttype === '' ? null : oneOf(String(r.paymenttype), PAY, '30', 'termini di pagamento') })), 'clienti')
const clientIds = ids(clients)
const suppliers = load('suppliers')
await insert(schema.suppliers, suppliers.map(r => ({ id: r.id, codsup: str(r.codsup), ...anag(r), type: oneOf(r.type, ['A', 'P', 'C'] as const, 'A', 'tipo fornitore') })), 'fornitori')
const supplierIds = ids(suppliers)

const colors = load('projectcolors')
await insert(schema.projectcolors, colors.map(r => ({ id: r.id, name: str(r.name) ?? str(r.color), color: str(r.color) ?? '#757575' })), 'colori')
const colorIds = ids(colors)
await insert(schema.activities, load('activities').map(r => ({ id: r.id, name: str(r.name) ?? '', acronimo: str(r.acronimo) ?? '', description: str(r.description),
  notes: str(r.notes), type: oneOf(r.type, ['N', 'F'] as const, 'N', 'tipo attività'), status: r.status === 'D' ? 'D' as const : 'A' as const,
  created: dt(r.created), modified: dt(r.modified) })), 'attività')
const activityIds = ids(load('activities'))
await insert(schema.macrovoices, load('macrovoices').map(r => ({ id: r.id, name: str(r.name) ?? '', description: str(r.description),
  status: r.status === 'D' ? 'D' as const : 'A' as const, created: dt(r.created), modified: dt(r.modified) })), 'macrovoci')
const macroIds = ids(load('macrovoices'))
await insert(schema.holidays, load('holidays').map((r) => {
  let day = String(r.day ?? '')
  if (/^\d{2}-\d{2}-\d{4}$/.test(day)) day = `${day.slice(6)}-${day.slice(3, 5)}-${day.slice(0, 2)}`
  if (/^0{1,3}-\d{2}-\d{2}$/.test(day)) day = `0000${day.slice(day.indexOf('-'))}`
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) note('festività con data non riconosciuta')
  return { id: r.id, day, type: oneOf(r.type, ['F', 'C', 'M', 'Z'] as const, 'F', 'tipo evento'), description: str(r.description) ?? '', color: str(r.color) }
}), 'eventi calendario')
await insert(schema.yeartargets, load('yeartargets').map(r => ({ id: r.id, year: r.year, value: num(r.value), soglia: num(r.soglia) })), 'target annui')
await insert(schema.banks, load('banks').map(r => ({ id: r.id, name: str(r.name) ?? '' })), 'banche')
const bankIds = ids(load('banks'))

// --- progetti ---
const projects = load('projects')
await insert(schema.projects, projects.map(p => ({
  id: p.id, code: str(p.code) ?? `P${p.id}`, name: str(p.name) ?? '', contractname: str(p.contractname), description: str(p.description),
  referent: str(p.referent), clientId: fk(p.client_id, clientIds, 'cliente'), projectcolorId: fk(p.projectcolor_id, colorIds, 'colore'),
  status: oneOf(p.status, ['L', 'S', 'I', 'C', 'A', 'R', 'H', 'D'] as const, 'S', 'stato progetto'),
  openstatus: oneOf(p.openstatus, ['A', 'C'] as const, 'A', 'apertura progetto'), type: oneOf(p.type, ['N', 'A', 'F'] as const, 'N', 'tipo progetto'),
  internalproject: int01(p.internalproject), startdate: date(p.startdate), enddate: date(p.enddate), signaturedate: date(p.signaturedate),
  successpercent: Math.round(num(p.successpercent)), splitpercent: num(p.splitpercent), splityear: num(p.splityear),
  splitpercent1: num(p.splitpercent1), splityear1: num(p.splityear1), note: str(p.note), noteaddendum: str(p.noteaddendum),
  incrementoproposta: num(p.incrementoproposta), tipoincrementoproposta: p.tipoincrementoproposta === 'V' ? 'V' as const : 'P' as const,
  noteincremento: str(p.noteincremento), scontoproposta: num(p.scontoproposta), tiposcontoproposta: p.tiposcontoproposta === 'V' ? 'V' as const : 'P' as const,
  notesconto: str(p.notesconto), newtotaleproposta: num(p.newtotaleproposta),
  // totali salvati dell'originale, importati così come sono (l'originale li mostra senza ricalcolarli)
  totaleproposta: num(p.totaleproposta), costoproposta: num(p.costoproposta), costopropostareal: num(p.costopropostareal),
  totalepropostamodified: num(p.totalepropostamodified), costopropostamodified: num(p.costopropostamodified),
  created: dt(p.created), modified: dt(p.modified),
})), 'progetti')
const projectIds = ids(projects)
const pu = load('projectusers').filter(r => projectIds.has(r.project_id) && userIds.has(r.user_id)).sort((a, b) => a.id - b.id)
const seen = new Set<string>()
const position = new Map<number, number>()
await insert(schema.projectusers, pu.filter(r => !seen.has(`${r.project_id}|${r.user_id}`) && seen.add(`${r.project_id}|${r.user_id}`)).map((r) => {
  const pos = position.get(r.project_id) ?? 0
  position.set(r.project_id, pos + 1)
  return { projectId: r.project_id, userId: r.user_id, position: pos }
}), 'responsabili di progetto')
const sponsors = load('sponsors').filter(r => projectIds.has(r.project_id) && clientIds.has(r.client_id))
await insert(schema.sponsors, sponsors.map(r => ({ id: r.id, projectId: r.project_id, clientId: r.client_id, contractdate: date(r.contractdate), note: str(r.note) })), 'sponsor')
const sponsorIds = ids(sponsors)

// --- task e ore ---
const tasks = load('tasks').filter(t => projectIds.has(t.project_id) || (note('task di progetto inesistente → scartato'), false))
await insert(schema.tasks, tasks.map(t => ({
  id: t.id, projectId: t.project_id, code: str(t.checkcode), shortname: str(t.shortname) ?? '(senza nome)', description: str(t.description), note: str(t.note),
  type: ['F', 'V', 'P'].includes(t.type) ? t.type : null, status: oneOf(t.status, ['A', 'P', 'C', 'D'] as const, 'A', 'stato task'),
  genericsupplier: str(t.genericsupplier), internalactivity: int01(t.internalactivity), esecutivo: int01(t.esecutivo), iscr: int01(t.iscr),
  hours: num(t.hours), startdate: date(t.startdate), enddate: date(t.enddate),
  userId: fk(t.user_id, userIds, 'utente'), userprofileId: fk(t.userprofile_id, profileIds, 'profilo'), supplierId: fk(t.supplier_id, supplierIds, 'fornitore'),
  macrovoiceId: fk(t.macrovoice_id, macroIds, 'macrovoce'), supplierprice: num(t.supplierprice), suppliercost: num(t.suppliercost),
  ordering: num(t.ordine), created: dt(t.created), modified: dt(t.modified),
})), 'task')
const taskIds = ids(tasks)
const hours = load('hours').filter(h => (taskIds.has(h.task_id) && userIds.has(h.user_id)) || (note('ora su task/utente inesistente → scartata'), false))
await insert(schema.hours, hours.map(h => ({ id: h.id, taskId: h.task_id, userId: h.user_id, activityId: fk(h.activity_id, activityIds, 'attività'),
  description: str(h.description), startdate: dt(h.startdate), enddate: dt(h.enddate), status: h.status === 'D' ? 'D' as const : 'A' as const,
  created: dt(h.created), modified: dt(h.modified) })), 'registrazioni ore')

// --- storico: voci originali con istantanea (tipo S = fonte di win rate e tempi commerciali, verificato 41/86 = 47,67%) ---
await insert(schema.projecthistories, mapHistories(load('projecthistories'), projectIds, userIds, dt), 'voci di storico')

// --- notifiche ---
const notif = load('notifications').filter(n => userIds.has(n.user_id))
await insert(schema.notifications, notif.map(n => ({ id: n.id, userId: n.user_id, title: str(n.title) ?? '', content: str(n.content) ?? '',
  link: null, readon: n.readstatus === 'C' || n.readon ? dt(n.readon ?? n.modified) : null, created: dt(n.created) })), 'notifiche')

// --- finanza (record eliminati esclusi) ---
const tranches = load('payment_tranches').filter(t => t.status !== 'D' && projectIds.has(t.project_id))
await insert(schema.paymenttranches, tranches.map(t => ({ id: t.id, projectId: t.project_id, sponsorId: fk(t.sponsor_id, sponsorIds, 'sponsor'),
  type: oneOf(t.type, ['A', 'I', 'S'] as const, 'A', 'tipo tranche'), total: num(t.total), vat: num(t.vat),
  previewdate: date(t.previewdate) ?? date(t.paymentdate) ?? dt(t.created).slice(0, 10), paymentdate: date(t.paymentdate) ?? date(t.previewdate) ?? dt(t.created).slice(0, 10),
  description: str(t.description), note: str(t.note), created: dt(t.created), modified: dt(t.modified) })), 'tranche di pagamento')
const trancheIds = ids(tranches)
const actives = load('active_invoices').filter(i => i.status !== 'D' && projectIds.has(i.project_id))
await insert(schema.activeinvoices, actives.map(i => ({ id: i.id, projectId: i.project_id, paymentTrancheId: fk(i.payment_tranche_id, trancheIds, 'tranche'),
  bankId: fk(i.bank_id, bankIds, 'banca'), invoicenumber: str(i.invoicenumber) ?? '', invoicedate: date(i.invoicedate) ?? dt(i.created).slice(0, 10),
  taxable: num(i.taxable), vat: num(i.vat), paymentduedate: date(i.paymentduedate) ?? date(i.invoicedate) ?? dt(i.created).slice(0, 10),
  paymentDate: date(i.payment_date), payed: i.payed === 'P' ? 'P' as const : 'N' as const, anticipobancario: int01(i.anticipobancario),
  percentualeanticipo: num(i.percentualeanticipo), meseannoanticipo: /^\d{4}-\d{2}$/.test(String(i.meseannoanticipo)) ? i.meseannoanticipo : null,
  note: str(i.note), created: dt(i.created), modified: dt(i.modified) })), 'fatture attive')
const passives = load('passive_invoices').filter(i => i.status !== 'D')
await insert(schema.passiveinvoices, passives.map(i => ({ id: i.id, documenttype: oneOf(i.documenttype, ['F', 'N', 'S', 'X', 'A'] as const, 'F', 'tipo documento'),
  supplierId: fk(i.supplier_id, supplierIds, 'fornitore'), invoicenumber: str(i.invoicenumber) ?? '', invoicedate: date(i.invoicedate) ?? dt(i.created).slice(0, 10),
  paymentduedate: date(i.paymentduedate) ?? date(i.invoicedate) ?? dt(i.created).slice(0, 10), paymentDate: date(i.payment_date),
  bankId: fk(i.bank_id, bankIds, 'banca'), payed: i.payed === 'P' ? 'P' as const : 'N' as const, iban: str(i.iban),
  type: ['B', 'D', 'U'].includes(i.type) ? i.type : null, causale: str(i.causale), note: str(i.note), created: dt(i.created), modified: dt(i.modified) })), 'fatture passive')
const passiveIds = ids(passives)
const rows = load('task_passive_invoices').filter(r => passiveIds.has(r.passive_invoice_id))
const withRows = new Set(rows.map(r => r.passive_invoice_id))
// fatture senza righe: la ripartizione è sulla testata (campi legacy project_id/task_id)
const legacy = passives.filter(i => !withRows.has(i.id)).map(i => ({ passive_invoice_id: i.id, project_id: i.project_id, task_id: i.task_id, taxable: i.taxable, vat: i.vat }))
await insert(schema.passiveinvoicerows, [...rows, ...legacy].map(r => ({ passiveinvoiceId: r.passive_invoice_id,
  projectId: fk(r.project_id, projectIds, 'progetto'), taskId: fk(r.task_id, taskIds, 'task'), taxable: num(r.taxable), vat: num(r.vat) })), 'righe fatture passive')

// --- link per impostare la password ---
if (userArg) {
  const u = users.find(x => String(x.email).toLowerCase() === userArg.toLowerCase())
  if (!u) console.log(`Utente ${userArg} non trovato`)
  else {
    const code = randomBytes(24).toString('hex')
    await db.insert(schema.usertokens).values({ code, userId: u.id, purpose: 'confirm', expiresAt: new Date(Date.now() + 7 * 864e5).toISOString() })
    console.log(`\nLink per impostare la password di ${userArg} (ruolo ${u.role}, valido 7 giorni):\n${process.env.APP_URL ?? 'http://localhost:3001'}/confirmemailandsetpassword?code=${code}`)
  }
}
console.log('\nAnomalie gestite:', Object.keys(warn).length ? JSON.stringify(warn, null, 1) : 'nessuna')
