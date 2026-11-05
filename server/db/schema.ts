// Schema ricostruito dal frontend di Helaproject (vedi docs/spec-modulo-progetti.md).
// I nomi dei campi ricalcano quelli dell'API originale per facilitare migrazioni e confronti.
import { sqliteTable, integer, text, real, primaryKey, index, uniqueIndex } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

const timestamps = {
  created: text('created').notNull().default(sql`(datetime('now'))`),
  modified: text('modified').notNull().default(sql`(datetime('now'))`),
}

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash'),
  firstname: text('firstname').notNull(),
  lastname: text('lastname').notNull(),
  // S superadmin, A admin, U utente
  role: text('role', { enum: ['S', 'A', 'U'] }).notNull().default('U'),
  acronym: text('acronym'),
  code: text('code'),
  image: text('image'),
  userprofileId: integer('userprofile_id'),
  verifyemail: integer('verifyemail').notNull().default(0),
  // permessi e flag operativi (nomi identici all'originale)
  hasprojects: integer('hasprojects').notNull().default(0),
  hasinvoice: integer('hasinvoice').notNull().default(0),
  viewdashboard: integer('viewdashboard').notNull().default(0),
  viewkpi: integer('viewkpi').notNull().default(0),
  viewbudget: integer('viewbudget').notNull().default(0),
  cancreatemacro: integer('cancreatemacro').notNull().default(0),
  viewfic: integer('viewfic').notNull().default(0),
  usedindashboard: integer('usedindashboard').notNull().default(1),
  sendnotificationemail: integer('sendnotificationemail').notNull().default(0),
  sendpresenzealert: integer('sendpresenzealert').notNull().default(0),
  creanotifica: integer('creanotifica').notNull().default(1),
  activeuser: integer('activeuser').notNull().default(1),
  ...timestamps,
})

export const sessions = sqliteTable('sessions', {
  token: text('token').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expiresAt: text('expires_at').notNull(),
})

// Campi anagrafici comuni a clienti e fornitori (stessi nomi dell'originale)
const anagrafica = {
  name: text('name').notNull(),
  piva: text('piva'),
  cf: text('cf'),
  sdi: text('sdi'),
  pec: text('pec'),
  email: text('email'),
  companyemail: text('companyemail'),
  invoiceemail: text('invoiceemail'),
  address: text('address'),
  zip: text('zip'),
  city: text('city'),
  province: text('province'),
  state: text('state'),
  telephone: text('telephone'),
  website: text('website'),
  iban: text('iban'),
  contactperson: text('contactperson'),
  notes: text('notes'),
  stopservice: integer('stopservice').notNull().default(0),
  // A attivo, D eliminato (cancellazione logica)
  status: text('status', { enum: ['A', 'D'] }).notNull().default('A'),
}

export const clients = sqliteTable('clients', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  codcli: text('codcli'),
  ...anagrafica,
  prioritario: integer('prioritario').notNull().default(0),
  // termini di pagamento: null personalizzato, "0", "30", "30fm", "45", "60", "60fm", "75", "90", "90fm", "120"
  paymenttype: text('paymenttype'),
  ...timestamps,
})

export const suppliers = sqliteTable('suppliers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  codsup: text('codsup'),
  ...anagrafica,
  // A azienda, P professionista, C clinico
  type: text('type', { enum: ['A', 'P', 'C'] }).notNull().default('A'),
  ...timestamps,
})

export const projectcolors = sqliteTable('projectcolors', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  color: text('color').notNull(),
})

export const userprofiles = sqliteTable('userprofiles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  profilename: text('profilename').notNull(),
  code: text('code').notNull(),
})

// Listini orari storicizzati per anno (verificati sui dati reali, vedi spec-anagrafiche.md):
//  - prezzo e costo orario per profilo professionale × anno → prezzo/costo dei task
//  - costo orario per dipendente × anno → costo reale delle ore registrate
export const profileprices = sqliteTable('profileprices', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userprofileId: integer('userprofile_id').notNull().references(() => userprofiles.id, { onDelete: 'cascade' }),
  year: integer('year').notNull(),
  hcost: real('hcost').notNull(),
}, t => [uniqueIndex('profileprices_uq').on(t.userprofileId, t.year)])

