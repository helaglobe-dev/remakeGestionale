// Helper per verifiche in SOLA LETTURA sul gestionale reale. Non stampa mai credenziali o token.
// Regole: solo endpoint di lettura; mai GET project/get/<id> (aggiorna Project.modified).
import fs from 'node:fs/promises'

const BASE = 'https://projects.helaglobe.com/api/'
const CRED = process.env.HP_CRED
if (!CRED) throw new Error('Imposta HP_CRED con il percorso del file credenziali del bot')
const FORBIDDEN = [/^project\/get\//, /createedit/, /delete/, /save/, /change/, /completetask/, /update/, /markAsRead/, /forceLogin/, /salvaCampo/, /closeall/, /mergefp/, /createmultiple/]

async function req(ep, init = {}) {
  if (FORBIDDEN.some(r => r.test(ep))) throw new Error(`endpoint non ammesso in sola lettura: ${ep}`)
  const r = await fetch(BASE + ep, { ...init, signal: AbortSignal.timeout(120000) })
  if (!r.ok) throw new Error(`${ep}: HTTP ${r.status}`)
  const b = await r.json()
  if (b.data == null) throw new Error(`${ep}: risposta senza data`)
  return b.data
}
const c = JSON.parse(await fs.readFile(CRED, 'utf8'))
const login = await fetch(BASE + 'user/login', { method: 'POST', headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ email: c.account ?? c.email, password: c.password }) }).then(r => r.json())
const token = login.data?.user?.token
if (!token?.startsWith('30-')) throw new Error('identità bot non verificata')
const H = { authorization: `Bearer ${token}`, 'content-type': 'application/json' }
export const get = ep => req(ep, { headers: H })
export const post = (ep, body) => req(ep, { method: 'POST', headers: H, body: JSON.stringify(body) })
export const n = v => Number(v ?? 0)
export const eq = (a, b, tol = 0.02) => Math.abs(n(a) - n(b)) < tol
export const counter = () => { const o = {}; const inc = (k, by = 1) => (o[k] = (o[k] ?? 0) + by); return { o, inc } }
