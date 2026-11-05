import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from './schema'

const client = createClient({ url: process.env.DATABASE_URL ?? 'file:./data/helaproject.db' })
// Le richieste sul client locale sono serializzate: il PRAGMA viene eseguito prima di qualsiasi query.
client.execute('PRAGMA foreign_keys = ON').catch(e => console.error('PRAGMA foreign_keys fallito', e))

export const db = drizzle(client, { schema })
export { schema }
