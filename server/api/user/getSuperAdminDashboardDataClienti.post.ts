export default defineEventHandler(async (event) => {
  await requireDashboard(event)
  const b = (await readBody(event)) ?? {}
  return ok(await dashboardClienti({ onlyopen: b.onlyopenClienti ?? 'O', internal: b.internalFilterClienti ?? 0 }))
})
