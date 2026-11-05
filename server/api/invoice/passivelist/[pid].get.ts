export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const pid = Number(getRouterParam(event, 'pid'))
  if (!Number.isInteger(pid) || pid <= 0) fail(400, 'Progetto non valido')
  await requireProjectFinance(me, pid)
  return ok(await listPassiveInvoices({ projectId: pid }))
})
