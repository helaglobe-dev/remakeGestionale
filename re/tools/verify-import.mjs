// Confronta i valori calcolati dal remake (dati importati) con quelli dell'originale. Sola lettura sull'originale.
// Usa una sessione locale temporanea per un superadmin del remake, rimossa alla fine. Output: solo conteggi.
import { randomBytes } from 'node:crypto'
import { createClient } from '@libsql/client'
import { post as livePost, n } from './_live.mjs'

const local = createClient({ url: 'file:./data/helaproject.db' })
const admin = (await local.execute(`select id from users where role = 'S' and activeuser = 1 order by id limit 1`)).rows[0].id
const token = `${admin}-${randomBytes(24).toString('hex')}`
await local.execute({ sql: 'insert into sessions (token, user_id, expires_at) values (?, ?, ?)', args: [token, admin, new Date(Date.now() + 36e5).toISOString()] })
const lp = async (ep, body) => (await (await fetch(`http://localhost:3001/api/${ep}`, { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) })).json()).data
const eq = (a, b) => Math.abs(n(a) - n(b)) < 0.05
try {
  const filt = { client: 0, status: [], openstatus: 0, responsabile: null, from: null, to: null }
  const live = new Map((await livePost('project/completelist', filt)).map(r => [r.Project.id, r.Project]))
  const mine = new Map((await lp('project/completelist', filt)).map(r => [r.Project.id, r.Project]))
  const out = { progetti: `${mine.size} locali / ${live.size} originale` }
  for (const f of ['totaleproposta', 'costoproposta', '_totaleprogetto', 'costopropostareal', '_margineprogetto']) {
    let ok = 0; for (const [id, p] of live) if (mine.has(id) && eq(mine.get(id)[f], p[f])) ok++
    out[f] = `${ok}/${live.size}`
  }
  const kl = await livePost('invoice/kpi', { client: 0, project: 0, aperto: 0 }), km = new Map((await lp('invoice/kpi', { client: 0, project: 0, aperto: 0 })).map(k => [k.project_id, k]))
  out.kpi_righe = `${km.size} locali / ${kl.length} originale`
  for (const f of ['ricavi', 'costi', 'ricavipresunti', 'costipresunti', 'internalcost', 'primomarg', 'margprog', 'margpercent']) {
    let ok = 0; for (const k of kl) if (km.has(k.project_id) && eq(km.get(k.project_id)[f], k[f])) ok++
    out[`kpi.${f}`] = `${ok}/${kl.length}`
  }
  const y = new Date().getFullYear()
  const body = { from: `${y}-01-01`, to: `${y}-12-31`, onlyopenEconomico: 'A', internalFilterEconomico: 'ALL' }
  const el = await livePost('user/getSuperAdminDashboardDataEconomico', body), em = await lp('user/getSuperAdminDashboardDataEconomico', body)
  for (const f of ['fatturato_acquisito', 'fatturato_emesso', 'fatturato_emesso_pagato', 'pipeline', 'ndiscussione', 'winrate', 'targetannuo']) out[`dash.${f}`] = eq(em[f], el[f]) ? 'uguale' : `diverso (${n(em[f]).toFixed(1)} vs ${n(el[f]).toFixed(1)})`
  console.log(JSON.stringify(out, null, 1))
}
finally { await local.execute({ sql: 'delete from sessions where token = ?', args: [token] }) }