export const profilecosts = sqliteTable('profilecosts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userprofileId: integer('userprofile_id').notNull().references(() => userprofiles.id, { onDelete: 'cascade' }),
  year: integer('year').notNull(),
  hcost: real('hcost').notNull(),
}, t => [uniqueIndex('profilecosts_uq').on(t.userprofileId, t.year)])

export const usercosts = sqliteTable('usercosts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  year: integer('year').notNull(),
  hcost: real('hcost').notNull(),
}, t => [uniqueIndex('usercosts_uq').on(t.userId, t.year)])

export const activities = sqliteTable('activities', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  acronimo: text('acronimo').notNull(),
  description: text('description'),
  notes: text('notes'),
  // N normale, F ferie/permessi/malattia
  type: text('type', { enum: ['N', 'F'] }).notNull().default('N'),
  status: text('status', { enum: ['A', 'D'] }).notNull().default('A'),
  ...timestamps,
})

export const macrovoices = sqliteTable('macrovoices', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  status: text('status', { enum: ['A', 'D'] }).notNull().default('A'),
  ...timestamps,
})

// Eventi di calendario: F festività, C chiusura, M meeting, Z formazione.
// Le ricorrenze annuali hanno anno 0000 (es. "0000-12-25"), come nell'originale.
export const holidays = sqliteTable('holidays', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  day: text('day').notNull(),
  type: text('type', { enum: ['F', 'C', 'M', 'Z'] }).notNull().default('F'),
  description: text('description').notNull(),
  color: text('color'),
  ...timestamps,
}, t => [index('holidays_day_idx').on(t.day)])

export const yeartargets = sqliteTable('yeartargets', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull().unique(),
  value: real('value').notNull().default(0),
  // soglia di margine in percentuale
  soglia: real('soglia').notNull().default(0),
})

export const notifications = sqliteTable('notifications', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  link: text('link'),
  readon: text('readon'),
  created: text('created').notNull().default(sql`(datetime('now'))`),
}, t => [index('notifications_user_idx').on(t.userId)])

// Token monouso per conferma utente e recupero password (in sviluppo il link viene scritto nel log)
export const usertokens = sqliteTable('usertokens', {
  code: text('code').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  purpose: text('purpose', { enum: ['confirm', 'reset'] }).notNull(),
  expiresAt: text('expires_at').notNull(),
})

export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  code: text('code').notNull(),
  name: text('name').notNull(),
  contractname: text('contractname'),
  description: text('description'),
  referent: text('referent'),
  clientId: integer('client_id').references(() => clients.id),
  projectcolorId: integer('projectcolor_id').references(() => projectcolors.id),
  // stato commerciale: L S I C A R H D
  status: text('status', { enum: ['L', 'S', 'I', 'C', 'A', 'R', 'H', 'D'] }).notNull().default('S'),
  // apertura: A aperto, C chiuso
  openstatus: text('openstatus', { enum: ['A', 'C'] }).notNull().default('A'),
  // N normale, A amministrativo, F ferie/permessi/malattia
  type: text('type', { enum: ['N', 'A', 'F'] }).notNull().default('N'),
  internalproject: integer('internalproject').notNull().default(0),
  startdate: text('startdate'),
  enddate: text('enddate'),
  signaturedate: text('signaturedate'),
  successpercent: integer('successpercent').notNull().default(0),
  splitpercent: real('splitpercent').notNull().default(100),
  splityear: integer('splityear').notNull().default(0),
  splitpercent1: real('splitpercent1').notNull().default(0),
  splityear1: integer('splityear1').notNull().default(0),
  note: text('note'),
  noteaddendum: text('noteaddendum'),
  // aggiustamenti economici della proposta (V = valore, P = percentuale)
  incrementoproposta: real('incrementoproposta').notNull().default(0),
  tipoincrementoproposta: text('tipoincrementoproposta', { enum: ['V', 'P'] }).notNull().default('P'),
  noteincremento: text('noteincremento'),
  scontoproposta: real('scontoproposta').notNull().default(0),
  tiposcontoproposta: text('tiposcontoproposta', { enum: ['V', 'P'] }).notNull().default('P'),
  notesconto: text('notesconto'),
  newtotaleproposta: real('newtotaleproposta').notNull().default(0),
  // totali salvati e aggiornati al salvataggio di task/ore (vedi server/db/totals.ts)
  totaleproposta: real('totaleproposta').notNull().default(0),
  costoproposta: real('costoproposta').notNull().default(0),
  costopropostareal: real('costopropostareal').notNull().default(0),
  totalepropostamodified: real('totalepropostamodified').notNull().default(0),
  costopropostamodified: real('costopropostamodified').notNull().default(0),
  cloneid: integer('cloneid').notNull().default(0),
  ...timestamps,
}, t => [index('projects_client_idx').on(t.clientId), index('projects_status_idx').on(t.status)])

