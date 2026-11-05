// Dati di esempio fittizi per sviluppo locale. Nessun dato reale di Helaglobe.
// Uso: npm run db:reset   (ricrea lo schema e lo popola; funziona anche a server avviato)
import { drizzle } from 'drizzle-orm/libsql'
import { eq } from 'drizzle-orm'
import { createClient } from '@libsql/client'
import * as schema from './schema.ts'
import { hashPassword } from '../utils/password.ts'
import { recalcTotalsSql } from './totals.ts'

const client = createClient({ url: process.env.DATABASE_URL ?? 'file:./data/helaproject.db' })
const db = drizzle(client, { schema })
const DEMO_PASSWORD = process.env.SEED_PASSWORD ?? 'demo1234'

// Ordine di cancellazione compatibile con le chiavi esterne
const TABLES = ['sessions', 'usertokens', 'notifications', 'passiveinvoicerows', 'passiveinvoices', 'activeinvoices',
  'paymenttranches', 'budgetitems', 'banks', 'hours', 'projecthistories', 'sponsors', 'tasks', 'projectusers',
  'projects', 'usercosts', 'profileprices', 'profilecosts', 'holidays', 'yeartargets', 'activities', 'macrovoices',
  'suppliers', 'projectcolors', 'clients', 'users', 'userprofiles']

if (process.argv.includes('--reset')) {
  await client.batch([
    'PRAGMA foreign_keys = OFF',
    ...TABLES.map(t => `delete from ${t}`),
    `delete from sqlite_sequence where name in (${TABLES.map(t => `'${t}'`).join(',')})`,
    'PRAGMA foreign_keys = ON',
  ], 'write')
}
else {
  const n = (await client.execute('select count(*) as n from users')).rows[0]?.n ?? 0
  if (Number(n) > 0) {
    console.log('Il database contiene già dati: usa "npm run db:reset" per ricrearli.')
    process.exit(0)
  }
}
const pw = await hashPassword(DEMO_PASSWORD)
const Y = new Date().getFullYear()
const YEARS = [Y - 1, Y, Y + 1]

// --- profili professionali e listini per anno ---
const profiles = await db.insert(schema.userprofiles).values([
  { profilename: 'Senior consultant', code: 'SEN' },
  { profilename: 'Consultant', code: 'CON' },
  { profilename: 'Project manager', code: 'PM' },
]).returning()
const BASE = [{ price: 130, cost: 40 }, { price: 95, cost: 30 }, { price: 150, cost: 50 }]
for (const [i, p] of profiles.entries()) {
  for (const [k, year] of YEARS.entries()) {
    const f = 1 + (k - 1) * 0.03 // +3% l'anno
    await db.insert(schema.profileprices).values({ userprofileId: p.id, year, hcost: Math.round(BASE[i]!.price * f) })
    await db.insert(schema.profilecosts).values({ userprofileId: p.id, year, hcost: Math.round(BASE[i]!.cost * f) })
  }
}

// --- utenti con permessi realistici ---
const flagsAll = { hasprojects: 1, hasinvoice: 1, viewdashboard: 1, viewkpi: 1, viewbudget: 1, cancreatemacro: 1 }
const users = await db.insert(schema.users).values([
  { email: 'admin@demo.local', passwordHash: pw, firstname: 'Anna', lastname: 'Admin', acronym: 'AA', role: 'S', userprofileId: profiles[2]!.id, ...flagsAll, verifyemail: 1 },
  { email: 'pm@demo.local', passwordHash: pw, firstname: 'Paolo', lastname: 'Manager', acronym: 'PM', role: 'A', userprofileId: profiles[2]!.id, hasprojects: 1, hasinvoice: 1, viewdashboard: 1, viewkpi: 1, verifyemail: 1 },
  { email: 'utente@demo.local', passwordHash: pw, firstname: 'Ugo', lastname: 'Utente', acronym: 'UU', role: 'U', userprofileId: profiles[1]!.id, verifyemail: 1 },
  { email: 'giulia@demo.local', passwordHash: pw, firstname: 'Giulia', lastname: 'Consulente', acronym: 'GC', role: 'U', userprofileId: profiles[0]!.id, hasprojects: 1, verifyemail: 1 },
  { email: 'ex@demo.local', passwordHash: pw, firstname: 'Ettore', lastname: 'Excollaboratore', acronym: 'EE', role: 'U', userprofileId: profiles[1]!.id, activeuser: 0, usedindashboard: 0, verifyemail: 1 },
]).returning()
const [anna, paolo, ugo, giulia] = users
const USER_COST = [45, 42, 28, 38, 30]
for (const [i, u] of users.entries()) {
  for (const [k, year] of YEARS.entries()) {
    await db.insert(schema.usercosts).values({ userId: u.id, year, hcost: Math.round(USER_COST[i]! * (1 + (k - 1) * 0.02) * 100) / 100 })
  }
}

