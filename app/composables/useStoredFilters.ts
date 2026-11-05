// Filtri persistiti in localStorage, come l'originale (lettura/scrittura protette).
export function useStoredFilters<T extends Record<string, any>>(key: string, defaults: T) {
  let initial = defaults
  try {
    const raw = localStorage.getItem(key)
    if (raw) initial = { ...defaults, ...JSON.parse(raw) }
  }
  catch { /* storage non disponibile */ }
  const filters = reactive({ ...initial }) as T
  const save = () => { try { localStorage.setItem(key, JSON.stringify(filters)) } catch { /* ignora */ } }
  const reset = () => { Object.assign(filters, defaults); save() }
  return { filters, save, reset }
}
