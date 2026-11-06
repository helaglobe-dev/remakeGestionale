import test from 'node:test'
import assert from 'node:assert/strict'

const API = process.env.API_BASE ?? 'http://localhost:3002/api/'
const ORIGIN = new URL(API).origin

test('health check pubblico e header di sicurezza', async () => {
  const r = await fetch(`${API}health`)
  assert.equal(r.status, 200)
  assert.equal((await r.json()).status, 'ok')
  assert.equal(r.headers.get('x-content-type-options'), 'nosniff')
  assert.equal(r.headers.get('x-frame-options'), 'DENY')
})

test('sessione browser HttpOnly e protezione origine', async () => {
  const login = await fetch(`${API}user/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: ORIGIN },
    body: JSON.stringify({ email: 'admin@demo.local', password: process.env.SEED_PASSWORD ?? 'demo1234' }),
  })
  assert.equal(login.status, 200)
  const setCookie = login.headers.get('set-cookie') ?? ''
  assert.match(setCookie, /hp_session=/)
  assert.match(setCookie, /HttpOnly/i)
  assert.match(setCookie, /SameSite=Lax/i)
  const cookie = setCookie.split(';', 1)[0]

  const me = await fetch(`${API}user/me`, { headers: { cookie } })
  assert.equal(me.status, 200)
  assert.equal((await me.json()).data.email, 'admin@demo.local')

  const blocked = await fetch(`${API}notification/markAsRead`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', cookie, origin: 'https://example.invalid' },
    body: JSON.stringify({ all: true }),
  })
  assert.equal(blocked.status, 403)

  const allowed = await fetch(`${API}notification/markAsRead`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', cookie, origin: ORIGIN },
    body: JSON.stringify({ all: true }),
  })
  assert.equal(allowed.status, 200)
})
