// Utility date/ore in ora locale (le date "YYYY-MM-DD" non passano mai da UTC, per evitare slittamenti di giorno).
const pad = (n: number) => String(n).padStart(2, '0')
export const localDay = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
export const addDays = (day: string, n: number) => {
  const [y, m, d] = day.split('-').map(Number)
  return localDay(new Date(y!, m! - 1, d! + n))
}
export const weekdayOf = (day: string) => { const [y, m, d] = day.split('-').map(Number); return new Date(y!, m! - 1, d!).getDay() }
export const isWeekendDay = (day: string) => [0, 6].includes(weekdayOf(day))
export const dayRange = (from: string, to: string) => { const out: string[] = []; for (let d = from; d <= to; d = addDays(d, 1)) out.push(d); return out }
export const fmtDay = (day: string) => (day ? `${day.slice(8, 10)}/${day.slice(5, 7)}/${day.slice(0, 4)}` : '')
export const fmtHours = (h: number) => `${Math.floor(h)}H ${Math.round((h % 1) * 60)}m`
/** Ora arrotondata al quarto d'ora, come i default del form originale */
export function roundedTime(offsetHours = 0) {
  const d = new Date(Date.now() + offsetHours * 3600_000)
  let h = d.getHours()
  let m = Math.round(d.getMinutes() / 15) * 15
  if (m === 60) { m = 0; h = (h + 1) % 24 }
  return `${pad(h)}:${pad(m)}`
}
export const QUARTERS = Array.from({ length: 96 }, (_, i) => `${pad(Math.floor(i / 4))}:${pad((i % 4) * 15)}`)
export const minutesOf = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5))
/** Periodi rapidi dei filtri (settimana da lunedì) */
export function presetRange(kind: 'oggi' | 'ieri' | 'settPrec' | 'sett' | 'mese' | 'mesePrec' | 'anno' | 'annoPrec'): [string, string] {
  const t = new Date()
  const today = localDay(t)
  const monday = addDays(today, -((t.getDay() + 6) % 7))
  switch (kind) {
    case 'oggi': return [today, today]
    case 'ieri': return [addDays(today, -1), addDays(today, -1)]
    case 'sett': return [monday, addDays(monday, 6)]
    case 'settPrec': return [addDays(monday, -7), addDays(monday, -1)]
    case 'mese': return [localDay(new Date(t.getFullYear(), t.getMonth(), 1)), localDay(new Date(t.getFullYear(), t.getMonth() + 1, 0))]
    case 'mesePrec': return [localDay(new Date(t.getFullYear(), t.getMonth() - 1, 1)), localDay(new Date(t.getFullYear(), t.getMonth(), 0))]
    case 'anno': return [`${t.getFullYear()}-01-01`, `${t.getFullYear()}-12-31`]
    case 'annoPrec': return [`${t.getFullYear() - 1}-01-01`, `${t.getFullYear() - 1}-12-31`]
  }
}
export const PRESETS = [
  ['oggi', 'Oggi'], ['ieri', 'Ieri'], ['settPrec', 'Settimana precedente'], ['sett', 'Settimana corrente'],
  ['mese', 'Mese corrente'], ['mesePrec', 'Mese precedente'], ['anno', 'Anno corrente'], ['annoPrec', 'Anno precedente'],
] as const
