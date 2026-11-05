export default defineEventHandler(async (event) => {
  await requireDashboard(event)
  const b = (await readBody(event)) ?? {}
  return ok(await dashboardPerformance({ onlyopen: b.onlyopen ?? 'O', internal: b.internalFilter ?? 'ALL' }))
})
