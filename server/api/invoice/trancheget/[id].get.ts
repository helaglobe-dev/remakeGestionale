export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const [t] = await listTranches({ ids: [idParam(event)] })
  if (!t) fail(404, 'Tranche non trovata')
  await requireProjectFinance(me, t.project_id)
  return ok(t)
})
