// Prova nel browser: apre ogni pagina come superadmin e utente, esegue i flussi principali,
// fallisce se ci sono errori in console. Richiede server avviato e `npm run db:reset`.
// Uso: npm run test:ui   (CHROME_PATH per indicare un Chromium diverso; SHOTS=dir per gli screenshot)
import { chromium } from 'playwright-core'
import { existsSync, readdirSync, mkdirSync } from 'node:fs'
import { homedir } from 'node:os'

const B = process.env.APP_URL ?? 'http://localhost:3002' // server di test: npm run test:server
const SHOTS = process.env.SHOTS
if (SHOTS) mkdirSync(SHOTS, { recursive: true })
function chromePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH
  const base = `${homedir()}/.cache/ms-playwright`
  const dir = existsSync(base) && readdirSync(base).filter(d => /^chromium-\d+$/.test(d)).sort().at(-1)
  if (!dir) throw new Error('Chromium non trovato: imposta CHROME_PATH')
  return `${base}/${dir}/chrome-linux64/chrome`
}
const browser = await chromium.launch({ executablePath: chromePath() })
const errors = []
const results = []
const Y = new Date().getFullYear()

async function session(email) {
  const page = await browser.newPage({ viewport: { width: 1500, height: 950 }, locale: 'it-IT' })
  page.on('pageerror', e => errors.push(`${email} @ ${page.url()}: ${e.message}`))
  page.on('console', (m) => {
    // le voci di menu verso aree non ancora costruite generano avvisi del router: non sono errori dell'app
    if (['error', 'warning'].includes(m.type()) && !m.text().includes('VUE_ROUTER_R0004')) errors.push(`${email} ${m.type()}: ${m.text().slice(0, 300)}`)
  })
  await page.goto(`${B}/login`)
  await page.getByLabel('Email').fill(email)
  await page.getByRole('textbox', { name: 'Password' }).fill('demo1234')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.waitForURL(u => !u.pathname.startsWith('/login'))
  return page
}
async function step(page, name, fn) {
  try { await fn(); results.push(`OK   ${name}`) }
  catch (e) {
    results.push(`FAIL ${name}: ${e.message.split('\n')[0]}`)
    if (SHOTS) await page.screenshot({ path: `${SHOTS}/fail-${name.replace(/\W+/g, '_')}.png` })
  }
}
const shot = async (page, name) => SHOTS && page.screenshot({ path: `${SHOTS}/${name}.png` })
const field = (scope, label) => scope.locator('.v-field', { hasText: label }).first()

// --- superadmin: tutte le pagine ---
const a = await session('admin@demo.local')
const pages = [
  ['/projects', 'Progetti', 'Advisory board'], ['/projects/1', 'Advisory board oncologia', 'Kick-off'],
  ['/clients', 'Clienti', 'Alfa Pharma'], ['/suppliers', 'Fornitori', 'Studio Grafico'], ['/users', 'Utenti', 'admin@demo.local'],
  ['/userprofiles', 'Profili professionali', 'Senior consultant'], ['/upprices', 'Prezzi orari profili', 'Senior consultant'],
  ['/upcosts', 'Costi orari profili', 'Senior consultant'], ['/costs', 'Costi orari dipendenti', 'Anna Admin'],
  ['/activities', 'Definizione attività', 'Analisi'], ['/macrovoices', 'Definizione macrovoci', 'Consulenza'],
  ['/colors', 'Definizione colori', 'Market access'], ['/holidays', 'Eventi in calendario', 'Natale'],
  ['/targets', 'Target annui', '1.000.000'], ['/profile', 'Il mio profilo', ''],
  ['/todolist', 'Calendario / To Do', 'Assegnazioni'], ['/hours', 'Imputazione ore', 'Giorni lavorativi'],
  ['/works', 'Carichi di lavoro', ''], ['/notification-center', 'Notifiche', ''],
  ['/', 'Dashboard', 'Fatturato acquisito'], ['/banks', 'Banche', 'UniCredit'],
  ['/adminactiveinvoices', 'Fatture attive', ''], ['/adminpassiveinvoices', 'Fatture passive', ''],
  ['/adminpaymenttranches', 'Tranche di pagamento', ''], ['/histories', 'Storici', 'Creazione progetto'], ['/scadenziario', 'Scadenziario attivo', 'Advisory board'],
  ['/scadenziariofattureattive', 'Scadenziario fatture', 'Advisory board'], ['/kpi', 'Calcoli economici e KPI', 'Advisory board'],
  ['/budget', 'Budget', 'Affitto ufficio'],
]
for (const [path, title, text] of pages) {
  await step(a, `pagina ${path}`, async () => {
    await a.goto(B + path)
    await a.getByRole('heading', { name: title }).first().waitFor({ timeout: 10000 })
    if (text) await a.getByText(text, { exact: false }).first().waitFor({ timeout: 10000 })
  })
}