// Responsabili di progetto (Projectuser nell'originale, "Owners" in scrittura)
export const projectusers = sqliteTable('projectusers', {
  projectId: integer('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  userId: integer('user_id').notNull().references(() => users.id),
  position: integer('position').notNull().default(0),
}, t => [primaryKey({ columns: [t.projectId, t.userId] })])

export const sponsors = sqliteTable('sponsors', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  projectId: integer('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  clientId: integer('client_id').notNull().references(() => clients.id),
  contractdate: text('contractdate'),
  note: text('note'),
})

export const tasks = sqliteTable('tasks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  projectId: integer('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  code: text('code'),
  shortname: text('shortname').notNull(),
  description: text('description'),
  // macrovoce: F costi fissi, V costi variabili, P costi personale
  type: text('type', { enum: ['F', 'V', 'P'] }),
  // A aperto, P completato, C chiuso, D eliminato (cancellazione logica)
  status: text('status', { enum: ['A', 'P', 'C', 'D'] }).notNull().default('A'),
  note: text('note'),
  genericsupplier: text('genericsupplier'),
  internalactivity: integer('internalactivity').notNull().default(1),
  esecutivo: integer('esecutivo').notNull().default(0),
  iscr: integer('iscr').notNull().default(0),
  hours: real('hours').notNull().default(0),
  startdate: text('startdate'),
  enddate: text('enddate'),
  userId: integer('user_id').references(() => users.id),
  userprofileId: integer('userprofile_id').references(() => userprofiles.id),
  supplierId: integer('supplier_id').references(() => suppliers.id),
  macrovoiceId: integer('macrovoice_id').references(() => macrovoices.id),
  supplierprice: real('supplierprice').notNull().default(0),
  suppliercost: real('suppliercost').notNull().default(0),
  ordering: integer('ordering').notNull().default(0),
  ...timestamps,
}, t => [index('tasks_project_idx').on(t.projectId)])

// Ore consuntivate: nella versione base servono solo per mostrare "ore lavorate" sui task.
// Ore registrate: intervallo orario + attività (Hour nell'originale). Durata = enddate − startdate.
export const hours = sqliteTable('hours', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  taskId: integer('task_id').notNull().references(() => tasks.id, { onDelete: 'cascade' }),
  userId: integer('user_id').notNull().references(() => users.id),
  activityId: integer('activity_id').references(() => activities.id),
  description: text('description'),
  // "YYYY-MM-DD HH:MM:SS" ora locale (Europe/Rome)
  startdate: text('startdate').notNull(),
  enddate: text('enddate').notNull(),
  status: text('status', { enum: ['A', 'D'] }).notNull().default('A'),
  ...timestamps,
}, t => [index('hours_task_idx').on(t.taskId), index('hours_user_day_idx').on(t.userId, t.startdate)])

// Storici di progetto come l'originale: istantanea JSON del progetto e dei suoi task, salvata alla creazione (C),
// al cambio stato (S), al cambio apertura (A), al cambio responsabili (O) o manualmente dal progetto (P).
export const projecthistories = sqliteTable('projecthistories', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  projectId: integer('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  userId: integer('user_id').references(() => users.id),
  type: text('type', { enum: ['C', 'S', 'A', 'O', 'P'] }).notNull(),
  oldvalue: text('oldvalue'),
  newvalue: text('newvalue'),
  // {"Project": {...}, "Task": [{Task, User, Userprofile, Supplier}], ...} – stesso formato dell'originale
  history: text('history'),
  // eliminazione logica come l'originale: le voci eliminate spariscono dagli elenchi ma restano nelle statistiche (win rate)
  status: text('status', { enum: ['A', 'D'] }).notNull().default('A'),
  created: text('created').notNull().default(sql`(datetime('now'))`),
}, t => [index('histories_project_idx').on(t.projectId), index('histories_created_idx').on(t.created)])

// ---------------------------------------------------------------------------------------------
// Fatture e finanza (spec: docs/spec-fatture-finanza.md, verifiche §19)
// ---------------------------------------------------------------------------------------------

