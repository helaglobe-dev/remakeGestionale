import type { H3Event } from 'h3'

/** Sezioni economiche della dashboard: solo con "Visualizza dashboard". */
export async function requireDashboard(event: H3Event) {
  const me = await requireUser(event)
  if (me.viewdashboard !== 1) fail(403, 'Non hai i permessi per la dashboard')
  return me
}
export const yearRange = (from?: string | null, to?: string | null) => {
  const y = new Date().getFullYear()
  return [from || `${y}-01-01`, to || `${y}-12-31`] as const
}
