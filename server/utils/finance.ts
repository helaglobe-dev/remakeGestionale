// Fatture e finanza: permessi e viste con i campi derivati (regole verificate, spec §19).
import { and, desc, eq, gte, inArray, lte, sql, type SQL } from 'drizzle-orm'
import { db, schema } from '../db'
import type { SessionUser } from './auth'

const s = schema

/** Lettura delle fatture di un progetto: superadmin/admin, responsabili del progetto, chi gestisce le fatture. */
export async function canReadProjectFinance(user: SessionUser, projectId: number) {
  return user.hasinvoice === 1 || (await canEditProject(user, projectId))
}
export function requireInvoiceWrite(user: SessionUser) {
  if (user.hasinvoice !== 1) fail(403, 'Non hai i permessi per gestire fatture e tranche di pagamento')
}
export function requireInvoiceAdmin(user: SessionUser) {
  if (user.hasinvoice !== 1) fail(403, 'Non hai i permessi per consultare i valori economici')
}
export async function requireProjectFinance(user: SessionUser, projectId: number) {
  if (!(await canReadProjectFinance(user, projectId))) fail(403, 'Non hai i permessi per i dati economici di questo progetto')
}

const r2 = (v: number) => Math.round((v + Number.EPSILON) * 100) / 100

// --- tranche ---
export type TrancheFilter = { projectId?: number | null, from?: string | null, to?: string | null, ids?: number[] }

/** Tranche con cliente/sponsor/tipo pagamento ed emissione derivati dalla fattura collegata. */
export async function listTranches(f: TrancheFilter) {
  const t = s.paymenttranches
  const where: SQL[] = []
  if (f.projectId) where.push(eq(t.projectId, f.projectId))
  if (f.from) where.push(gte(t.previewdate, f.from))
  if (f.to) where.push(lte(t.previewdate, f.to))
  if (f.ids) where.push(inArray(t.id, f.ids.length ? f.ids : [-1]))
  const rows = await db.select({ t, p: s.projects, sp: s.sponsors, pc: s.clients }).from(t)
    .innerJoin(s.projects, eq(t.projectId, s.projects.id))
    .leftJoin(s.sponsors, eq(t.sponsorId, s.sponsors.id))
    .leftJoin(s.clients, eq(s.projects.clientId, s.clients.id))
    .where(where.length ? and(...where) : undefined)
    .orderBy(t.previewdate, t.id)
  const sponsorClients = new Map((await db.select().from(s.clients)).map(c => [c.id, c]))
  const invoices = rows.length
    ? await db.select().from(s.activeinvoices).where(inArray(s.activeinvoices.paymentTrancheId, rows.map(r => r.t.id))).orderBy(desc(s.activeinvoices.id))
    : []
  return rows.map(({ t, p, sp, pc }) => {
    const inv = invoices.find(i => i.paymentTrancheId === t.id)
    const sponsorClient = sp ? sponsorClients.get(sp.clientId) : undefined
    return {
      id: t.id, project_id: t.projectId, sponsor_id: t.sponsorId ?? 0, type: t.type, total: t.total, vat: t.vat,
      previewdate: t.previewdate, paymentdate: t.paymentdate, description: t.description, note: t.note,
      project_code: p.code, project_name: p.contractname || p.name, project_status: p.status,
      client_id: p.clientId ?? 0, sponsor: sp?.clientId ?? 0,
      // tipo pagamento: quello dello sponsor se c'è, altrimenti del cliente del progetto
      paymenttype: (sponsorClient?.paymenttype ?? pc?.paymenttype) ?? null,
      emessa: inv ? 1 : 0, hasinvoice: inv ? 1 : 0, invoice_id: inv?.id ?? 0,
      invoicedate: inv?.invoicedate ?? null, payed: inv?.payed ?? 'N', invoicepaymentdate: inv?.paymentDate ?? null,
    }
  })
}

// --- fatture attive ---
export type ActiveFilter = { projectId?: number | null, clientId?: number | null, from?: string | null, to?: string | null, id?: number }

