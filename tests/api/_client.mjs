// Client minimale per i test API. Richiede il server avviato e il DB demo (npm run db:reset).
export const BASE = process.env.API_BASE ?? 'http://localhost:3002/api/' // server di test: npm run test:server

export async function call(path, { token, body, method } = {}) {
  const r = await fetch(BASE + path, {
    method: method ?? (body !== undefined ? 'POST' : 'GET'),
    headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const j = await r.json().catch(() => null)
  return { status: r.status, data: j?.data, error: j?.data?.errors?.title ?? j?.message }
}

const tokens = {}
export async function login(email) {
  tokens[email] ??= (await call('user/login', { body: { email, password: process.env.SEED_PASSWORD ?? 'demo1234' } })).data.user.token
  return tokens[email]
}
export const as = {
  admin: () => login('admin@demo.local'), pm: () => login('pm@demo.local'),
  ugo: () => login('utente@demo.local'), giulia: () => login('giulia@demo.local'),
}
export const Y = new Date().getFullYear()
export async function newCode(token) { return (await call('project/getNewProjectName', { token })).data[0] }
export const baseProject = code => ({ code, name: 'Test', status: 'S', openstatus: 'A', splitpercent: 100, splityear: Y, splitpercent1: 0, splityear1: Y + 1 })
