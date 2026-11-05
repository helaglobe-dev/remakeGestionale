<script setup lang="ts">
// Fatture passive: di un progetto o elenco generale con filtri (adminpassiveinvoices).
const props = defineProps<{ projectId?: number | null, projectLabel?: string }>()
const route = useRoute()
const api = useApi()
const toast = useSnackbar()
const { user } = useAuth()
const L = useLookups()
const canWrite = computed(() => user.value?.hasinvoice === 1)
const admin = computed(() => !props.projectId)

const { filters, save: saveFilters } = useStoredFilters('hp.filtri.fatturepassive', { supplier: null as number | null, project: null as number | null,
  filtropay: null as string | null, from: addDays(localDay(), -31), to: localDay() })
const rows = ref<any[]>([])
const tasks = ref<Map<number, string>>(new Map())
const loading = ref(false)
const search = ref('')
async function load() {
  loading.value = true
  try {
    if (admin.value) {
      saveFilters()
      rows.value = await api<any[]>('invoice/passivelist', { body: { ...filters } })
    }
    else {
      rows.value = await api<any[]>(`invoice/passivelist/${props.projectId}`)
      tasks.value = new Map((await api<any[]>('task/completelist', { body: { project_id: props.projectId, alsodeleted: 1 } })).map(r => [r.Task.id, r.Task.shortname]))
    }
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(async () => {
  await L.load(['suppliers', 'projects', 'banks'])
  await load()
  if (route.query.id && admin.value) dialog.value = { id: Number(route.query.id), clone: false, readonly: !canWrite.value }
})
const doc = (c: string) => DOCUMENT_TYPES.find(d => d.value === c)
const headers = computed(() => [
  { title: 'Fornitore', key: 'supplier_id' }, { title: 'Documento', key: 'documenttype' }, ...(admin.value ? [{ title: 'Progetti', key: 'projects' }] : []),
  { title: 'Numero', key: 'invoicenumber' }, { title: 'Data', key: 'invoicedate' }, { title: 'Totale', key: 'total', align: 'end' as const },
  ...(!admin.value ? [{ title: 'Quota progetto', key: 'quota', align: 'end' as const }] : []),
  { title: 'Scadenza', key: 'paymentduedate' }, { title: 'Pagamento', key: 'payed' }, { title: 'Priorità', key: 'type' },
  { title: '', key: 'actions', sortable: false, align: 'end' as const },
])
const quota = (r: any) => r.tasks.filter((t: any) => t.project_id === props.projectId).reduce((a: number, t: any) => a + t.taxable, 0)
const dialog = ref<{ id: number | null, clone: boolean, readonly: boolean } | null>(null)
const toDelete = ref<any>(null)
async function remove() {
  const r = toDelete.value
  toDelete.value = null
  try { await api(`invoice/passivedelete/${r.id}`, { method: 'POST' }); toast.success('Fattura eliminata'); await load() }
  catch (e: any) { toast.error(e.message) }
}
function exportRows() {
  const projName = (id: number) => L.name(L.projects, id)
  exportXlsx(admin.value ? 'export-fatture-passive.xlsx' : `export-fatture-passive-progetto-${props.projectLabel}.xlsx`, 'Fatture Passive', [
    { header: 'Documento', key: 'doc' }, { header: 'Fornitore', key: 'forn', width: 30 }, { header: 'Progetto', key: 'prog', width: 40 },
    { header: 'Task', key: 'task', width: 30 }, { header: 'Numero F.', key: 'invoicenumber' }, { header: 'Data F.', key: 'invoicedate', type: 'date' },
    { header: 'Imponibile', key: 'taxable', type: 'eur' }, { header: 'Iva', key: 'vat', type: 'eur' }, { header: 'Totale', key: 'total', type: 'eur' },
    { header: 'Data scadenza', key: 'paymentduedate', type: 'date' }, { header: 'Banca', key: 'bk' }, { header: 'Iban', key: 'iban', width: 30 },
    { header: 'Causale', key: 'causale', width: 30 }, { header: 'Data pagamento', key: 'payment_date', type: 'date' }, { header: 'Pagata', key: 'pg' },
    { header: 'Note', key: 'note', width: 40 },
  ], rows.value.map(r => ({ ...r, doc: doc(r.documenttype)?.title, forn: L.name(L.suppliers, r.supplier_id), prog: r.projects,
    bk: L.name(L.banks, r.bank_id), pg: r.payed === 'P' ? 'Si' : 'No' })), {
    // sottorighe di ripartizione (solo quelle del progetto se esportato dal progetto)
    subRow: r => r.tasks.filter((t: any) => admin.value || t.project_id === props.projectId).map((t: any) => ({
      prog: t.project_id ? projName(t.project_id) : 'Costo aziendale', task: t.task_id ? (tasks.value.get(t.task_id) ?? `#${t.task_id}`) : '',
      taxable: t.taxable, vat: t.vat, total: t.taxable + t.vat })),
  })
}
const rowColor = ({ item }: { item: any }) => ({ class: item.payed === 'P' ? 'bg-green-lighten-5' : '' })
</script>

<template>
  <div>
    <v-row v-if="admin" density="compact" class="mb-2">
      <v-col cols="12" md="3"><v-autocomplete v-model="filters.supplier" :items="L.suppliers.value" label="Fornitore" clearable hide-details /></v-col>
      <v-col cols="12" md="3"><v-autocomplete v-model="filters.project" :items="L.projects.value" label="Progetto" clearable hide-details /></v-col>
      <v-col cols="12" md="2"><v-select v-model="filters.filtropay" :items="[{ value: null, title: 'Tutte' }, { value: 'P', title: 'Pagate' }, { value: 'N', title: 'Da pagare' }]" label="Pagamento" hide-details /></v-col>
      <v-col cols="6" md="1"><v-text-field v-model="filters.from" type="date" label="Scadenza dal" hide-details /></v-col>
      <v-col cols="6" md="1"><v-text-field v-model="filters.to" type="date" label="al" hide-details /></v-col>
      <v-col cols="12" md="2"><v-btn color="white" variant="elevated" prepend-icon="mdi-magnify" :loading="loading" @click="load">Cerca</v-btn></v-col>
    </v-row>
    <div class="d-flex flex-wrap ga-2 mb-2">
      <v-btn v-if="canWrite" color="green" prepend-icon="mdi-plus" @click="dialog = { id: null, clone: false, readonly: false }">Registra fattura</v-btn>
      <v-btn color="primary" prepend-icon="mdi-microsoft-excel" :disabled="!rows.length" @click="exportRows">XLS</v-btn>
    </div>
    <v-data-table :items="rows" :headers="headers" :search="search" :loading="loading" density="compact" :items-per-page="-1" :row-props="rowColor" no-data-text="Nessuna fattura">
      <template #top><v-text-field v-model="search" label="Cerca" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable /></template>
      <template #[`item.supplier_id`]="{ item }">{{ L.name(L.suppliers, item.supplier_id) }}</template>
      <template #[`item.documenttype`]="{ item }"><v-chip size="small" label :color="doc(item.documenttype)?.color">{{ doc(item.documenttype)?.title }}</v-chip></template>
      <template #[`item.invoicedate`]="{ item }">{{ fmtDay(item.invoicedate) }}</template>
      <template #[`item.total`]="{ item }">{{ formatEur(item.total) }}</template>
      <template #[`item.quota`]="{ item }">{{ formatEur(quota(item)) }}</template>
      <template #[`item.paymentduedate`]="{ item }">{{ fmtDay(item.paymentduedate) }}</template>
      <template #[`item.payed`]="{ item }"><v-chip size="small" label :color="item.payed === 'P' ? 'green' : 'grey'">{{ item.payed === 'P' ? 'Pagata' : 'Da pagare' }}</v-chip></template>
      <template #[`item.type`]="{ item }">{{ PRIORITY_TYPES.find(p => p.value === item.type)?.title }}</template>
      <template #[`item.actions`]="{ item }">
        <v-menu>
          <template #activator="{ props: p }"><v-btn v-bind="p" icon="mdi-dots-vertical" variant="text" size="small" /></template>
          <v-list density="compact">
            <v-list-item v-if="canWrite" prepend-icon="mdi-pencil" title="Modifica" @click="dialog = { id: item.id, clone: false, readonly: false }" />
            <v-list-item v-else prepend-icon="mdi-eye" title="Visualizza" @click="dialog = { id: item.id, clone: false, readonly: true }" />
            <v-list-item v-if="canWrite" prepend-icon="mdi-content-copy" title="Duplica" @click="dialog = { id: item.id, clone: true, readonly: false }" />
            <v-list-item v-if="canWrite" prepend-icon="mdi-delete-outline" base-color="red" title="Elimina" @click="toDelete = item" />
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <PassiveInvoiceDialog v-if="dialog" :invoice-id="dialog.id" :clone="dialog.clone" :project-id="projectId" :readonly="dialog.readonly"
      @close="dialog = null" @saved="dialog = null; load()" />
    <v-dialog :model-value="!!toDelete" max-width="440" @update:model-value="toDelete = null">
      <v-card title="Elimina fattura" :text="`Vuoi veramente eliminare la fattura n. ${toDelete?.invoicenumber}?`">
        <v-card-actions><v-spacer /><v-btn @click="toDelete = null">Annulla</v-btn><v-btn color="red" variant="flat" @click="remove">Elimina</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
