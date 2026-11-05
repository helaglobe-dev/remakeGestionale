// Calcoli dei form di fatture e tranche, come l'originale (spec-fatture-finanza §2.2)
export const VAT_RATES = [
  { value: null, title: 'Personalizzata' }, { value: 0, title: '0%' }, { value: 4, title: '4%' },
  { value: 10, title: '10%' }, { value: 20, title: '20%' }, { value: 22, title: '22%' },
]
export const TRANCHE_TYPES = [{ value: 'A', title: 'Anticipo' }, { value: 'I', title: 'Intermedio' }, { value: 'S', title: 'Saldo' }]
export const PAYED = [{ value: 'N', title: 'Non pagata' }, { value: 'P', title: 'Pagata' }]
export const DOCUMENT_TYPES = [
  { value: 'F', title: 'Fattura', color: 'green' }, { value: 'N', title: 'Notula', color: 'orange' },
  { value: 'S', title: 'Scontrino', color: 'grey' }, { value: 'X', title: 'F24', color: 'blue' }, { value: 'A', title: 'Altro', color: 'purple' },
]
export const PRIORITY_TYPES = [{ value: 'B', title: 'Bloccato' }, { value: 'D', title: 'Differibile' }, { value: 'U', title: 'Urgente' }]
export const round2 = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100

/** Scadenza da data e tipo pagamento: "N" = +N giorni; "Nfm" = ultimo giorno del mese data + N/30 mesi. */
export function dueDate(date: string | null | undefined, paymenttype: string | null | undefined) {
  if (!date || paymenttype == null) return null
  const [y, m, d] = date.split('-').map(Number)
  if (paymenttype.endsWith('fm')) {
    const months = Number(paymenttype.slice(0, -2)) / 30
    return localDay(new Date(y!, m! - 1 + months + 1, 0))
  }
  return localDay(new Date(y!, m! - 1, d! + Number(paymenttype)))
}
/** Tipo pagamento coerente con le due date (in apertura di un record), altrimenti Personalizzato (null). */
export function deducePaymentType(date: string | null, due: string | null) {
  if (!date || !due) return null
  return PAYMENT_TYPES.map(p => p.value).find(v => v != null && dueDate(date, v) === due) ?? null
}
/** Aliquota coerente con imponibile e IVA, altrimenti Personalizzata (null) */
export function deduceVatRate(taxable: number, vat: number) {
  if (!taxable) return 22
  const r = round2(vat / taxable * 100)
  return VAT_RATES.find(v => v.value === r)?.value ?? null
}
export function validIban(v: string | null) {
  if (!v) return true
  if (/\s/.test(v)) return 'L\'IBAN non deve contenere spazi'
  const s = v.toUpperCase()
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(s)) return 'IBAN non valido'
  const n = (s.slice(4) + s.slice(0, 4)).replace(/[A-Z]/g, c => String(c.charCodeAt(0) - 55))
  let rem = 0
  for (const ch of n) rem = (rem * 10 + Number(ch)) % 97
  return rem === 1 || 'IBAN non valido (codice di controllo errato)'
}
