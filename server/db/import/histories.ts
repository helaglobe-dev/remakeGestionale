// Storici di progetto originali (tabella projecthistories): tipo, vecchio/nuovo valore e istantanea JSON importati così come sono,
// tolti i dati sensibili degli utenti contenuti nell'istantanea (hash password, codici di verifica).
type Row = Record<string, any>
const STATI = ['L', 'S', 'I', 'C', 'A', 'R', 'H', 'D']
const TIPI = ['C', 'S', 'A', 'O', 'P']
const SENSITIVE = ['password', 'code', 'verifyemail', 'reminderdt']

function sanitize(json: string | null): { text: string | null, status: string | null } {
  if (!json) return { text: null, status: null }
  let snap: any
  try { snap = JSON.parse(json) }
  catch { return { text: null, status: null } }
  // gli utenti compaiono a più livelli (task, ore annidate…): pulizia ricorsiva di ogni oggetto "User"
  const walk = (v: any, inUser = false) => {
    if (!v || typeof v !== 'object') return
    if (inUser && !Array.isArray(v)) for (const k of SENSITIVE) delete v[k]
    for (const [k, c] of Object.entries(v)) walk(c, k === 'User')
  }
  walk(snap)
  const p = Array.isArray(snap?.Project) ? snap.Project[0] : snap?.Project
  return { text: JSON.stringify(snap), status: p?.status ?? null }
}

export function mapHistories(rows: Row[], projectIds: Set<number>, userIds: Set<number>, dt: (v: any) => string | null) {
  return rows
    .filter(h => projectIds.has(h.project_id) && TIPI.includes(h.type))
    .map((h) => {
      const { text, status } = sanitize(h.history)
      // cambio stato senza newvalue (21 voci): il nuovo stato è quello dell'istantanea (= newvalue in 245/245 voci)
      const newvalue = h.type === 'S' && !STATI.includes(h.newvalue) ? status : (h.newvalue ?? null)
      return {
        id: h.id, projectId: h.project_id, userId: userIds.has(h.user_id) ? h.user_id : null, type: h.type,
        oldvalue: h.oldvalue ?? null, newvalue, history: text, status: h.status === 'D' ? 'D' as const : 'A' as const, created: dt(h.created) ?? dt(h.modified)!,
      }
    })
}
