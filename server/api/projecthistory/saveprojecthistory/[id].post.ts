// "Crea storico" dal dettaglio progetto: istantanea manuale (tipo P, "Pulsante" nell'originale)
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const id = idParam(event)
  if (!(await canEditProject(me, id))) fail(403, 'Non puoi creare storici per questo progetto')
  await addHistory(id, me.id, 'P')
  return ok(null)
})
