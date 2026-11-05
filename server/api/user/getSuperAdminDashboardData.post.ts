// Sempre visibile: alert se il giorno lavorativo precedente mancano ore (manuale).
export default defineEventHandler(async event => ok(await hoursAlert((await requireUser(event)).id)))
