export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const [i] = await listPassiveInvoices({ id: idParam(event) })
  if (!i) fail(404, 'Fattura non trovata')
  // visibile a chi gestisce le fatture o a chi può vedere almeno uno dei progetti delle righe
  if (me.hasinvoice !== 1) {
    const allowed = await Promise.all(i.tasks.filter(r => r.project_id).map(r => canReadProjectFinance(me, r.project_id)))
    if (!allowed.some(Boolean)) fail(403, 'Non hai i permessi per questa fattura')
  }
  return ok({ ...i, rows: i.tasks })
})
