<script setup lang="ts">
// Pagina anagrafica generica: tabella con ricerca/ordinamento, export CSV, dialog guidato dai campi.
// Riproduce il pattern comune dell'originale (bottone verde "Crea", menu azioni a tre puntini,
// Modifica / Duplica / Elimina, export CSV azzurro).
export type FieldDef = {
  key: string
  label: string
  type?: 'text' | 'textarea' | 'number' | 'select' | 'autocomplete' | 'switch' | 'date' | 'color' | 'email' | 'password'
  items?: { title: string, value: unknown }[] | (() => { title: string, value: unknown }[])
  required?: boolean
  cols?: number
  hint?: string
  default?: unknown
  /** Mostra il campo solo se la condizione è vera sul record in modifica */
  showIf?: (r: Record<string, any>) => boolean
  rules?: ((v: any, r: Record<string, any>) => true | string)[]
  suffix?: string
  multiple?: boolean
  /** Campo in sola lettura se la condizione è vera sul record in modifica */
  disabledIf?: (r: Record<string, any>) => boolean
}
export type ColumnDef = {
  title: string
  key: string
  align?: 'start' | 'end' | 'center'
  sortable?: boolean
  format?: (v: any, row: Record<string, any>) => string
  csv?: boolean
}

const props = withDefaults(defineProps<{
  title: string
  resource: string
  wrapper: string
  itemLabel: string
  columns: ColumnDef[]
  fields: FieldDef[]
  canEdit?: boolean
  allowDuplicate?: boolean
  allowDelete?: boolean
  csvName?: string
  /** Colonne dell'export se diverse da quelle della tabella */
  exportColumns?: ColumnDef[]
  exportFormat?: 'csv' | 'xlsx'
  /** Invia il record senza wrapper (come user/createedit dell'originale) */
  flatPayload?: boolean
  /** Righe da escludere dal menu modifica/elimina (es. l'utente corrente) */
  canDeleteRow?: (r: Record<string, any>) => boolean
  sortBy?: { key: string, order: 'asc' | 'desc' }[]
  deleteText?: (r: Record<string, any>) => string
  dialogWidth?: number
}>(), { canEdit: true, allowDuplicate: true, allowDelete: true, dialogWidth: 720, exportFormat: 'csv' })

const emit = defineEmits<{ saved: [r: Record<string, any>], loaded: [rows: Record<string, any>[]] }>()
defineSlots<Record<string, (p: { item: Record<string, any> }) => any> & { toolbar?: () => any, 'row-actions'?: (p: { item: Record<string, any> }) => any }>()

const api = useApi()
const toast = useSnackbar()
const rows = ref<Record<string, any>[]>([])
const loading = ref(false)
const search = ref('')
const sort = ref(props.sortBy ?? [])

