export default defineEventHandler(async (event) => {
  const p = await getProject(idParam(event))
  if (!p) fail(404, 'Progetto non trovato')
  return ok(p)
})
