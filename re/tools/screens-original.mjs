// Screenshot dell'interfaccia originale per allineare lo stile. SOLA LETTURA:
// il browser può chiamare solo endpoint di lettura in allowlist; tutto il resto dell'API viene bloccato.
import { chromium } from 'playwright-core'
import fs from 'node:fs/promises'
import { homedir } from 'node:os'
import { readdirSync } from 'node:fs'

const OUT = process.argv[2]
const cred = JSON.parse(await fs.readFile('/mnt/c/Users/nicola.lorenzini/.openclaw/credentials/bot_helaglobe.json', 'utf8'))
const base = `${homedir()}/.cache/ms-playwright`
const chrome = `${base}/${readdirSync(base).filter(d => /^chromium-\d+$/.test(d)).sort().at(-1)}/chrome-linux64/chrome`
const ALLOW_POST = [/user\/login$/, /project\/completelist$/, /task\/completelist$/, /user\/getSuperAdminDashboardData/, /hour\/list$/,
  /task\/getmytasks$/, /task\/getscadenze$/, /holiday\/isholidaydate/, /project\/activelist$/, /invoice\/activelist$/, /invoice\/kpi$/]
const DENY_GET = [/project\/get\//, /delete/, /forceLogin/, /markAsRead/]
const blocked = []
const browser = await chromium.launch({ executablePath: chrome })
const page = await browser.newPage({ viewport: { width: 1500, height: 950 }, locale: 'it-IT' })
await page.route('**/api/**', (route) => {
  const r = route.request(); const url = r.url()
  const ok = r.method() === 'GET' ? !DENY_GET.some(x => x.test(url)) : r.method() === 'POST' && ALLOW_POST.some(x => x.test(url))
  if (ok) return route.continue()
  blocked.push(`${r.method()} ${url.replace(/^.*\/api\//, '')}`)
  return route.abort()
})
await page.goto('https://projects.helaglobe.com/main/login')
await page.waitForTimeout(2500)
await page.screenshot({ path: `${OUT}/orig-login.png` })
await page.locator('input[type="email"], input[type="text"]').first().fill(cred.account ?? cred.email)
await page.locator('input[type="password"]').first().fill(cred.password)
await page.keyboard.press('Enter')
await page.waitForURL(u => !u.pathname.includes('login'), { timeout: 30000 })
for (const [path, name] of [['/main/', 'dashboard'], ['/main/projects', 'progetti'], ['/main/clients', 'clienti'], ['/main/todolist', 'todolist'], ['/main/adminactiveinvoices', 'fatture-attive']]) {
  await page.goto(`https://projects.helaglobe.com${path}`)
  await page.waitForTimeout(4000)
  await page.screenshot({ path: `${OUT}/orig-${name}.png` })
}
// menu utente aperto e una voce di gruppo del menu laterale espansa
await browser.close()
console.log('screenshot salvati; chiamate bloccate:', blocked.length ? [...new Set(blocked)].join(' | ') : 'nessuna')
