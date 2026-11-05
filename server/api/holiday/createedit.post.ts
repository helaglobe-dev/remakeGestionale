import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { db, schema } from '../../db'

// Come l'originale: date testuali "GG-MM" (ricorrente) o "GG-MM-AAAA"; "daya" (solo nuovo) crea un evento per giorno.
const ddmm = /^(\d{2})-(\d{2})$/
const ddmmyyyy = /^(\d{2})-(\d{2})-(\d{4})$/
const Body = z.object({ Holiday: z.object({
  id: zId,
  type: z.enum(['F', 'C', 'M', 'Z']),
  ricorrente: zFlag,
  giornomese: z.string().trim().nullish(),
  day: z.string().trim().nullish(),
  daya: z.string().trim().nullish(),
  description: zReq(255),
  color: z.string().regex(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i).nullish().transform(v => v ?? null),
}) })

function iso(d: string, label: string, recurring: boolean) {
  const m = recurring ? d.match(ddmm) : d.match(ddmmyyyy)
  if (!m) fail(422, `${label}: formato atteso ${recurring ? 'GG-MM' : 'GG-MM-AAAA'}`)
  const [_, dd, mm, yyyy = '2000'] = m
  const date = new Date(Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd)))
  if (date.getUTCDate() !== Number(dd) || date.getUTCMonth() !== Number(mm) - 1) fail(422, `${label}: data inesistente`)
  return `${recurring ? '0000' : yyyy}-${mm}-${dd}`
}

export default defineEventHandler(async (event) => {
  if ((event.context.user as SessionUser).role !== 'S') fail(403, 'Non hai i permessi per questa operazione')
  const { Holiday: h } = await readValid(event, Body)
  const recurring = h.ricorrente === 1
  const first = iso((recurring ? h.giornomese : h.day) ?? '', recurring ? 'Giorno-Mese' : 'Giorno', recurring)
  const base = { type: h.type, description: h.description, color: h.color, modified: new Date().toISOString() }
  const t = schema.holidays
  if (h.id) {
    await db.update(t).set({ ...base, day: first }).where(eq(t.id, h.id))
    return ok(null)
  }
  const days = [first]
  if (!recurring && h.daya) {
    const last = iso(h.daya, 'A giorno', false)
    if (last < first) fail(422, 'La data finale precede quella iniziale')
    const d = new Date(`${first}T00:00:00Z`)
    while (true) {
      d.setUTCDate(d.getUTCDate() + 1)
      const s = d.toISOString().slice(0, 10)
      if (s > last) break
      days.push(s)
      if (days.length > 366) fail(422, 'Intervallo troppo lungo (massimo un anno)')
    }
  }
  await db.insert(t).values(days.map(day => ({ ...base, day })))
  return ok(null)
})
