export default defineEventHandler(async (event) => {
  await requireDashboard(event)
  const b = (await readBody(event)) ?? {}
  const [from, to] = yearRange(b.frommacchina, b.tomacchina)
  return ok(await dashboardMacchina(from, to, { onlyopen: b.onlyopenMacchina ?? 'A', internal: b.internalFilterMacchina ?? 'ALL' }))
})
