import { ne } from 'drizzle-orm'
import { db, schema } from '../../db'

// Elenco leggero di tutti i progetti (filtri delle altre pagine)
export default defineEventHandler(async () => {
  const p = schema.projects
  return ok(await db.select({ id: p.id, code: p.code, name: p.name, status: p.status, openstatus: p.openstatus, client_id: p.clientId })
    .from(p).where(ne(p.status, 'D')).orderBy(p.code))
})
