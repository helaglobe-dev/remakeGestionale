import { z } from 'zod'
import { and, eq } from 'drizzle-orm'
import { db, schema } from '../../db'

const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'data obbligatoria')
const Body = z.object({ tranche: z.object({
  id: zId, project_id: z.coerce.number().int().positive(), sponsor_id: zFk,
  type: z.enum(['A', 'I', 'S']).default('A'),
  total: z.coerce.number().min(0).default(0), vat: z.coerce.number().min(0).default(0),
  previewdate: day, paymentdate: day,
  description: zText(255), note: zText(5000),
}) })

export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  requireInvoiceWrite(me)
  const { tranche: t } = await readValid(event, Body)
  if (t.paymentdate < t.previewdate) fail(422, 'La data prevista di pagamento precede quella di emissione')
  const [p] = await db.select().from(schema.projects).where(eq(schema.projects.id, t.project_id))
  if (!p) fail(404, 'Progetto non trovato')
  if (t.sponsor_id) {
    const [sp] = await db.select().from(schema.sponsors).where(and(eq(schema.sponsors.id, t.sponsor_id), eq(schema.sponsors.projectId, t.project_id)))
    if (!sp) fail(422, 'Lo sponsor non appartiene a questo progetto')
  }
  if (!t.id && !(p.status === 'A' && p.openstatus === 'A')) fail(422, 'Le tranche si creano solo su progetti approvati e aperti')
  const values = { projectId: t.project_id, sponsorId: t.sponsor_id, type: t.type, total: t.total, vat: t.vat,
    previewdate: t.previewdate, paymentdate: t.paymentdate, description: t.description, note: t.note, modified: new Date().toISOString() }
  let id = t.id
  if (id) {
    const res = await db.update(schema.paymenttranches).set(values).where(eq(schema.paymenttranches.id, id))
    if (!res.rowsAffected) fail(404, 'Tranche non trovata')
  }
  else id = (await db.insert(schema.paymenttranches).values(values).returning({ id: schema.paymenttranches.id }))[0]!.id
  return ok((await listTranches({ ids: [id] }))[0])
})
