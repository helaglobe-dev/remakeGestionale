export default defineEventHandler(async (event) => {
  await requireDashboard(event)
  const b = (await readBody(event)) ?? {}
  const [from, to] = yearRange(b.from, b.to)
  return ok(await dashboardEconomico(from, to, { onlyopen: b.onlyopenEconomico ?? 'A', internal: b.internalFilterEconomico ?? 'ALL' }))
})