await step(a, 'crea attività da form', async () => {
  await a.goto(`${B}/activities`)
  await a.getByRole('button', { name: 'Crea attività' }).click()
  await a.getByLabel('Nome attività*').fill('Attività UI')
  await a.getByLabel('Acronimo*').fill('UI')
  await a.getByLabel('Descrizione*').fill('da test')
  await a.getByRole('button', { name: 'Salva' }).click()
  await a.getByText('Attività UI').first().waitFor()
})

await step(a, 'carichi di lavoro + simulazione', async () => {
  await a.goto(`${B}/works`)
  await field(a, 'Dipendenti').click()
  for (const n of ['Paolo Manager', 'Giulia Consulente', 'Ugo Utente']) await a.getByRole('option', { name: n }).click()
  await a.getByRole('heading', { name: 'Carichi di lavoro' }).click()
  await field(a, 'Stato progetto').click()
  await a.getByRole('option', { name: 'Approvato/Confermato/In discussione' }).click()
  await a.getByLabel('Dal*', { exact: true }).fill(`${Y}-03-01`)
  await a.getByLabel('Al*', { exact: true }).fill(`${Y}-05-31`)
  await a.getByRole('button', { name: 'Settimana' }).click()
  await a.getByRole('button', { name: 'Aggiorna' }).click()
  await a.locator('table').getByText('Paolo Manager').waitFor()
  const sim = a.locator('.v-card', { hasText: 'Simulatore' })
  await sim.locator('.v-field').nth(0).click()
  await a.locator('.v-overlay--active [role="option"]').first().click()
  await sim.locator('.v-field').nth(1).click()
  await a.getByRole('option', { name: 'Ugo Utente' }).click()
  await a.getByRole('button', { name: 'Simula' }).click()
  await a.getByText('simulazione in corso').waitFor()
  await shot(a, 'carichi-simulazione')
  await a.getByRole('button', { name: 'Cancella' }).click()
})

