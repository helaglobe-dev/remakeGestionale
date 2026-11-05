import type { schema } from '../db'

/** Task nel formato API originale; nhours, realcost, price e cost arrivano calcolati in SQL (rates.ts). */
export function serializeTask(t: typeof schema.tasks.$inferSelect, calc: { nhours?: number, realcost?: number, price?: number, cost?: number } = {}) {
  const { projectId, userId, userprofileId, supplierId, macrovoiceId, ...rest } = t
  const r = (v = 0) => Math.round(v * 100) / 100
  return {
    ...rest,
    project_id: projectId,
    user_id: userId ?? 0,
    userprofile_id: userprofileId ?? 0,
    supplier_id: supplierId ?? 0,
    macrovoice_id: macrovoiceId ?? 0,
    nhours: r(calc.nhours), realcost: r(calc.realcost), price: r(calc.price), cost: r(calc.cost),
  }
}

/** Colonne calcolate da aggiungere a ogni select sui task */
export const TASK_CALC = { nhours: TASK_NHOURS, realcost: TASK_REALCOST, price: TASK_PRICE, cost: TASK_COST }
