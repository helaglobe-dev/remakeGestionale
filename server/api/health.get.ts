import { sql } from 'drizzle-orm'
import { db } from '../db'

export default defineEventHandler(async () => {
  await db.run(sql`select 1`)
  return { status: 'ok', timestamp: new Date().toISOString() }
})
