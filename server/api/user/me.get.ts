export default defineEventHandler(async event => ok(await requireUser(event)))
