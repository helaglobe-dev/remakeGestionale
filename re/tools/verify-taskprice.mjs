// Sola lettura: confronta prezzo/costo dei task calcolati dall'API originale con le regole candidate sui dati del dump.
import fs from 'node:fs'
import { post, n, counter } from './_live.mjs'
const D = t => { const d = JSON.parse(fs.readFileSync(`data/import/${t}.json`)); return d.rows.map(r => Object.fromEntries(d.columns.map((c, i) => [c, r[i]]))) }
const P = new Map(D('projects').map(p => [p.id, p])), T = new Map(D('tasks').map(t => [t.id, t]))
const up = D('upprices'), uc = D('upcosts')
const rate = (list, pid, y) => { const r = list.find(r => r.userprofile_id === pid && r.year === y); return r ? n(r.hcost) : null }
const eq = (a, b) => a != null && Math.abs(a - b) < 0.05
const { o, inc } = counter()
const ids = [...P.keys()].filter((_, i) => i % 6 === 0).slice(0, 80)
for (const pid of ids) {
  const p = P.get(pid)
  const api = (await post('task/completelist', { alsodeleted: 0, project_id: String(pid), statotask: [], users: [], userprofiles: [], changerequest: [], intest: 0 })).map(r => r.Task)
  for (const a of api) {
    const t = T.get(a.id); if (!t) { inc('task non nel dump'); continue }
    if (n(t.internalactivity) === 0) { inc('esterni'); if (eq(n(t.supplierprice), n(a.price)) && eq(n(t.suppliercost), n(a.cost))) inc('esterni: price/cost = supplier'); continue }
    inc('interni')
    const yc = Number(String(p.code).slice(-4)), ys = t.startdate ? Number(String(t.startdate).slice(0, 4)) : yc
    const yt = t.startdate ? Number(String(t.startdate).slice(0, 4)) : Number(String(t.created).slice(0, 4))
    const ytc = t.startdate ? Number(String(t.startdate).slice(0, 4)) : yc
    const cands = {
      'R1 inizio task, altrimenti creazione task': [rate(up, t.userprofile_id, yt), rate(uc, t.userprofile_id, yt)],
      'R2 inizio task, altrimenti anno codice': [rate(up, t.userprofile_id, ytc), rate(uc, t.userprofile_id, ytc)],
      'ore×listino anno codice': [rate(up, t.userprofile_id, yc), rate(uc, t.userprofile_id, yc)],
      'ore×listino anno inizio task': [rate(up, t.userprofile_id, ys), rate(uc, t.userprofile_id, ys)],
      'ore×listino anno creazione task': [rate(up, t.userprofile_id, Number(String(t.created).slice(0, 4))), rate(uc, t.userprofile_id, Number(String(t.created).slice(0, 4)))],
      'ore×listino ultimo anno ≤ codice': [ [...up].filter(r => r.userprofile_id === t.userprofile_id && r.year <= yc).sort((x, y) => y.year - x.year)[0]?.hcost, [...uc].filter(r => r.userprofile_id === t.userprofile_id && r.year <= yc).sort((x, y) => y.year - x.year)[0]?.hcost ],
    }
    let hit = false
    for (const [k, [pr, co]] of Object.entries(cands)) {
      if (pr != null && eq(n(t.hours) * n(pr), n(a.price)) && eq(n(t.hours) * n(co), n(a.cost))) { inc(`interni: ${k}`); hit = true }
    }
    if (!t.startdate) inc('  (interni senza data inizio)')
    if (!hit) {
      inc('interni: nessuna regola')
      if (n(a.price) === 0 && n(a.cost) === 0) inc('  …di cui prezzo e costo 0')
      if (!n(t.userprofile_id)) inc('  …di cui senza profilo')
      if (rate(up, t.userprofile_id, yc) == null) inc('  …di cui listino anno codice mancante')
      if (n(t.originalprice) && eq(n(t.originalprice), n(a.price))) inc('  …di cui = originalprice')
      if (n(a.hours) !== n(t.hours)) inc('  …di cui ore API ≠ dump')
      if (t.startdate && rate(up, t.userprofile_id, Number(String(t.startdate).slice(0, 4))) == null) inc('  …di cui listino anno inizio mancante')
    }
  }
}
console.log(JSON.stringify(o, null, 1))
