import type { ColumnDef, FieldDef } from '~/components/CrudPage.vue'
import PROVINCE from './province.json'

const provinceItems = PROVINCE.map(p => ({ value: p.code, title: `${p.name} (${p.code})` }))
const siNo = (v: unknown) => (v ? 'Si' : 'No')

/** Campi comuni a clienti e fornitori (DialogInsModClient / DialogInsModSupplier dell'originale). */
export function anagraficaFields(kind: 'client' | 'supplier'): FieldDef[] {
  const isClient = kind === 'client'
  return [
    { key: isClient ? 'codcli' : 'codsup', label: isClient ? 'Codice cliente' : 'Codice fornitore', cols: 3 },
    { key: 'name', label: 'Ragione sociale', required: true, cols: 6 },
    ...(isClient ? [] : [{ key: 'type', label: 'Tipo di fornitore', type: 'select' as const, items: SUPPLIER_TYPES, default: 'A', cols: 3 }]),
    { key: 'piva', label: 'Partita IVA', cols: isClient ? 3 : 4 },
    { key: 'cf', label: 'Codice fiscale', required: isClient, cols: 4 },
    { key: 'sdi', label: 'Codice SDI', cols: 4 },
    { key: 'address', label: 'Indirizzo', required: isClient, cols: 6 },
    { key: 'zip', label: 'CAP', required: isClient, cols: 2 },
    { key: 'city', label: 'Città', required: isClient, cols: 4 },
    { key: 'province', label: 'Provincia', type: 'autocomplete', items: provinceItems, cols: 6 },
    { key: 'state', label: 'Stato', required: isClient, default: 'Italia', cols: 6 },
    { key: 'telephone', label: 'Telefono', cols: 4 },
    { key: 'email', label: 'Email', type: 'email', rules: [isEmail], cols: 4 },
    { key: 'pec', label: 'PEC', type: 'email', rules: [isEmail], cols: 4 },
    { key: 'companyemail', label: 'Email aziendale', type: 'email', rules: [isEmail], cols: 6 },
    { key: 'invoiceemail', label: 'Email di fatturazione', type: 'email', rules: [isEmail], cols: 6 },
    { key: 'website', label: 'Sito web', cols: 6 },
    { key: 'iban', label: 'IBAN', cols: 6 },
    ...(isClient ? [{ key: 'paymenttype', label: 'Termini di pagamento', type: 'select' as const, items: PAYMENT_TYPES, cols: 6 }] : []),
    { key: 'contactperson', label: 'Persona di riferimento', cols: 6 },
    { key: 'stopservice', label: 'Stop service (cliente sospeso)', type: 'switch', cols: 6 },
    ...(isClient ? [{ key: 'prioritario', label: 'Cliente prioritario (dashboard)', type: 'switch' as const, cols: 6 }] : []),
    { key: 'notes', label: 'Note interne', type: 'textarea' },
  ]
}

/** Colonne dell'export Excel, nello stesso ordine dell'originale. */
export function anagraficaExport(kind: 'client' | 'supplier'): ColumnDef[] {
  const isClient = kind === 'client'
  return [
    { title: 'Id', key: 'id' }, { title: 'Codice', key: isClient ? 'codcli' : 'codsup' }, { title: 'Rag. Sociale', key: 'name' },
    ...(isClient ? [] : [{ title: 'Tipo', key: 'type' }]),
    { title: 'Piva', key: 'piva' }, { title: 'CF', key: 'cf' }, { title: 'SDI', key: 'sdi' }, { title: 'PEC', key: 'pec' },
    { title: 'Indirizzo', key: 'address' }, { title: 'CAP', key: 'zip' }, { title: 'Città', key: 'city' },
    { title: 'Provincia', key: 'province' }, { title: 'Stato', key: 'state' }, { title: 'Telefono', key: 'telephone' },
    { title: 'Email', key: 'email' }, { title: 'Email Aziendale', key: 'companyemail' }, { title: 'Email fatture', key: 'invoiceemail' },
    { title: 'Sito web', key: 'website' }, { title: 'Codice IBAN', key: 'iban' }, { title: 'Note interne', key: 'notes' },
    { title: 'Stop service', key: 'stopservice', format: siNo },
    { title: 'Status', key: 'status', format: v => (v === 'A' ? 'Attivo' : 'Eliminato') },
    { title: 'Contatto', key: 'contactperson' },
    ...(isClient
      ? [{ title: 'Prioritario', key: 'prioritario', format: siNo }, { title: 'Portafoglio attivo', key: 'portafoglio' },
          { title: 'Progetti attivi', key: 'attivi' }, { title: 'Progetti in coda', key: 'coda' }]
      : []),
  ]
}
