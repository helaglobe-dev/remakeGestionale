import type { H3Event } from 'h3'

const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS'])

function allowedOrigins(event: H3Event) {
  const allowed = new Set<string>()
  const configured = process.env.APP_URL
  if (configured) {
    try {
      allowed.add(new URL(configured).origin)
      return allowed
    }
    catch { console.error('APP_URL non è un URL valido') }
  }
  // Fallback per sviluppo e test locali; in produzione APP_URL è obbligatorio nel Compose.
  const host = getHeader(event, 'x-forwarded-host') ?? getHeader(event, 'host')
  const proto = getHeader(event, 'x-forwarded-proto') ?? 'http'
  if (host) allowed.add(`${proto}://${host}`)
  return allowed
}

export default defineEventHandler((event) => {
  setResponseHeader(event, 'X-Content-Type-Options', 'nosniff')
  setResponseHeader(event, 'X-Frame-Options', 'DENY')
  setResponseHeader(event, 'Referrer-Policy', 'same-origin')
  setResponseHeader(event, 'Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()')
  if ((getHeader(event, 'x-forwarded-proto') ?? '') === 'https') {
    setResponseHeader(event, 'Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  }

  const method = event.method.toUpperCase()
  if (!event.path.startsWith('/api/') || SAFE_METHODS.has(method)) return

  const origin = getHeader(event, 'origin')
  if (origin && !allowedOrigins(event).has(origin)) fail(403, 'Origine della richiesta non autorizzata')

  // Un browser autenticato tramite cookie deve sempre inviare Origin sulle scritture.
  // I client API con Bearer restano supportati per test e automazioni controllate.
  const cookieSession = getCookie(event, SESSION_COOKIE)
  const bearer = getHeader(event, 'authorization')?.startsWith('Bearer ')
  if (cookieSession && !bearer && !origin) fail(403, 'Origine della richiesta mancante')
})