// --- anagrafiche ---
const clients = await db.insert(schema.clients).values([
  { name: 'Alfa Pharma S.p.A.', codcli: 'C001', piva: '01234567890', cf: '01234567890', address: 'Via Roma 1', zip: '20121', city: 'Milano', province: 'MI', state: 'Italia', email: 'info@alfa.example', paymenttype: '60fm', prioritario: 1 },
  { name: 'Beta Biotech S.r.l.', codcli: 'C002', piva: '09876543210', cf: '09876543210', address: 'Corso Italia 10', zip: '00186', city: 'Roma', province: 'RM', state: 'Italia', paymenttype: '30', prioritario: 1 },
  { name: 'Gamma Health', codcli: 'C003', cf: 'GMMHLT00A01H501X', address: 'Via Po 5', zip: '10123', city: 'Torino', province: 'TO', state: 'Italia', paymenttype: '90' },
  { name: 'Delta Medical', codcli: 'C004', cf: '11122233344', address: 'Piazza Duomo 3', zip: '50122', city: 'Firenze', province: 'FI', state: 'Italia', paymenttype: '60' },
  { name: 'Fondazione Epsilon', codcli: 'C005', cf: '99988877766', address: 'Via Garibaldi 7', zip: '40121', city: 'Bologna', province: 'BO', state: 'Italia' },
  { name: 'Interno', codcli: 'INT', cf: '-', address: '-', zip: '-', city: '-', state: 'Italia' },
]).returning()

const suppliers = await db.insert(schema.suppliers).values([
  { name: 'Studio Grafico Rossi', codsup: 'F001', type: 'P', city: 'Milano', state: 'Italia' },
  { name: 'Traduzioni Express', codsup: 'F002', type: 'A', city: 'Roma', state: 'Italia' },
  { name: 'Eventi & Congressi', codsup: 'F003', type: 'A', city: 'Torino', state: 'Italia' },
  { name: 'Dott. Bianchi (KOL)', codsup: 'F004', type: 'C', city: 'Napoli', state: 'Italia' },
]).returning()

const colors = await db.insert(schema.projectcolors).values([
  { name: 'Market access', color: '#1e88e5' },
  { name: 'Formazione', color: '#43a047' },
  { name: 'Comunicazione', color: '#fb8c00' },
  { name: 'Ricerca', color: '#8e24aa' },
  { name: '#757575', color: '#757575' },
]).returning()

const activities = await db.insert(schema.activities).values([
  { name: 'Analisi', acronimo: 'AN', description: 'Analisi e ricerca', type: 'N' },
  { name: 'Redazione', acronimo: 'RED', description: 'Stesura documenti', type: 'N' },
  { name: 'Riunione', acronimo: 'RIU', description: 'Meeting interni e con il cliente', type: 'N' },
  { name: 'Ferie / Permessi / Malattia', acronimo: 'FER', description: 'Assenze', type: 'F' },
]).returning()

const macro = await db.insert(schema.macrovoices).values([
  { name: 'Consulenza', description: 'Attività professionali del team' },
  { name: 'Servizi esterni', description: 'Fornitori e servizi di terzi' },
]).returning()

// Festività nazionali ricorrenti (anno 0000) + una chiusura aziendale
await db.insert(schema.holidays).values([
  ['01-01', 'Capodanno'], ['01-06', 'Epifania'], ['04-25', 'Festa della Liberazione'], ['05-01', 'Festa del Lavoro'],
  ['06-02', 'Festa della Repubblica'], ['08-15', 'Ferragosto'], ['11-01', 'Ognissanti'], ['12-08', 'Immacolata'],
  ['12-25', 'Natale'], ['12-26', 'Santo Stefano'],
].map(([d, description]) => ({ day: `0000-${d}`, type: 'F' as const, description: description!, color: '#e53935' })))
await db.insert(schema.holidays).values([`${Y}-08-12`, `${Y}-08-13`, `${Y}-08-14`]
  .map(day => ({ day, type: 'C' as const, description: 'Chiusura estiva', color: '#fb8c00' })))

await db.insert(schema.yeartargets).values([
  { year: Y - 1, value: 900000, soglia: 30 }, { year: Y, value: 1000000, soglia: 30 },
])

