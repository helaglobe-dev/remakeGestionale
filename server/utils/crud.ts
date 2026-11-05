// CRUD generico per le anagrafiche: stessi percorsi e formato dell'API originale
//   GET  <res>/list            → { success, data: [{ <Wrapper>: {...} }] }
//   GET  <res>/get/<id>        → { success, data: {...} }
//   POST <res>/createedit      → body { <Wrapper>: {...} } (id 0 = nuovo)
//   POST <res>/delete/<id>
// Ogni risorsa dichiara schema Zod, mappatura DB e permessi; le route restano file di una riga.
import type { H3Event } from 'h3'
import { eq, asc, desc, type SQL } from 'drizzle-orm'
import type { SQLiteTable, SQLiteColumn } from 'drizzle-orm/sqlite-core'
import { z } from 'zod'
import { db } from '../db'
import type { SessionUser } from './auth'

type Row = Record<string, any>
type Perm = (user: SessionUser) => boolean

export type CrudConfig<I extends z.ZodTypeAny> = {
  table: SQLiteTable & { id: SQLiteColumn }
  /** Chiave del wrapper CakePHP, es. "Client" (usata in scrittura e, se non flat, in lettura) */
  wrapper: string
  /** Elenco piatto [{...}] invece di [{Wrapper:{...}}], come alcune liste dell'originale */
  flat?: boolean
  /** Arricchisce l'elenco (es. totali calcolati) */
  decorate?: (rows: Row[]) => Promise<Row[]>
  /** Nome leggibile per i messaggi, es. "cliente" */
  label: string
  input: I
  /** Da input validato a valori DB (default: identità) */
  toDb?: (input: z.infer<I>, ctx: { user: SessionUser, existing?: Row }) => Row | Promise<Row>
  /** Da riga DB a oggetto API (default: identità) */
  fromDb?: (row: Row) => Row
  orderBy?: SQLiteColumn
  orderDir?: 'asc' | 'desc'
  where?: (event: H3Event) => SQL | undefined
  canRead?: Perm
  canWrite?: Perm
  /** Controlli aggiuntivi prima del salvataggio (unicità, regole di business) */
  validate?: (values: Row, ctx: { id: number, user: SessionUser }) => void | Promise<void>
  /** Se presente, l'eliminazione imposta questo campo invece di cancellare */
  softDelete?: { column: string, value: unknown }
  /** Impedisce l'eliminazione se il record è usato (ritorna un messaggio) */
  inUse?: (id: number) => Promise<string | null>
}

const always: Perm = () => true

function guard(event: H3Event, perm: Perm | undefined) {
  const user = event.context.user as SessionUser | undefined
  if (!user) fail(401, 'Sessione scaduta o non valida')
  if (!(perm ?? always)(user)) fail(403, 'Non hai i permessi per questa operazione')
  return user
}

export function crud<I extends z.ZodTypeAny>(cfg: CrudConfig<I>) {
  const t = cfg.table as any
  const fromDb = cfg.fromDb ?? ((r: Row) => r)
  const byId = async (id: number) => (await db.select().from(t).where(eq(t.id, id)))[0] as Row | undefined

  return {
    list: defineEventHandler(async (event) => {
      guard(event, cfg.canRead)
      const order = cfg.orderBy ? (cfg.orderDir === 'desc' ? desc(cfg.orderBy) : asc(cfg.orderBy)) : asc(t.id)
      let rows = (await db.select().from(t).where(cfg.where?.(event)).orderBy(order)).map(fromDb)
      if (cfg.decorate) rows = await cfg.decorate(rows)
      return ok(cfg.flat ? rows : rows.map(r => ({ [cfg.wrapper]: r })))
    }),

    get: defineEventHandler(async (event) => {
      guard(event, cfg.canRead)
      const row = await byId(idParam(event))
      if (!row) fail(404, `${cfg.label[0]!.toUpperCase()}${cfg.label.slice(1)} non trovato`)
      return ok(fromDb(row))
    }),

    createedit: defineEventHandler(async (event) => {
      const user = guard(event, cfg.canWrite)
      const body = await readValid(event, z.object({ [cfg.wrapper]: cfg.input }))
      const input = (body as any)[cfg.wrapper] as z.infer<I> & { id?: number }
      const id = Number(input.id ?? 0)
      const existing = id ? await byId(id) : undefined
      if (id && !existing) fail(404, `${cfg.label} non trovato`)
      const { id: _drop, ...values } = await (cfg.toDb ?? ((x: any) => x))(input, { user, existing })
      await cfg.validate?.(values, { id, user })
      if ('modified' in t) values.modified = new Date().toISOString()
      let savedId = id
      if (id) await db.update(t).set(values).where(eq(t.id, id))
      else savedId = ((await db.insert(t).values(values).returning({ id: t.id })) as { id: number }[])[0]!.id
      return ok(fromDb((await byId(savedId))!))
    }),

    remove: defineEventHandler(async (event) => {
      guard(event, cfg.canWrite)
      const id = idParam(event)
      if (!(await byId(id))) fail(404, `${cfg.label} non trovato`)
      const blocked = await cfg.inUse?.(id)
      if (blocked) fail(409, blocked)
      if (cfg.softDelete) await db.update(t).set({ [cfg.softDelete.column]: cfg.softDelete.value }).where(eq(t.id, id))
      else await db.delete(t).where(eq(t.id, id))
      return ok({ id })
    }),
  }
}

// Helper Zod riusabili
export const zId = z.coerce.number().int().min(0).default(0)
export const zText = (max = 255) => z.string().trim().max(max).nullish().transform(v => (v ? v : null))
export const zReq = (max = 255) => z.string().trim().min(1, 'obbligatorio').max(max)
export const zDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'data non valida').nullish().transform(v => v ?? null)
export const zFlag = z.union([z.boolean(), z.coerce.number()]).transform(v => (v ? 1 : 0)).default(0)
export const zFk = z.coerce.number().int().min(0).nullish().transform(v => (v ? v : null))
export const zMoney = z.coerce.number().min(0).default(0)

export const isSuper: Perm = u => u.role === 'S'
export const isAdminOrSuper: Perm = u => u.role === 'S' || u.role === 'A'
