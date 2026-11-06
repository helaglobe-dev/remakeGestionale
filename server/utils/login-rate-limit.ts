import type { H3Event } from 'h3'

type Bucket = { failures: number, resetAt: number }

const WINDOW_MS = 15 * 60_000
const MAX_FAILURES = 8
const MAX_BUCKETS = 5_000
const buckets = new Map<string, Bucket>()

function clientIp(event: H3Event) {
  return getHeader(event, 'cf-connecting-ip')
    ?? getRequestIP(event, { xForwardedFor: true })
    ?? 'unknown'
}

function key(event: H3Event, email: string) {
  return `${clientIp(event)}|${email.trim().toLowerCase()}`
}

function prune(now: number) {
  for (const [k, bucket] of buckets) if (bucket.resetAt <= now) buckets.delete(k)
  if (buckets.size >= MAX_BUCKETS) buckets.delete(buckets.keys().next().value as string)
}

export function assertLoginAllowed(event: H3Event, email: string) {
  const now = Date.now()
  prune(now)
  const bucket = buckets.get(key(event, email))
  if (!bucket || bucket.failures < MAX_FAILURES) return
  setResponseHeader(event, 'Retry-After', Math.ceil((bucket.resetAt - now) / 1000))
  fail(429, 'Troppi tentativi di accesso. Riprova tra qualche minuto')
}

export function recordLoginFailure(event: H3Event, email: string) {
  const now = Date.now()
  const k = key(event, email)
  const current = buckets.get(k)
  buckets.set(k, current && current.resetAt > now
    ? { ...current, failures: current.failures + 1 }
    : { failures: 1, resetAt: now + WINDOW_MS })
}

export function clearLoginFailures(event: H3Event, email: string) {
  buckets.delete(key(event, email))
}