export const banks = sqliteTable('banks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
})

// Piano di fatturazione del progetto. Pagata / emessa / data fattura derivano dalla fattura collegata (verificato 176/176).
export const paymenttranches = sqliteTable('paymenttranches', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  projectId: integer('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  // sponsor del progetto (record sponsors, non il cliente): se presente è lui il destinatario della fattura
  sponsorId: integer('sponsor_id').references(() => sponsors.id, { onDelete: 'set null' }),
  // A anticipo, I intermedio, S saldo
  type: text('type', { enum: ['A', 'I', 'S'] }).notNull().default('A'),
  total: real('total').notNull().default(0),
  vat: real('vat').notNull().default(0),
  previewdate: text('previewdate').notNull(),
  paymentdate: text('paymentdate').notNull(),
  description: text('description'),
  note: text('note'),
  ...timestamps,
}, t => [index('tranches_project_idx').on(t.projectId), index('tranches_preview_idx').on(t.previewdate)])

export const activeinvoices = sqliteTable('activeinvoices', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  projectId: integer('project_id').notNull().references(() => projects.id),
  paymentTrancheId: integer('payment_tranche_id').references(() => paymenttranches.id, { onDelete: 'set null' }),
  bankId: integer('bank_id').references(() => banks.id),
  invoicenumber: text('invoicenumber').notNull(),
  invoicedate: text('invoicedate').notNull(),
  taxable: real('taxable').notNull().default(0),
  vat: real('vat').notNull().default(0),
  paymentduedate: text('paymentduedate').notNull(),
  paymentDate: text('payment_date'),
  payed: text('payed', { enum: ['P', 'N'] }).notNull().default('N'),
  anticipobancario: integer('anticipobancario').notNull().default(0),
  percentualeanticipo: real('percentualeanticipo').notNull().default(0),
  // YYYY-MM
  meseannoanticipo: text('meseannoanticipo'),
  note: text('note'),
  ...timestamps,
}, t => [index('activeinvoices_project_idx').on(t.projectId), index('activeinvoices_due_idx').on(t.paymentduedate)])

// Voci di budget aziendale per anno (V variabili, F fissi, P personale)
export const budgetitems = sqliteTable('budgetitems', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  year: integer('year').notNull(),
  group: text('group', { enum: ['V', 'F', 'P'] }).notNull(),
  nome: text('nome').notNull(),
  costo: real('costo').notNull().default(0),
}, t => [uniqueIndex('budgetitems_uq').on(t.year, t.group, t.nome)])

export const passiveinvoices = sqliteTable('passiveinvoices', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  // F fattura, N notula, S scontrino, X F24, A altro
  documenttype: text('documenttype', { enum: ['F', 'N', 'S', 'X', 'A'] }).notNull().default('F'),
  supplierId: integer('supplier_id').references(() => suppliers.id), // facoltativo solo per dati storici importati
  invoicenumber: text('invoicenumber').notNull(),
  invoicedate: text('invoicedate').notNull(),
  paymentduedate: text('paymentduedate').notNull(),
  paymentDate: text('payment_date'),
  bankId: integer('bank_id').references(() => banks.id),
  payed: text('payed', { enum: ['P', 'N'] }).notNull().default('N'),
  iban: text('iban'),
  // priorità di pagamento: B bloccato, D differibile, U urgente
  type: text('type', { enum: ['B', 'D', 'U'] }),
  causale: text('causale'),
  note: text('note'),
  // costo aziendale imputato a una voce di budget (facoltativo)
  budgetitemId: integer('budgetitem_id').references(() => budgetitems.id, { onDelete: 'set null' }),
  ...timestamps,
}, t => [index('passiveinvoices_due_idx').on(t.paymentduedate)])

// Righe di ripartizione della fattura passiva su progetti/task; la testata ne è la somma (verificato 929/929)
export const passiveinvoicerows = sqliteTable('passiveinvoicerows', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  passiveinvoiceId: integer('passiveinvoice_id').notNull().references(() => passiveinvoices.id, { onDelete: 'cascade' }),
  projectId: integer('project_id').references(() => projects.id),
  taskId: integer('task_id').references(() => tasks.id),
  taxable: real('taxable').notNull().default(0),
  vat: real('vat').notNull().default(0),
}, t => [index('pirows_invoice_idx').on(t.passiveinvoiceId), index('pirows_project_idx').on(t.projectId)])