// --- progetti ---
type P = Partial<typeof schema.projects.$inferInsert> & { code: string, name: string }
const projectsData: (P & { owners: number[], tasks: number })[] = [
  { code: `PR1${Y}`, name: 'Advisory board oncologia', clientId: clients[0]!.id, status: 'A', openstatus: 'A', projectcolorId: colors[0]!.id, startdate: `${Y}-01-15`, enddate: `${Y}-09-30`, signaturedate: `${Y}-01-10`, owners: [paolo!.id, giulia!.id], tasks: 5 },
  { code: `PR2${Y}`, name: 'Corso ECM medici di base', clientId: clients[1]!.id, status: 'C', openstatus: 'A', projectcolorId: colors[1]!.id, startdate: `${Y}-03-01`, enddate: `${Y}-12-15`, owners: [giulia!.id], tasks: 4 },
  { code: `PR3${Y}`, name: 'Dossier HTA nuovo farmaco', clientId: clients[2]!.id, status: 'I', openstatus: 'A', successpercent: 60, projectcolorId: colors[0]!.id, startdate: `${Y}-02-01`, splitpercent: 70, splityear: Y, splitpercent1: 30, splityear1: Y + 1, owners: [paolo!.id], tasks: 3, note: 'In attesa del feedback del cliente sul budget.' },
  { code: `PR4${Y}`, name: 'Campagna awareness malattie rare', clientId: clients[3]!.id, status: 'L', openstatus: 'A', projectcolorId: colors[2]!.id, owners: [ugo!.id], tasks: 0 },
  { code: `PR5${Y}`, name: 'Survey pazienti diabete', clientId: clients[4]!.id, status: 'H', openstatus: 'A', projectcolorId: colors[3]!.id, startdate: `${Y - 1}-11-01`, owners: [giulia!.id], tasks: 2 },
  { code: `PR6${Y}`, name: 'Gara regionale dispositivi', clientId: clients[3]!.id, status: 'R', openstatus: 'C', projectcolorId: colors[4]!.id, owners: [paolo!.id], tasks: 1 },
  { code: `PR7${Y}`, name: 'Amministrazione interna', clientId: clients[5]!.id, status: 'A', openstatus: 'A', type: 'A', internalproject: 1, owners: [anna!.id], tasks: 1 },
  { code: `PR8${Y}`, name: 'Ferie e permessi', clientId: clients[5]!.id, status: 'A', openstatus: 'A', type: 'F', internalproject: 1, owners: [anna!.id], tasks: 0 },
  { code: `PR12${Y - 1}`, name: 'Report real world evidence', clientId: clients[0]!.id, status: 'A', openstatus: 'C', projectcolorId: colors[3]!.id, startdate: `${Y - 1}-04-01`, enddate: `${Y - 1}-12-20`, owners: [paolo!.id], tasks: 3, incrementoproposta: 10, tipoincrementoproposta: 'P', scontoproposta: 500, tiposcontoproposta: 'V', notesconto: 'Sconto fedeltà' },
  { code: `PR9${Y}`, name: 'Sviluppo piattaforma e-learning', clientId: clients[1]!.id, status: 'S', openstatus: 'A', projectcolorId: colors[1]!.id, owners: [giulia!.id, paolo!.id], tasks: 2 },
]
const taskNames = ['Kick-off e pianificazione', 'Analisi della letteratura', 'Stesura documento', 'Revisione con il cliente', 'Grafica e impaginazione', 'Organizzazione evento', 'Report finale']

for (const { owners, tasks: nTasks, ...p } of projectsData) {
  const [row] = await db.insert(schema.projects).values({ splityear: p.startdate ? Number(p.startdate.slice(0, 4)) : Y, ...p }).returning()
  const projectId = row!.id
  const year = Number(p.code.slice(-4))
  await db.insert(schema.projectusers).values(owners.map((userId, position) => ({ projectId, userId, position })))
  await db.insert(schema.projecthistories).values({ projectId, userId: owners[0], type: 'C' })

  for (let i = 0; i < nTasks; i++) {
    const external = i === 4 || i === 5
    const assignee = users.find(u => u.id === owners[i % owners.length])!
    const profileId = assignee.userprofileId!
    const hrs = (2 + ((i * 3) % 7)) * 8
    const [task] = await db.insert(schema.tasks).values({
      projectId, shortname: taskNames[i % taskNames.length]!, ordering: i + 1,
      type: external ? 'V' : 'P', macrovoiceId: external ? macro[1]!.id : macro[0]!.id,
      status: p.openstatus === 'C' ? 'C' : (i === 0 ? 'P' : 'A'),
      internalactivity: external ? 0 : 1,
      hours: external ? 0 : hrs,
      userId: external ? null : assignee.id,
      userprofileId: external ? null : profileId,
      supplierId: external ? suppliers[i % suppliers.length]!.id : null,
      supplierprice: external ? 2500 : 0, suppliercost: external ? 1800 : 0,
      startdate: p.startdate ?? null, enddate: p.enddate ?? null,
    }).returning()
    if (!external && i < 3 && p.startdate) {
      const d = p.startdate
      await db.insert(schema.hours).values([
        { taskId: task!.id, userId: assignee.id, activityId: activities[0]!.id, startdate: `${d} 09:00:00`, enddate: `${d} 13:00:00` },
        { taskId: task!.id, userId: assignee.id, activityId: activities[1]!.id, startdate: `${d} 14:00:00`, enddate: `${d} 18:00:00` },
      ])
    }
  }
}

