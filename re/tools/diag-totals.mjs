// Diagnostica (sola lettura sull'originale): perché i totali progetto differiscono. Output solo aggregato.
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
  const filt = { client: 0, status: [], openstatus: 0, responsabile: null, from: null, to: null }
  const live = new Map((await livePost('project/completelist', filt)).map(r => [r.Project.id, r.Project]))
  const mine = new Map((await lp('project/completelist', filt)).map(r => [r.Project.id, r.Project]))
  const bad = [...live.keys()].filter(id => !eq(mine.get(id)?.totaleproposta, live.get(id).totaleproposta)).slice(0, 40)
  for (const id of bad) {
    const tb = { alsodeleted: 0, project_id: String(id), statotask: [], users: [], userprofiles: [], changerequest: [], intest: 0 }
    const lt = (await livePost('task/completelist', tb)).map(r => r.Task)
    const mt = new Map((await lp('task/completelist', { project_id: id })).map(r => [r.Task.id, r.Task]))
    const sumLive = lt.reduce((a, t) => a + n(t.price), 0)
    if (eq(sumLive, live.get(id).totaleproposta)) inc('progetto: totale originale = Σ prezzi task originali')
    const noCR = lt.filter(t => !n(t.iscr)).reduce((a, t) => a + n(t.price), 0)
    if (eq(noCR, live.get(id).totaleproposta)) inc('progetto: totale originale = Σ prezzi task senza CR')
    const mineNoCR = [...mt.values()].filter(t => !t.iscr).reduce((a, t) => a + t.price, 0)
    if (eq(mineNoCR, live.get(id).totaleproposta)) inc('progetto: mio Σ senza CR = totale originale')
    for (const t of lt) {
      const m = mt.get(t.id)
      if (!m) { inc('task: mancante in locale'); continue }
      if (eq(m.price, t.price)) inc('task: prezzo uguale'); else {
        inc('task: prezzo diverso')
        if (n(t.iscr)) inc('  …change request')
        if (n(t.ismodified)) inc('  …ismodified')
        if (n(t.originalprice) && eq(t.originalprice, t.price)) inc('  …= originalprice')
        if (!m.internalactivity) inc('  …esterno')
      }
    }
    if (lt.length !== mt.size) inc('progetto: numero task diverso')
  }
  o.progettiAnalizzati = bad.length
  console.log(JSON.stringify(o, null, 1))
}
finally { await local.execute({ sql: 'delete from sessions where token = ?', args: [token] }) }
