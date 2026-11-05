import { eq } from 'drizzle-orm'
import { db, schema } from '../../../db'

// Totale progetto e tipo pagamento (dal cliente) per il dialog tranche
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const pid = Number(getRouterParam(event, 'pid'))
  await requireProjectFinance(me, pid)
  const p = await getProject(pid)
  if (!p) fail(404, 'Progetto non trovato')
  const [c] = p.client_id ? await db.select().from(schema.clients).where(eq(schema.clients.id, p.client_id)) : []
  return ok({ totalep: p._totaleprogetto, newtotaleproposta: p.newtotaleproposta, paymenttype: c?.paymenttype ?? null })
})
