// Totali economici salvati sul progetto, come l'originale: l'originale NON li ricalcola a ogni lettura
// (verificato: prezzi dei task identici 1051/1051, ma totali di progetto = Σ prezzi solo 2/40) ma li aggiorna
// quando si salvano task o ore. Qui li ricalcoliamo negli stessi momenti con questa unica istruzione SQL.
//  - totaleproposta / costoproposta: Σ prezzo / costo dei task non eliminati, escluse le change request
//  - totalepropostamodified / costopropostamodified: Σ con le change request, solo se ce ne sono (altrimenti 0)
//  - costopropostareal: Σ costo reale delle ore registrate (ore × costo orario del dipendente per anno)
// Le espressioni di prezzo e costo sono le stesse di server/utils/rates.ts (TASK_PRICE / TASK_COST).
const YEAR = `cast(substr(coalesce(t.startdate, t.created), 1, 4) as integer)`
const PRICE = `(case when t.internalactivity = 1 then t.hours * coalesce((select r.hcost from profileprices r where r.userprofile_id = t.userprofile_id and r.year = ${YEAR}), 0) else t.supplierprice end)`
const COST = `(case when t.internalactivity = 1 then t.hours * coalesce((select r.hcost from profilecosts r where r.userprofile_id = t.userprofile_id and r.year = ${YEAR}), 0) else t.suppliercost end)`
const REAL = `(select coalesce(sum((julianday(h.enddate) - julianday(h.startdate)) * 24 * coalesce((select uc.hcost from usercosts uc where uc.user_id = h.user_id and uc.year = cast(substr(h.startdate, 1, 4) as integer)), 0)), 0) from hours h where h.task_id = t.id and h.status = 'A')`
const sum = (expr: string, onlyCR: 'no' | 'all') => `(select round(coalesce(sum(${expr}), 0), 2) from tasks t where t.project_id = projects.id and t.status <> 'D'${onlyCR === 'no' ? ' and t.iscr = 0' : ''})`
const hasCR = `exists (select 1 from tasks t where t.project_id = projects.id and t.status <> 'D' and t.iscr = 1)`

/** UPDATE dei totali per i progetti indicati (o tutti se ids è vuoto). */
export function recalcTotalsSql(ids: number[] = []) {
  const where = ids.length ? `where id in (${ids.map(Number).filter(Number.isInteger).join(',')})` : ''
  return `update projects set
    totaleproposta = ${sum(PRICE, 'no')},
    costoproposta = ${sum(COST, 'no')},
    totalepropostamodified = case when ${hasCR} then ${sum(PRICE, 'all')} else 0 end,
    costopropostamodified = case when ${hasCR} then ${sum(COST, 'all')} else 0 end,
    costopropostareal = ${sum(REAL, 'all')}
    ${where}`
}
