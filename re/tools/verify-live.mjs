// Verifica in SOLA LETTURA sul gestionale reale delle ipotesi segnate [I][?] nella spec.
// - Usa solo: POST user/login, POST project/completelist (lettura con filtri), POST task/completelist (lettura).
// - NON usa GET project/get/<id> (aggiorna Project.modified).
// - Credenziali da ~/.config/helaglobe/bot.json, mai stampate. Il token resta in memoria.
// - Stampa solo statistiche aggregate e nomi di campi, non dati di clienti/progetti.
// Uso: node re/tools/verify-live.mjs [percorso-credenziali]
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

const BASE = 'https://projects.helaglobe.com/api/'
const credPath = process.argv[2] ?? path.join(os.homedir(), '.config', 'helaglobe', 'bot.json')

async function request(endpoint, init = {}) {
  const r = await fetch(BASE + endpoint, { ...init, signal: AbortSignal.timeout(60000) })
  if (!r.ok) throw new Error(`${endpoint}: HTTP ${r.status}`)
  const body = await r.json()
  if (body.success === false || body.data == null) throw new Error(`${endpoint}: risposta applicativa non valida`)
  return body.data
}

const cred = JSON.parse(await fs.readFile(credPath, 'utf8'))
const email = cred.email ?? cred.account
if (email !== 'bot@helaglobe.com' || !cred.password) throw new Error('File credenziali bot non valido')
const login = await request('user/login', {
  method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ email, password: cred.password }),
})
const token = login.user?.token
if (String(login.user?.id) !== '30' || !token?.startsWith('30-')) throw new Error('Identità bot non verificata')
const post = (ep, body) => request(ep, {
  method: 'POST',
  headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
})

const report = { fetchedAt: new Date().toISOString(), checks: {} }

// 1. Forma della risposta di completelist (solo nomi dei campi)
const projects = await post('project/completelist', { client: 0, status: [], openstatus: 0, responsabile: null, from: null, to: null })
report.projectCount = projects.length
report.wrapperKeys = [...new Set(projects.flatMap(r => Object.keys(r)))].sort()
report.projectFields = [...new Set(projects.flatMap(r => Object.keys(r.Project ?? {})))].sort()

// 2. Ipotesi sul totale: _totaleprogetto vs totaleproposta ± incremento/sconto
const n = v => Number(v ?? 0)
const variants = {
  'incr% su base, sconto% su (base+incr)': p => {
    const b = n(p.totaleproposta); const i = p.tipoincrementoproposta === 'V' ? n(p.incrementoproposta) : b * n(p.incrementoproposta) / 100
    const s = p.tiposcontoproposta === 'V' ? n(p.scontoproposta) : (b + i) * n(p.scontoproposta) / 100
    return b + i - s
  },
  'incr% e sconto% entrambi sulla base': p => {
    const b = n(p.totaleproposta); const i = p.tipoincrementoproposta === 'V' ? n(p.incrementoproposta) : b * n(p.incrementoproposta) / 100
    const s = p.tiposcontoproposta === 'V' ? n(p.scontoproposta) : b * n(p.scontoproposta) / 100
    return b + i - s
  },
  'base = totalepropostamodified, poi incr/sconto': p => {
    const b = n(p.totalepropostamodified) || n(p.totaleproposta); const i = p.tipoincrementoproposta === 'V' ? n(p.incrementoproposta) : b * n(p.incrementoproposta) / 100
    const s = p.tiposcontoproposta === 'V' ? n(p.scontoproposta) : (b + i) * n(p.scontoproposta) / 100
    return b + i - s
  },
}
const withAdj = projects.map(r => r.Project).filter(p => n(p.incrementoproposta) || n(p.scontoproposta))
report.checks.totale = {
  progettiConIncrementoOSconto: withAdj.length,
  matchPerVariante: Object.fromEntries(Object.entries(variants).map(([k, f]) =>
    [k, withAdj.filter(p => Math.abs(f(p) - n(p._totaleprogetto)) < 0.02).length])),
  senzaAggiustamenti_totaleUgualeBase: projects.map(r => r.Project)
    .filter(p => !n(p.incrementoproposta) && !n(p.scontoproposta))
    .filter(p => Math.abs(n(p._totaleprogetto) - n(p.totaleproposta)) < 0.02).length,
}

// 3. totaleproposta = Σ price task? (campione di 15 progetti con task, lettura via task/completelist)
const sample = projects.map(r => r.Project).filter(p => n(p.totaleproposta) > 0).slice(0, 15)
let sumMatch = 0; let costMatch = 0
const taskKeys = new Set()
for (const p of sample) {
  const rows = await post('task/completelist', { alsodeleted: 0, project_id: String(p.id), statotask: [], users: [], userprofiles: [], changerequest: [], intest: 0 })
  rows.forEach(r => Object.keys(r.Task ?? {}).forEach(k => taskKeys.add(k)))
  const price = rows.reduce((a, r) => a + n(r.Task.price), 0)
  const cost = rows.reduce((a, r) => a + n(r.Task.cost), 0)
  if (Math.abs(price - n(p.totaleproposta)) < 0.02) sumMatch++
  if (Math.abs(cost - n(p.costoproposta)) < 0.02) costMatch++
}
report.checks.sommaTask = { campione: sample.length, totalepropostaUgualeSommaPrezzi: sumMatch, costopropostaUgualeSommaCosti: costMatch }
report.taskFields = [...taskKeys].sort()

const out = path.resolve('re/live-verify-report.json')
await fs.writeFile(out, JSON.stringify(report, null, 2))
console.log(JSON.stringify(report.checks, null, 2))
console.log(`Report (solo aggregati e nomi campi): ${out}`)
