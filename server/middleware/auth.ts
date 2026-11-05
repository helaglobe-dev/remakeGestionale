// Tutte le route /api richiedono un token, tranne il login.
const PUBLIC = new Set(['/api/user/login', '/api/user/sendemailrecoverypassword', '/api/user/reset_password', '/api/user/confirmuser', '/api/user/set_password'])

export default defineEventHandler(async (event) => {
  const path = event.path.split('?')[0] ?? ''
  if (!path.startsWith('/api/') || PUBLIC.has(path)) return
  const user = await getSessionUser(event)
  if (!user) fail(401, 'Sessione scaduta o non valida')
  event.context.user = user
})