await step(a, 'tranche → genera fattura', async () => {
  await a.goto(`${B}/projects/1?tab=tranche`)
  const row = a.locator('tr', { hasText: 'Report finale (quota sponsor)' })
  await row.waitFor()
  await row.getByRole('button').click()
  await a.getByText('Genera fattura', { exact: true }).click()
  await a.getByText('Nuova fattura attiva').waitFor()
  await a.getByLabel('Numero fattura*').fill('UI-1')
  await a.waitForTimeout(300)
  await shot(a, 'fattura-da-tranche')
  await a.getByRole('button', { name: 'Salva' }).click()
  await a.getByText('Registrazione fattura completata').waitFor()
  await row.getByText(/\d{2}\/\d{2}\/\d{4}/).first().waitFor()
})
await step(a, 'fattura passiva ripartita', async () => {
  await a.goto(`${B}/adminpassiveinvoices`)
  await a.getByRole('button', { name: 'Registra fattura' }).click()
  const dlg = a.locator('.v-dialog', { hasText: 'Nuova fattura passiva' })
  await field(dlg, 'Fornitore').click(); await a.locator('.v-overlay--active [role="option"]').first().click()
  await dlg.getByLabel('Numero*').fill('UI-P1')
  await dlg.getByLabel('Scadenza pagamento*').fill(`${Y}-12-31`)
  await field(dlg, 'Progetto').click(); await a.locator('.v-overlay--active [role="option"]').first().click()
  await dlg.getByLabel('Imponibile').fill('500')
  await dlg.getByText('Totale € 610,00', { exact: false }).or(dlg.getByText('610,00')).first().waitFor()
  await shot(a, 'fattura-passiva')
  await dlg.getByRole('button', { name: 'Salva' }).click()
  await a.getByText('Registrazione fattura completata').waitFor()
})
await step(a, 'dashboard', async () => {
  await a.goto(`${B}/`)
  await a.getByText('Win rate').waitFor(); await a.getByText('Carico medio del team').waitFor()
  await a.waitForTimeout(800)
  await shot(a, 'dashboard')
})

// --- dipendente: To Do, registrazione ore, completamento task ---
const g = await session('giulia@demo.local')
await step(g, 'registra ore', async () => {
  await g.goto(`${B}/todolist`)
  await g.getByText('giornate allocate').first().waitFor()
  await g.getByRole('button', { name: 'Report mie ore' }).click()
  await field(g, 'Task*').click()
  await g.getByRole('option').first().click()
  await g.getByRole('button', { name: 'Salva' }).click()
  await g.getByText(/report ore completata/i).waitFor({ timeout: 8000 })
  await g.getByText(/TOT ORE:/).first().waitFor()
  await shot(g, 'todolist')
})
await step(g, 'completa task (notifica ai responsabili)', async () => {
  await g.locator('.v-list-item', { hasText: `PR1${Y}` }).first().getByTitle('Completa task').click()
  await g.getByRole('button', { name: 'Completa', exact: true }).click()
  await g.getByText('Task completato').first().waitFor()
})
await step(g, 'scadenze task', async () => {
  await g.locator('.v-switch .v-selection-control__input').first().click()
  await g.getByText('Scadenze task').waitFor()
})
const p = await session('pm@demo.local')
await step(p, 'notifica ricevuta dal responsabile', async () => {
  await p.goto(`${B}/notification-center`)
  await p.getByText(/Task completato/).first().waitFor()
})

await step(p, 'admin senza budget: niente voce né pagina', async () => {
  await p.goto(`${B}/kpi`); await p.getByRole('heading', { name: 'Calcoli economici e KPI' }).waitFor()
  if (await p.getByRole('navigation').getByText('Budget', { exact: true }).count()) throw new Error('il menu mostra Budget')
  await p.goto(`${B}/budget`); await p.waitForTimeout(1500)
  if (new URL(p.url()).pathname === '/budget') throw new Error('/budget raggiungibile')
})

// --- utente semplice: menu e rotte riservate ---
const u = await session('utente@demo.local')
await step(u, 'utente: niente aree riservate', async () => {
  await u.goto(`${B}/projects`)
  await u.getByRole('heading', { name: 'Progetti' }).waitFor()
  for (const t of ['Amministrazione', 'Clienti', 'Fornitori', 'Valori economici', 'Dipendenti']) {
    if (await u.getByRole('navigation').getByText(t, { exact: true }).count()) throw new Error(`il menu mostra ${t}`)
  }
  await u.goto(`${B}/users`)
  await u.waitForTimeout(1500)
  if (new URL(u.url()).pathname === '/users') throw new Error('/users raggiungibile')
})

console.log(results.join('\n'))
console.log(`errori console: ${errors.length}`)
errors.forEach(e => console.log(`  ${e}`))
await browser.close()
process.exit(results.some(r => r.startsWith('FAIL')) || errors.length ? 1 : 0)
