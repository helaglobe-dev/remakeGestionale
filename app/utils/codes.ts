// Codifiche identiche all'originale (By05q3_U.js / DBcCgyZq.js)
export const PROJECT_STATUSES = [
  { code: 'A', name: 'Approvato / Siglato', color: '#157244' },
  { code: 'C', name: 'Confermato – in attesa di contratto', color: '#6bc498' },
  { code: 'S', name: 'Da sviluppare', color: 'orange' },
  { code: 'I', name: 'In discussione', color: '#9eefea' },
  { code: 'L', name: 'Lead', color: '#dddddd' },
  { code: 'H', name: 'On Hold', color: '#994eb7' },
  { code: 'R', name: 'Rifiutato', color: 'red' },
  { code: 'D', name: 'Eliminato', color: 'darkred' },
] as const

export const OPEN_STATUSES = [
  { code: 'A', name: 'Aperto' },
  { code: 'C', name: 'Chiuso' },
] as const

export const PROJECT_TYPES = [
  { code: 'N', name: 'Normale' },
  { code: 'A', name: 'Amministrativo' },
  { code: 'F', name: 'Ferie/Permessi/Malattia' },
] as const

export const TASK_STATUSES = [
  { code: 'A', name: 'Aperto' },
  { code: 'P', name: 'Completato' },
  { code: 'C', name: 'Chiuso' },
  { code: 'D', name: 'Eliminato' },
] as const

export const TASK_TYPES = [
  { code: 'P', name: 'Costi Personale' },
  { code: 'V', name: 'Costi Variabili' },
  { code: 'F', name: 'Costi Fissi' },
] as const

// tipi di storico come l'originale (projecthistories.type)
export const HISTORY_TYPES = { C: 'Creazione progetto', S: 'Cambio stato', A: 'Cambio apertura', O: 'Cambio owner/s', P: 'Pulsante' } as const
export type HistoryCode = keyof typeof HISTORY_TYPES
// owner nell'istantanea: elenco (remake) o testo (originale)
export const ownersText = (v: unknown) => (Array.isArray(v) ? v.join(', ') : typeof v === 'string' ? v : '')

export const statusName = (code: string) => PROJECT_STATUSES.find(s => s.code === code)?.name ?? code
export const statusColor = (code: string) => PROJECT_STATUSES.find(s => s.code === code)?.color ?? 'grey'

const eur = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' })
export const formatEur = (n: number | null | undefined) => eur.format(Number(n ?? 0))
export const formatDate = (d: string | null | undefined) =>
  d && d !== '0000-00-00' ? new Date(d).toLocaleDateString('it-IT') : ''

/** Ordinamento codici PR<n><anno>: prima per anno poi per numero. */
export function compareProjectCode(a: string, b: string) {
  const parse = (s: string) => {
    const m = String(s ?? '').match(/^PR(\d+)(\d{4})$/)
    return m ? { n: Number(m[1]), y: Number(m[2]) } : null
  }
  const x = parse(a)
  const y = parse(b)
  if (!x || !y) return String(a ?? '').localeCompare(String(b ?? ''), 'it', { numeric: true, sensitivity: 'base' })
  return x.y - y.y || x.n - y.n
}

/** Totale mostrato in elenco: newtotaleproposta se impostato, altrimenti _totaleprogetto. */
export const projectTotal = (p: { newtotaleproposta: number, _totaleprogetto: number }) =>
  p.newtotaleproposta !== 0 ? p.newtotaleproposta : p._totaleprogetto

// --- Anagrafiche (spec-anagrafiche.md) ---
const opts = <T extends string>(rows: [T, string][]) => rows.map(([value, title]) => ({ value, title }))

export const PAYMENT_TYPES = [
  { value: null, title: 'Personalizzato' },
  ...opts([['0', 'Data fattura'], ['30', '30 gg'], ['30fm', '30 gg f.m.'], ['45', '45 gg'], ['60', '60 gg'],
    ['60fm', '60 gg f.m.'], ['75', '75 gg'], ['90', '90 gg'], ['90fm', '90 gg f.m.'], ['120', '120 gg']]),
]
export const SUPPLIER_TYPES = opts([['A', 'Azienda'], ['P', 'Professionista'], ['C', 'Clinico']])
export const ACTIVITY_TYPES = opts([['N', 'Normale'], ['F', 'Ferie/Permessi/Malattia']])
export const HOLIDAY_TYPES = opts([['F', 'Festività'], ['C', 'Chiusura'], ['M', 'Meeting'], ['Z', 'Formazione']])
export const ROLES = opts([['S', 'Super Amministratore'], ['A', 'Amministratore'], ['U', 'Utente']])
export const optTitle = (list: { value: unknown, title: string }[], v: unknown) => list.find(o => o.value === v)?.title ?? ''

export const isEmail = (v: string | null) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email non valida'
/** Anni selezionabili nei listini: dal 2023 all'anno prossimo (come l'originale) */
export const rateYears = () => Array.from({ length: new Date().getFullYear() - 2021 }, (_, i) => 2023 + i)
