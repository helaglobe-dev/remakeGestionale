// Svuota tutte le tabelle del database (senza cancellare il file, così funziona anche col server avviato).
import { createClient } from '@libsql/client'
const c = createClient({ url: process.env.DATABASE_URL ?? 'file:./data/helaproject.db' })
const t = (await c.execute(`select name from sqlite_master where type = 'table' and name not like 'sqlite_%' and name not like '__drizzle%'`)).rows.map(r => r.name)
// il PRAGMA non ha effetto dentro una transazione: va eseguito prima, sulla stessa connessione
await c.execute('PRAGMA foreign_keys = OFF')
for (const x of t) await c.execute(`delete from "${x}"`)
await c.execute('PRAGMA foreign_keys = ON')
console.log('tabelle svuotate:', t.length)
