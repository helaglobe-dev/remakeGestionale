import { db, schema } from '../../db'

export default defineEventHandler(async () => ok(await db.select().from(schema.banks).orderBy(schema.banks.name)))
