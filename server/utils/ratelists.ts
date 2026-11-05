// Listini orari annuali: stessa API per prezzi profilo (upprice), costi profilo (upcost) e costi dipendente (cost).
//   POST <res>/list {year}                    → [{id, userprofile_id|user_id, year, hcost}]
//   POST <res>/savecost {Cost:{id?, hcost, year, user_id}}   (user_id = id profilo per upprice/upcost, come l'originale)
//   GET  <res>/get/<id>,  POST <res>/delete/<id>
import { and, eq, ne } from 'drizzle-orm'
import { z } from 'zod'
import { db, schema } from '../db'

type Kind = 'upprice' | 'upcost' | 'cost'
const conf = {
  upprice: { table: schema.profileprices, owner: 'userprofileId', key: 'userprofile_id', label: 'prezzo orario' },
  upcost: { table: schema.profilecosts, owner: 'userprofileId', key: 'userprofile_id', label: 'costo orario' },
  cost: { table: schema.usercosts, owner: 'userId', key: 'user_id', label: 'costo orario' },
} as const

const Save = z.object({ Cost: z.object({
  id: zId,
  hcost: z.coerce.number().min(0, 'non può essere negativo').max(10000),
  year: z.coerce.number().int().min(2000).max(2100),
  user_id: z.coerce.number().int().positive(),
}) })

export function rateList(kind: Kind) {
  const { table, owner, key, label } = conf[kind]
  const t = table as any
  const out = (r: any) => ({ id: r.id, [key]: r[owner], year: r.year, hcost: r.hcost })
  const superOnly = (event: any) => {
    const u = event.context.user
    if (u?.role !== 'S') fail(403, 'Non hai i permessi per questa operazione')
  }
  return {
    list: defineEventHandler(async (event) => {
      superOnly(event)
      const { year } = await readValid(event, z.object({ year: z.coerce.number().int(), user_id: z.any().optional() }))
      return ok((await db.select().from(t).where(eq(t.year, year))).map(out))
    }),
    get: defineEventHandler(async (event) => {
      superOnly(event)
      const [r] = await db.select().from(t).where(eq(t.id, idParam(event)))
      if (!r) fail(404, `${label} non trovato`)
      return ok(out(r))
    }),
    save: defineEventHandler(async (event) => {
      superOnly(event)
      const { Cost: c } = await readValid(event, Save)
      const [dup] = await db.select({ id: t.id }).from(t).where(and(eq(t[owner], c.user_id), eq(t.year, c.year), ne(t.id, c.id)))
      if (dup) fail(409, `Esiste già un ${label} per questo anno`)
      if (c.id) await db.update(t).set({ hcost: c.hcost }).where(eq(t.id, c.id))
      else await db.insert(t).values({ [owner]: c.user_id, year: c.year, hcost: c.hcost })
      return ok(null)
    }),
    remove: defineEventHandler(async (event) => {
      superOnly(event)
      await db.delete(t).where(eq(t.id, idParam(event)))
      return ok(null)
    }),
  }
}
