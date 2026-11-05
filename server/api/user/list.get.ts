import { db, schema } from '../../db'

// Il superadmin riceve tutti i campi (gestione utenti); gli altri solo quelli necessari alle select.
export default defineEventHandler(async (event) => {
  const me = await requireUser(event)
  const rows = await db.select().from(schema.users).orderBy(schema.users.lastname, schema.users.firstname)
  return ok(rows.map(u => me.role === 'S'
    ? publicUser(u)
    : { id: u.id, firstname: u.firstname, lastname: u.lastname, acronym: u.acronym, activeuser: u.activeuser, usedindashboard: u.usedindashboard, userprofile_id: u.userprofileId }))
})