// Task "Ferie" nel progetto di tipo F, assegnato a tutti tramite l'utente (uno per persona attiva)
const ferie = (await db.select().from(schema.projects)).find(p => p.type === 'F')!
for (const u of users.filter(u => u.activeuser)) {
  await db.insert(schema.tasks).values({ projectId: ferie.id, shortname: `Ferie ${u.firstname}`, type: 'P', internalactivity: 1, hours: 0, userId: u.id, userprofileId: u.userprofileId, status: 'A' })
}

await db.insert(schema.sponsors).values({ projectId: 1, clientId: clients[4]!.id, contractdate: `${Y}-01-20`, note: 'Co-finanziamento 30%' })

// --- fatture e finanza ---
const banks = await db.insert(schema.banks).values([{ name: 'Banca Intesa' }, { name: 'UniCredit' }]).returning()
const allProjects = await db.select().from(schema.projects)
const byCode = (c: string) => allProjects.find(p => p.code === c)!
const pr1 = byCode(`PR1${Y}`), pr2 = byCode(`PR2${Y}`), pr12 = byCode(`PR12${Y - 1}`)
const sponsor = (await db.select().from(schema.sponsors))[0]!
const tranches = await db.insert(schema.paymenttranches).values([
  { projectId: pr1.id, type: 'A', total: 6000, vat: 1320, previewdate: `${Y}-02-01`, paymentdate: `${Y}-03-31`, description: 'Firma contratto' },
  { projectId: pr1.id, type: 'I', total: 8000, vat: 1760, previewdate: `${Y}-05-15`, paymentdate: `${Y}-07-31`, description: 'Advisory board svolto' },
  { projectId: pr1.id, sponsorId: sponsor.id, type: 'S', total: 7000, vat: 1540, previewdate: `${Y}-10-15`, paymentdate: `${Y}-12-31`, description: 'Report finale (quota sponsor)' },
  { projectId: pr2.id, type: 'A', total: 5000, vat: 1100, previewdate: `${Y}-03-15`, paymentdate: `${Y}-04-14`, description: 'Avvio corso' },
  { projectId: pr2.id, type: 'S', total: 14000, vat: 3080, previewdate: `${Y}-12-15`, paymentdate: `${Y + 1}-01-14`, description: 'Chiusura corso' },
  { projectId: pr12.id, type: 'S', total: 16000, vat: 3520, previewdate: `${Y - 1}-12-20`, paymentdate: `${Y}-02-28`, description: 'Consegna report' },
]).returning()
await db.insert(schema.activeinvoices).values([
  { projectId: pr1.id, paymentTrancheId: tranches[0]!.id, bankId: banks[0]!.id, invoicenumber: '12', invoicedate: `${Y}-02-01`, taxable: 6000, vat: 1320, paymentduedate: `${Y}-03-31`, payed: 'P', paymentDate: `${Y}-03-28` },
  { projectId: pr1.id, paymentTrancheId: tranches[1]!.id, bankId: banks[0]!.id, invoicenumber: '48', invoicedate: `${Y}-05-15`, taxable: 8000, vat: 1760, paymentduedate: `${Y}-07-31`, payed: 'N' },
  { projectId: pr2.id, paymentTrancheId: tranches[3]!.id, bankId: banks[1]!.id, invoicenumber: '27', invoicedate: `${Y}-03-15`, taxable: 5000, vat: 1100, paymentduedate: `${Y}-04-14`, payed: 'P', paymentDate: `${Y}-04-20` },
  { projectId: pr12.id, paymentTrancheId: tranches[5]!.id, bankId: banks[1]!.id, invoicenumber: '101', invoicedate: `${Y - 1}-12-20`, taxable: 16000, vat: 3520, paymentduedate: `${Y}-02-28`, payed: 'P', paymentDate: `${Y}-03-05` },
])
const extTasks = (await db.select().from(schema.tasks)).filter(t => t.internalactivity === 0)
const budgetItems = await db.insert(schema.budgetitems).values([
  { year: Y, group: 'F', nome: 'Affitto ufficio', costo: 36000 }, { year: Y, group: 'F', nome: 'Software e licenze', costo: 9000 },
  { year: Y, group: 'V', nome: 'Viaggi e trasferte', costo: 12000 }, { year: Y, group: 'V', nome: 'Formazione', costo: 6000 },
  { year: Y, group: 'P', nome: 'Stipendi', costo: 420000 },
]).returning()
for (const [i, t] of extTasks.slice(0, 3).entries()) {
  const [pi] = await db.insert(schema.passiveinvoices).values({ documenttype: 'F', supplierId: t.supplierId!, invoicenumber: `F-${100 + i}`,
    invoicedate: `${Y}-0${3 + i}-10`, paymentduedate: `${Y}-0${4 + i}-10`, payed: i === 0 ? 'P' : 'N', paymentDate: i === 0 ? `${Y}-04-09` : null, bankId: banks[0]!.id }).returning()
  // una fattura pari al costo del task, una ripartita su due righe, una diversa dal costo (avviso flagprice)
  const c = t.suppliercost
  const rows = i === 1 ? [{ taxable: c / 2, vat: c / 2 * 0.22 }, { taxable: c / 2, vat: c / 2 * 0.22 }] : [{ taxable: i === 2 ? c + 300 : c, vat: 0.22 * (i === 2 ? c + 300 : c) }]
  await db.insert(schema.passiveinvoicerows).values(rows.map(r => ({ passiveinvoiceId: pi!.id, projectId: t.projectId, taskId: t.id, ...r })))
}
for (const [i, [item, amount]] of ([[0, 3000], [0, 3000], [1, 750], [2, 1840]] as const).entries()) {
  const [pi] = await db.insert(schema.passiveinvoices).values({ documenttype: 'F', supplierId: suppliers[1]!.id, invoicenumber: `C-${i + 1}`,
    invoicedate: `${Y}-0${i + 1}-05`, paymentduedate: `${Y}-0${i + 1}-30`, payed: 'P', paymentDate: `${Y}-0${i + 1}-28`, budgetitemId: budgetItems[item]!.id }).returning()
  await db.insert(schema.passiveinvoicerows).values({ passiveinvoiceId: pi!.id, taxable: amount, vat: amount * 0.22 })
}
// date di creazione realistiche: i progetti nascono prima dei loro cambi di stato
for (const [code, created] of [[`PR1${Y}`, `${Y - 1}-12-10`], [`PR2${Y}`, `${Y}-01-20`], [`PR3${Y}`, `${Y}-01-12`], [`PR6${Y}`, `${Y}-02-02`]] as const) {
  await db.update(schema.projects).set({ created: `${created} 09:00:00` }).where(eq(schema.projects.code, code))
}
// passaggi di stato nello storico (win rate, proposte inviate, tempi commerciali)
const hist = (code: string, oldvalue: string, newvalue: string, date: string) => ({ projectId: byCode(code).id, userId: paolo!.id, type: 'S' as const, oldvalue, newvalue, created: `${date} 10:00:00` })
await db.insert(schema.projecthistories).values([
  hist(`PR1${Y}`, 'S', 'I', `${Y}-01-05`), hist(`PR1${Y}`, 'I', 'A', `${Y}-01-10`),
  hist(`PR2${Y}`, 'S', 'I', `${Y}-02-10`), hist(`PR2${Y}`, 'I', 'C', `${Y}-02-25`),
  hist(`PR3${Y}`, 'S', 'I', `${Y}-02-01`), hist(`PR6${Y}`, 'S', 'I', `${Y}-03-01`), hist(`PR6${Y}`, 'I', 'R', `${Y}-04-15`),
])

await client.execute(recalcTotalsSql())

console.log(`Seed completato: ${users.length} utenti, ${clients.length} clienti, ${suppliers.length} fornitori, ${projectsData.length} progetti.`)
console.log(`Accessi demo (password "${DEMO_PASSWORD}"): admin@demo.local (superadmin), pm@demo.local (admin), giulia@demo.local (può creare progetti), utente@demo.local (sola consultazione)`)