async function load() {
  loading.value = true
  try {
    rows.value = (await api<any[]>(`${props.resource}/list`)).map(r => r[props.wrapper] ?? r)
    emit('loaded', rows.value)
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(load)
defineExpose({ load, rows })

const headers = computed(() => [
  ...props.columns.map(c => ({ title: c.title, key: c.key, align: c.align, sortable: c.sortable ?? true })),
  ...(props.canEdit ? [{ title: 'Azioni', key: '__actions', sortable: false, align: 'end' as const }] : []),
])
const cell = (c: ColumnDef, r: Record<string, any>) => (c.format ? c.format(r[c.key], r) : r[c.key] ?? '')

// --- dialog ---
const editing = ref<Record<string, any> | null>(null)
const mode = ref<'new' | 'edit' | 'duplicate'>('new')
const form = ref()
const saving = ref(false)
const itemsOf = (f: FieldDef) => (typeof f.items === 'function' ? f.items() : f.items ?? [])
function blank() {
  return Object.fromEntries(props.fields.map(f => [f.key, f.default ?? (f.type === 'switch' ? 0 : f.multiple ? [] : null)]))
}
function open(m: typeof mode.value, r?: Record<string, any>) {
  mode.value = m
  editing.value = r ? { ...blank(), ...structuredClone(toRaw(r)) } : { ...blank(), id: 0 }
  if (m === 'duplicate') editing.value!.id = 0
}
const dialogTitle = computed(() => ({ new: `Nuovo ${props.itemLabel}`, edit: `Modifica ${props.itemLabel}`, duplicate: `Duplica ${props.itemLabel}` })[mode.value])
const required = (v: unknown) => (v != null && String(v).trim() !== '' && !(Array.isArray(v) && !v.length)) || 'Campo obbligatorio'
const rulesOf = (f: FieldDef) => [
  ...(f.required ? [required] : []),
  ...(f.rules ?? []).map(r => (v: any) => r(v, editing.value!)),
]

async function save() {
  const { valid } = await form.value.validate()
  if (!valid) return
  saving.value = true
  try {
    const saved = await api(`${props.resource}/createedit`, { body: props.flatPayload ? editing.value : { [props.wrapper]: editing.value } })
    toast.success(mode.value === 'edit' ? 'Modifica completata' : 'Salvataggio completato')
    editing.value = null
    emit('saved', saved)
    await load()
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}

// --- eliminazione ---
const toDelete = ref<Record<string, any> | null>(null)
async function confirmDelete() {
  const r = toDelete.value!
  toDelete.value = null
  try {
    await api(`${props.resource}/delete/${r.id}`, { method: 'POST' })
    toast.success('Eliminazione completata')
    await load()
  }
  catch (e: any) { toast.error(e.message) }
}

// --- export: CSV (separatore ; e BOM per Excel italiano) o XLSX ---
async function doExport() {
  const cols = (props.exportColumns ?? props.columns).filter(c => c.csv !== false)
  const name = props.csvName ?? props.resource
  if (props.exportFormat === 'xlsx') {
    const { default: ExcelJS } = await import('exceljs')
    const wb = new ExcelJS.Workbook()
    const ws = wb.addWorksheet(props.title.slice(0, 31))
    ws.columns = cols.map(c => ({ header: c.title, key: c.key, width: Math.max(10, c.title.length + 4) }))
    ws.getRow(1).font = { bold: true }
    rows.value.forEach(r => ws.addRow(Object.fromEntries(cols.map(c => [c.key, cell(c, r)]))))
    download(new Blob([await wb.xlsx.writeBuffer()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), `${name}.xlsx`)
    return
  }
  const esc = (v: unknown) => {
    let s = String(v ?? '')
    if (/^[\s]*[=+@-]/.test(s)) s = `'${s}`
    return `"${s.replaceAll('"', '""')}"`
  }
  const lines = [cols.map(c => esc(c.title)).join(';'), ...rows.value.map(r => cols.map(c => esc(cell(c, r))).join(';'))]
  download(new Blob([`\uFEFF${lines.join('\r\n')}`], { type: 'text/csv;charset=utf-8' }), `${name}.csv`)
}
function download(blob: Blob, filename: string) {
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: filename })
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center flex-wrap ga-2 my-4">
      <h1 class="text-h5 page-title mr-auto">{{ title }}</h1>
      <slot name="toolbar" />
      <v-btn v-if="canEdit" color="green" prepend-icon="mdi-plus" @click="open('new')">Crea {{ itemLabel }}</v-btn>
      <v-btn color="primary" :prepend-icon="exportFormat === 'xlsx' ? 'mdi-microsoft-excel' : 'mdi-file-delimited-outline'" @click="doExport">{{ exportFormat === 'xlsx' ? 'XLS' : 'CSV' }}</v-btn>
    </div>

    <v-data-table v-model:sort-by="sort" :items="rows" :headers="headers" :search="search" :loading="loading"
      density="compact" :items-per-page="25" :items-per-page-options="[10, 25, 50, { value: -1, title: 'Tutti' }]"
      no-data-text="Nessun elemento disponibile" loading-text="Caricamento…">
      <template #top>
        <v-text-field v-model="search" label="Cerca" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable />
      </template>
      <template v-for="c in columns" :key="c.key" #[`item.${c.key}`]="{ item }">
        <slot :name="`item.${c.key}`" :item="item">{{ cell(c, item) }}</slot>
      </template>
      <template #[`item.__actions`]="{ item }">
        <v-menu>
          <template #activator="{ props: p }">
            <v-btn v-bind="p" icon="mdi-dots-vertical" variant="text" size="small" />
          </template>
          <v-list density="compact">
            <v-list-item prepend-icon="mdi-pencil" title="Modifica" @click="open('edit', item)" />
            <v-list-item v-if="allowDuplicate" prepend-icon="mdi-content-copy" title="Duplica" @click="open('duplicate', item)" />
            <slot name="row-actions" :item="item" />
            <v-list-item v-if="allowDelete && (!canDeleteRow || canDeleteRow(item))" prepend-icon="mdi-delete-outline" base-color="red" title="Elimina" @click="toDelete = item" />
          </v-list>
        </v-menu>
      </template>
    </v-data-table>

    <v-dialog :model-value="!!editing" :max-width="dialogWidth" persistent scrollable>
      <v-card v-if="editing">
        <v-card-title class="d-flex align-center">
          {{ dialogTitle }}<v-spacer /><v-btn icon="mdi-close" variant="text" @click="editing = null" />
        </v-card-title>
        <v-card-text>
          <v-form ref="form" @submit.prevent="save">
            <v-row density="compact">
              <template v-for="f in fields" :key="f.key">
                <v-col v-if="!f.showIf || f.showIf(editing)" cols="12" :sm="f.cols ?? 12">
                  <v-switch v-if="f.type === 'switch'" v-model="editing[f.key]" :true-value="1" :false-value="0"
                    color="green" inset hide-details :label="f.label" />
                  <v-select v-else-if="f.type === 'select'" v-model="editing[f.key]" :items="itemsOf(f)" :label="f.label + (f.required ? '*' : '')"
                    :rules="rulesOf(f)" :hint="f.hint" persistent-hint :multiple="f.multiple" :chips="f.multiple" :clearable="!f.required"
                    :disabled="f.disabledIf?.(editing)" />
                  <v-autocomplete v-else-if="f.type === 'autocomplete'" v-model="editing[f.key]" :items="itemsOf(f)" :label="f.label + (f.required ? '*' : '')"
                    :rules="rulesOf(f)" :hint="f.hint" persistent-hint :multiple="f.multiple" :chips="f.multiple" clearable />
                  <v-textarea v-else-if="f.type === 'textarea'" v-model="editing[f.key]" :label="f.label + (f.required ? '*' : '')"
                    :rules="rulesOf(f)" rows="2" auto-grow />
                  <div v-else-if="f.type === 'color'" class="d-flex align-center ga-3">
                    <v-text-field v-model="editing[f.key]" :label="f.label + (f.required ? '*' : '')" :rules="rulesOf(f)" />
                    <input v-model="editing[f.key]" type="color" style="width: 48px; height: 40px; border: none; background: none">
                  </div>
                  <v-text-field v-else-if="f.type === 'number'" v-model.number="editing[f.key]" type="number" :label="f.label + (f.required ? '*' : '')"
                    :rules="rulesOf(f)" :hint="f.hint" persistent-hint :suffix="f.suffix" />
                  <v-text-field v-else v-model="editing[f.key]" :type="f.type ?? 'text'" :label="f.label + (f.required ? '*' : '')"
                    :rules="rulesOf(f)" :hint="f.hint" persistent-hint :suffix="f.suffix" />
                </v-col>
              </template>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="editing = null">Annulla</v-btn>
          <v-btn color="green" variant="flat" :loading="saving" @click="save">Salva</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog :model-value="!!toDelete" max-width="460" @update:model-value="toDelete = null">
      <v-card :title="`Elimina ${itemLabel}`" :text="deleteText ? deleteText(toDelete!) : `Vuoi veramente eliminare questo elemento?`">
        <v-card-actions>
          <v-spacer />
          <v-btn @click="toDelete = null">Annulla</v-btn>
          <v-btn color="red" variant="flat" @click="confirmDelete">Elimina</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
