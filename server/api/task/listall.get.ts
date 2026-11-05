// Task su cui l'utente può registrare ore (form "Report ore").
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const rows = await selectableTasks(me.id)
  return ok(rows.map(({ task: t, project: p, profile }) => ({
    Task: { id: t.id, shortname: t.shortname, status: t.status },
    Project: { id: p.id, code: p.code, name: p.name, client_id: p.clientId ?? 0, type: p.type },
    Userprofile: { id: profile?.id ?? 0, code: profile?.code ?? '' },
  })))
})