/** Fatture attive; il cliente è lo sponsor della tranche se presente, altrimenti il cliente del progetto (verificato). */
export async function listActiveInvoices(f: ActiveFilter) {
  const i = s.activeinvoices
  const where: SQL[] = []
  if (f.id) where.push(eq(i.id, f.id))
  if (f.projectId) where.push(eq(i.projectId, f.projectId))
  if (f.from) where.push(gte(i.paymentduedate, f.from))
  if (f.to) where.push(lte(i.paymentduedate, f.to))
  const rows = await db.select({ i, p: s.projects, sp: s.sponsors }).from(i)
    .innerJoin(s.projects, eq(i.projectId, s.projects.id))
    .leftJoin(s.paymenttranches, eq(i.paymentTrancheId, s.paymenttranches.id))
    .leftJoin(s.sponsors, eq(s.paymenttranches.sponsorId, s.sponsors.id))
    .where(where.length ? and(...where) : undefined)
    .orderBy(i.paymentduedate, i.id)
  return rows
    .map(({ i, p, sp }) => ({
      id: i.id, project_id: i.projectId, payment_tranche_id: i.paymentTrancheId ?? 0, bank_id: i.bankId ?? 0,
      invoicenumber: i.invoicenumber, invoicedate: i.invoicedate, taxable: i.taxable, vat: i.vat, total: r2(i.taxable + i.vat),
      paymentduedate: i.paymentduedate, payment_date: i.paymentDate, payed: i.payed,
      anticipobancario: i.anticipobancario, percentualeanticipo: i.percentualeanticipo, meseannoanticipo: i.meseannoanticipo, note: i.note,
      cliente: sp?.clientId ?? p.clientId ?? 0, project_code: p.code, project_name: p.contractname || p.name,
    }))
    .filter(r => !f.clientId || r.cliente === f.clientId)
}

// --- fatture passive ---
export type PassiveFilter = { projectId?: number | null, supplierId?: number | null, from?: string | null, to?: string | null, payed?: string | null, id?: number }

export async function listPassiveInvoices(f: PassiveFilter) {
  const i = s.passiveinvoices
  const r = s.passiveinvoicerows
  const where: SQL[] = []
  if (f.id) where.push(eq(i.id, f.id))
  if (f.supplierId) where.push(eq(i.supplierId, f.supplierId))
  if (f.from) where.push(gte(i.paymentduedate, f.from))
  if (f.to) where.push(lte(i.paymentduedate, f.to))
  if (f.payed === 'P' || f.payed === 'N') where.push(eq(i.payed, f.payed))
  if (f.projectId) where.push(inArray(i.id, db.select({ id: r.passiveinvoiceId }).from(r).where(eq(r.projectId, f.projectId))))
  const heads = await db.select().from(i).where(where.length ? and(...where) : undefined).orderBy(i.paymentduedate, i.id)
  const rows = heads.length
    ? await db.select({ r, code: s.projects.code }).from(r).leftJoin(s.projects, eq(r.projectId, s.projects.id))
      .where(inArray(r.passiveinvoiceId, heads.map(h => h.id))).orderBy(r.id)
    : []
  return heads.map((h) => {
    const mine = rows.filter(x => x.r.passiveinvoiceId === h.id)
    const taxable = r2(mine.reduce((a, x) => a + x.r.taxable, 0))
    const vat = r2(mine.reduce((a, x) => a + x.r.vat, 0))
    return {
      id: h.id, documenttype: h.documenttype, supplier_id: h.supplierId ?? 0, invoicenumber: h.invoicenumber,
      invoicedate: h.invoicedate, paymentduedate: h.paymentduedate, payment_date: h.paymentDate, bank_id: h.bankId ?? 0,
      payed: h.payed, iban: h.iban, type: h.type, causale: h.causale, note: h.note, budgetitem_id: h.budgetitemId ?? 0,
      taxable, vat, total: r2(taxable + vat),
      projects: [...new Set(mine.map(x => x.code).filter(Boolean))].join(', '),
      tasks: mine.map(x => ({ id: x.r.id, project_id: x.r.projectId ?? 0, task_id: x.r.taskId ?? 0, taxable: x.r.taxable, vat: x.r.vat })),
    }
  })
}

/**
 * Avviso "flagprice": per ogni task esterno toccato dalla fattura, il totale delle fatture passive
 * imputate al task è diverso dal costo del task. IPOTESI [I]: regola server non visibile nell'originale.
 */
export async function taskCostMismatch(taskIds: number[]) {
  if (!taskIds.length) return false
  const r = s.passiveinvoicerows
  const sums = await db.select({ taskId: r.taskId, tot: sql<number>`sum(${r.taxable})` }).from(r)
    .where(inArray(r.taskId, taskIds)).groupBy(r.taskId)
  const tasks = await db.select({ id: s.tasks.id, cost: TASK_COST }).from(s.tasks).where(inArray(s.tasks.id, taskIds))
  return tasks.some(t => Math.abs((sums.find(x => x.taskId === t.id)?.tot ?? 0) - t.cost) > 0.01)
}

/** Anno di una colonna data "YYYY-MM-DD" */
export const sqlYear = (col: any) => sql<string>`substr(${col}, 1, 4)`
