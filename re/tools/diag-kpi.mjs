// Sola lettura: differenze tra KPI locali e originali (solo aggregati).
import { randomBytes } from 'node:crypto'
import { createClient } from '@libsql/client'
import { post as livePost, n, counter } from './_live.mjs'
const local = createClient({ url: 'file:./data/helaproject.db' })
const admin = (await local.execute(`select id from users where role = 'S' and activeuser = 1 order by id limit 1`)).rows[0].id
const token = `${admin}-${randomBytes(24).toString('hex')}`
await local.execute({ sql: 'insert into sessions (token, user_id, expires_at) values (?, ?, ?)', args: [token, admin, new Date(Date.now() + 36e5).toISOString()] })
const lp = async (ep, body) => (await (await fetch(`http://localhost:3001/api/${ep}`, { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) })).json()).data
const eq = (a, b) => Math.abs(n(a) - n(b)) < 0.05
const { o, inc } = counter()
try {
  const live = await livePost('invoice/kpi', { client: 0, project: 0, aperto: 0 })
  const mine = await lp('invoice/kpi', { client: 0, project: 0, aperto: 0 })
  const liveIds = new Set(live.map(k => k.project_id))
  const projects = new Map((await lp('project/completelist', { client: 0, status: [], openstatus: 0 })).map(r => [r.Project.id, r.Project]))
  for (const k of mine.filter(k => !liveIds.has(k.project_id))) {
    const p = projects.get(k.project_id)
    inc(`extra locale: status=${p.status} interno=${p.internalproject} tipo=${p.type} open=${p.openstatus}`)
  }
  const statusOfLive = {}
  live.forEach(k => { const p = projects.get(k.project_id); const key = `${p?.status}/int${p?.internalproject}/tipo${p?.type}`; statusOfLive[key] = (statusOfLive[key] ?? 0) + 1 })
  o.originale_per_stato = statusOfLive
  const mm = new Map(mine.map(k => [k.project_id, k]))
  for (const k of live) {
    const m = mm.get(k.project_id); const p = projects.get(k.project_id)
    if (!m || eq(m.ricavipresunti, k.ricavipresunti)) continue
    inc('ricavipresunti diverso')
    if (eq(k.ricavipresunti, p.totalepropostamodified)) inc('  …= totalepropostamodified (senza incr/sconto)')
    if (eq(k.ricavipresunti, p._totaleprogetto)) inc('  …= _totaleprogetto')
    if (eq(k.ricavipresunti, p.newtotaleproposta)) inc('  …= newtotaleproposta')
    if (n(p.totalepropostamodified)) inc('  …progetto con modified ≠ 0')
  }
  console.log(JSON.stringify(o, null, 1))
}
finally { await local.execute({ sql: 'delete from sessions where token = ?', args: [token] }) }
