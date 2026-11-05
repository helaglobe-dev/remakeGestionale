<script setup lang="ts">
// Fatture attive: di un progetto o elenco generale con filtri (adminactiveinvoices). Righe arancioni = scadute non pagate.
const props = defineProps<{ projectId?: number | null, projectLabel?: string }>()
const route = useRoute()
const api = useApi()
const toast = useSnackbar()
const { user } = useAuth()
const L = useLookups()
const canWrite = computed(() => user.value?.hasinvoice === 1)
const admin = computed(() => !props.projectId)

const { filters, save: saveFilters } = useStoredFilters('hp.filtri.fattureattive', { client: null as number | null, project: null as number | null, from: addDays(localDay(), -31), to: localDay() })
const rows = ref<any[]>([])
const loading = ref(false)
const search = ref('')
async function load() {
  loading.value = true
  try {
    if (admin.value) {
      saveFilters()
      rows.value = await api<any[]>('invoice/activelist', { body: { ...filters } })
    }
    else rows.value = await api<any[]>(`invoice/activelist/${props.projectId}`)
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(async () => {
  await L.load(['clients', 'projects', 'banks'])
  await load()
  if (route.query.id && admin.value) dialog.value = { id: Number(route.query.id), readonly: !canWrite.value }
  if (route.query.trancheid) dialog.value = { id: null, readonly: false, trancheId: Number(route.query.trancheid) }
})
const overdue = (r: any) => r.payed === 'N' && r.paymentduedate < localDay()
const headers = computed(() => [
  { title: 'Cliente', key: 'cliente' }, ...(admin.value ? [{ title: 'Progetto', key: 'project_code' }] : []),
  { title: 'Numero', key: 'invoicenumber' }, { title: 'Data', key: 'invoicedate' }, { title: 'Totale', key: 'total', align: 'end' as const },
  { title: 'Scadenza', key: 'paymentduedate' }, { title: 'Pagamento', key: 'payed' }, { title: 'Banca', key: 'bank_id' },
  { title: 'Anticipo', key: 'anticipobancario' }, { title: '', key: 'actions', sortable: false, align: 'end' as const },
])
const dialog = ref<{ id: number | null, readonly: boolean, trancheId?: number } | null>(null)
const toDelete = ref<any>(null)
async function remove() {
  const r = toDelete.value
  toDelete.value = null
  try { await api(`invoice/activedelete/${r.id}`, { method: 'POST' }); toast.success('Fattura eliminata'); await load() }
  catch (e: any) { toast.error(e.message) }
}
function exportRows() {
  exportXlsx(admin.value ? 'export-fatture-attive.xlsx' : `export-fatture-attive-progetto-${props.projectLabel}.xlsx`, 'Fatture Attive', [
    { header: 'Progetto', key: 'progetto', width: 40 }, { header: 'Cliente', key: 'cl', width: 30 }, { header: 'Numero F.', key: 'invoicenumber' },
    { header: 'Data F.', key: 'invoicedate', type: 'date' }, { header: 'Imponibile', key: 'taxable', type: 'eur' }, { header: 'Iva', key: 'vat', type: 'eur' },
    { header: 'Totale', key: 'total', type: 'eur' }, { header: 'Data scadenza', key: 'paymentduedate', type: 'date' }, { header: 'Pagata', key: 'pg' },
    { header: 'Data pagamento', key: 'payment_date', type: 'date' }, { header: 'Banca', key: 'bk', width: 20 }, { header: 'Anticipo bancario', key: 'ab' },
    { header: 'Note', key: 'note', width: 40 },
  ], rows.value.map(r => ({ ...r, progetto: `[${r.project_code}] ${r.project_name}`, cl: L.name(L.clients, r.cliente),
    pg: r.payed === 'P' ? 'Si' : 'No', bk: L.name(L.banks, r.bank_id), ab: r.anticipobancario ? 'Si' : 'No' })))
}
const rowProps = ({ item }: { item: any }) => (overdue(item) ? { class: 'bg-orange-lighten-4' } : {})
</script>

<template>
  <div>
    <v-row v-if="admin" density="compact" class="mb-2">
      <v-col cols="12" md="3"><v-autocomplete v-model="filters.client" :items="L.clients.value" label="Cliente" clearable hide-details /></v-col>
      <v-col cols="12" md="3"><v-autocomplete v-model="filters.project" :items="L.projects.value" label="Progetto" clearable hide-details /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="filters.from" type="date" label="Scadenza dal" hide-details /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="filters.to" type="date" label="al" hide-details /></v-col>
      <v-col cols="12" md="2"><v-btn color="white" variant="elevated" prepend-icon="mdi-magnify" :loading="loading" @click="load">Cerca</v-btn></v-col>
    </v-row>
    <div class="d-flex flex-wrap ga-2 mb-2">
      <v-btn v-if="canWrite" color="green" prepend-icon="mdi-plus" @click="dialog = { id: null, readonly: false }">Registra fattura</v-btn>
      <v-btn color="primary" prepend-icon="mdi-microsoft-excel" :disabled="!rows.length" @click="exportRows">XLS</v-btn>
    </div>
    <v-data-table :items="rows" :headers="headers" :search="search" :loading="loading" density="compact" :items-per-page="-1"
      :row-props="rowProps" no-data-text="Nessuna fattura">
      <template #top><v-text-field v-model="search" label="Cerca" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable /></template>
      <template #[`item.cliente`]="{ item }"><span :title="`ID ${item.id}`">{{ L.name(L.clients, item.cliente) }}</span></template>
      <template #[`item.project_code`]="{ item }"><NuxtLink :to="`/projects/${item.project_id}`">[{{ item.project_code }}] {{ item.project_name }}</NuxtLink></template>
      <template #[`item.invoicedate`]="{ item }">{{ fmtDay(item.invoicedate) }}</template>
      <template #[`item.total`]="{ item }">{{ formatEur(item.total) }}</template>
      <template #[`item.paymentduedate`]="{ item }">{{ fmtDay(item.paymentduedate) }}</template>
      <template #[`item.payed`]="{ item }"><v-chip size="small" label :color="item.payed === 'P' ? 'green' : 'orange'">{{ item.payed === 'P' ? 'Pagata' : 'Non pagata' }}</v-chip></template>
      <template #[`item.bank_id`]="{ item }">{{ L.name(L.banks, item.bank_id) }}</template>
      <template #[`item.anticipobancario`]="{ item }"><v-icon v-if="item.anticipobancario" color="green">mdi-check</v-icon></template>
      <template #[`item.actions`]="{ item }">
        <v-btn :icon="canWrite ? 'mdi-pencil' : 'mdi-eye'" size="small" variant="text" @click="dialog = { id: item.id, readonly: !canWrite }" />
        <v-btn v-if="canWrite" icon="mdi-delete-outline" size="small" variant="text" color="red" @click="toDelete = item" />
      </template>
    </v-data-table>
    <ActiveInvoiceDialog v-if="dialog" :invoice-id="dialog.id" :tranche-id="dialog.trancheId" :project-id="projectId" :readonly="dialog.readonly"
      @close="dialog = null" @saved="dialog = null; load()" />
    <v-dialog :model-value="!!toDelete" max-width="440" @update:model-value="toDelete = null">
      <v-card title="Elimina fattura" :text="`Vuoi veramente eliminare la fattura n. ${toDelete?.invoicenumber}?`">
        <v-card-actions><v-spacer /><v-btn @click="toDelete = null">Annulla</v-btn><v-btn color="red" variant="flat" @click="remove">Elimina</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
