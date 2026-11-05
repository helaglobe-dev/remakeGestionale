import type { AuthUser } from '~/composables/useAuth'

// Menu laterale: stesso ordine e stesse condizioni di visibilità dell'originale (layout CStWh58a.js).
export type Perm = (u: AuthUser) => boolean
export type MenuItem = { title: string, to: string, icon?: string, perm?: Perm }
export type MenuGroup = { title: string, icon: string, perm?: Perm, items: MenuItem[] }

export const isS: Perm = u => u.role === 'S'
export const isSA: Perm = u => u.role === 'S' || u.role === 'A'
export const can = {
  dashboard: (u: AuthUser) => u.viewdashboard === 1,
  macro: (u: AuthUser) => u.role === 'S' || u.cancreatemacro === 1,
  invoice: (u: AuthUser) => u.hasinvoice === 1,
  kpi: (u: AuthUser) => u.viewkpi === 1,
  budget: (u: AuthUser) => u.viewbudget === 1,
}

// Icone ed etichette come il menu originale (CStWh58a.js)
export const MENU: (MenuItem | MenuGroup)[] = [
  { title: 'Dashboard', to: '/', icon: 'mdi-view-dashboard-outline' },
  {
    title: 'Amministrazione', icon: 'mdi-head-cog-outline', perm: u => isS(u) || can.macro(u),
    items: [
      { title: 'Attività', to: '/activities', icon: 'mdi-file-document-outline', perm: isS },
      { title: 'Macrovoci', to: '/macrovoices', icon: 'mdi-format-list-group', perm: can.macro },
      { title: 'Colori', to: '/colors', icon: 'mdi-palette', perm: isS },
      { title: 'Gestione calendario', to: '/holidays', icon: 'mdi-calendar-account', perm: isS },
      { title: 'Target annui', to: '/targets', icon: 'mdi-medal-outline', perm: isS },
      { title: 'Profili professionali', to: '/userprofiles', icon: 'mdi-clipboard-account', perm: isS },
      { title: 'Utenti', to: '/users', icon: 'mdi-account-multiple-outline', perm: isS },
    ],
  },
  {
    title: 'Dipendenti', icon: 'mdi-account-tie', perm: isSA,
    items: [
      { title: 'Costi orari', to: '/costs', icon: 'mdi-currency-eur', perm: isS },
      { title: 'Carichi di lavoro', to: '/works', icon: 'mdi-briefcase-account-outline', perm: isSA },
      { title: 'Imputazione ore', to: '/hours', icon: 'mdi-clock-outline', perm: isS },
    ],
  },
  { title: 'Progetti', to: '/projects', icon: 'mdi-briefcase-search-outline' },
  { title: 'Storici', to: '/histories', icon: 'mdi-clipboard-text-clock-outline' },
  { title: 'Clienti', to: '/clients', icon: 'mdi-handshake-outline', perm: isSA },
  { title: 'Fornitori', to: '/suppliers', icon: 'mdi-home-import-outline', perm: isSA },
  { title: 'Calendario/To Do List', to: '/todolist', icon: 'mdi-clipboard-list-outline' },
  {
    title: 'Valori Economici', icon: 'mdi-currency-eur', perm: can.invoice,
    items: [
      { title: 'Scadenziario attivo', to: '/scadenziario', icon: 'mdi-calendar-multiselect-outline' },
      { title: 'Scad. fatture pagate', to: '/scadenziariofattureattive', icon: 'mdi-calendar-multiselect-outline' },
      { title: 'Banche', to: '/banks', icon: 'mdi-bank', perm: isS },
      { title: 'Fatture attive', to: '/adminactiveinvoices', icon: 'mdi-invoice-text-plus-outline' },
      { title: 'Fatture passive', to: '/adminpassiveinvoices', icon: 'mdi-invoice-text-minus-outline' },
      { title: 'Tranche pagamento', to: '/adminpaymenttranches', icon: 'mdi-invoice-text-clock-outline' },
    ],
  },
  { title: 'Kpi', to: '/kpi', icon: 'mdi-chart-line', perm: can.kpi },
  { title: 'Budget', to: '/budget', icon: 'mdi-sack', perm: can.budget },
]

/** Manuale del proprio ruolo (stessi PDF dell'originale) */
export const manualFor = (u: AuthUser) => `/manuali/${({ S: 'superadmin', A: 'admin', U: 'utente' } as const)[u.role]}.pdf`

/** Permesso richiesto da una rotta, ricavato dal menu (le rotte fuori menu sono libere o gestite dalla pagina). */
export function routePerm(path: string): Perm | undefined {
  for (const entry of MENU) {
    if ('items' in entry) {
      const item = entry.items.find(i => i.to === path)
      if (item) return u => (entry.perm?.(u) ?? true) && (item.perm?.(u) ?? true)
    }
    else if (entry.to === path) return entry.perm
  }
}
