export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const [i] = await listActiveInvoices({ id: idParam(event) })
  if (!i) fail(404, 'Fattura non trovata')
  await requireProjectFinance(me, i.project_id)
  return ok(i)
})
