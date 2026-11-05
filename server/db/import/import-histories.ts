// Reimporta solo gli storici di progetto dal dump già convertito (data/import), senza toccare le altre tabelle.
// Uso: node server/db/import/import-histories.ts data/import
import fs from 'node:fs'
import path from 'node:path'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from '../schema.ts'
import { mapHistories } from './histories.ts'

const dir = process.argv[2] ?? 'data/import'
const DB = process.env.DATABASE_URL ?? 'file:./data/helaproject.db'
const d = JSON.parse(fs.readFileSync(path.join(dir, 'projecthistories.json'), 'utf8'))
const rows = d.rows.map((r: unknown[]) => Object.fromEntries(d.columns.map((c: string, i: number) => [c, r[i]])))
const client = createClient({ url: DB })
const db = drizzle(client, { schema })
const projectIds = new Set((await client.execute('select id from projects')).rows.map(r => Number(r.id)))
const userIds = new Set((await client.execute('select id from users')).rows.map(r => Number(r.id)))
const dt = (v: any) => (v ? String(v).replace('T', ' ').slice(0, 19) : null)
const list = mapHistories(rows, projectIds, userIds, dt)
await client.execute('delete from projecthistories')
try {
  for (let i = 0; i < list.length; i += 100) await db.insert(schema.projecthistories).values(list.slice(i, i + 100))
}
catch (e: any) {
  // niente parametri nel messaggio: contengono le istantanee
  console.error('Importazione fallita:', e?.cause?.message ?? 'errore sconosciuto')
  process.exit(1)
}
console.log(`voci di storico importate: ${list.length}`)
