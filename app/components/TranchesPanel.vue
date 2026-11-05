<script setup lang="ts">
// Tranche di pagamento: dentro un progetto (projectId) o elenco generale con filtri (adminpaymenttranches).
const props = defineProps<{ projectId?: number | null, projectLabel?: string }>()
const route = useRoute()
const api = useApi()
const toast = useSnackbar()
const { user } = useAuth()
const L = useLookups()
const canWrite = computed(() => user.value?.hasinvoice === 1)
const admin = computed(() => !props.projectId)

const [m0, m1] = [addDays(localDay(), -31), localDay()]
const { filters, save: saveFilters } = useStoredFilters('hp.filtri.tranche', { project: null as number | null, from: m0, to: m1 })
const rows = ref<any[]>([])
const loading = ref(false)
const search = ref('')

async function load() {
  loading.value = true
  try {
    if (admin.value) {
      saveFilters()
      rows.value = await api<any[]>('invoice/tranchelist', { body: { project: filters.project, from: filters.from, to: filters.to } })
    }
    else rows.value = await api<any[]>(`invoice/tranchelist/${props.projectId}`)
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(async () => {
  await L.load(['clients', 'projects'])
  await load()
  if (route.query.trancheid) open(Number(route.query.trancheid))
})
const typeTitle = (c: string) => TRANCHE_TYPES.find(t => t.value === c)?.title ?? c
const total = computed(() => rows.value.reduce((a, r) => a + r.total, 0))
const headers = computed(() => [
  ...(admin.value ? [{ title: 'Progetto', key: 'project_code' }] : []),
  { title: 'Cliente', key: 'client_id' }, { title: 'Sponsor', key: 'sponsor' }, { title: 'Tipo', key: 'type' },
  { title: 'Milestone', key: 'description' }, { title: 'Prev. emissione', key: 'previewdate' }, { title: 'Fattura emessa', key: 'invoicedate' },
  { title: 'Prev. pagamento', key: 'paymentdate' }, { title: 'Imponibile', key: 'total', align: 'end' as const },
  { title: '', key: 'actions', sortable: false, align: 'end' as const },
])

const dialog = ref<{ id: number | null, readonly: boolean } | null>(null)
const invoiceFor = ref<number | null>(null)
function open(id: number | null, readonly = false) { dialog.value = { id, readonly } }
const toDelete = ref<any>(null)
async function remove() {
  const r = toDelete.value
  toDelete.value = null
  try { await api(`invoice/tranchedelete/${r.id}`, { method: 'POST' }); toast.success('Tranche eliminata'); await load() }
  catch (e: any) { toast.error(e.message) }
}
function exportRows() {
  exportXlsx(admin.value ? 'export-tranches.xlsx' : `export-tranches-progetto-${props.projectLabel}.xlsx`, 'Tranches', [
    { header: 'Progetto', key: 'progetto', width: 40 }, { header: 'Cliente', key: 'cliente', width: 30 }, { header: 'Sponsor', key: 'sp', width: 30 },
    { header: 'Tipo', key: 'tipo' }, { header: 'Milestone', key: 'description', width: 30 }, { header: 'Data prev. emissione', key: 'previewdate', type: 'date' },
    { header: 'Data prev. pagamento', key: 'paymentdate', type: 'date' }, { header: 'Emessa fattura', key: 'em' },
    { header: 'Data emissione fattura', key: 'invoicedate', type: 'date' }, { header: 'Imponibile', key: 'total', type: 'eur' },
    { header: 'IVA', key: 'vat', type: 'eur' }, { header: 'Note', key: 'note', width: 40 },
  ], rows.value.map(r => ({ ...r, progetto: `[${r.project_code}] ${r.project_name}`, cliente: L.name(L.clients, r.client_id),
    sp: r.sponsor ? L.name(L.clients, r.sponsor) : '', tipo: typeTitle(r.type), em: r.emessa ? 'Si' : 'No' })))
}
</script>

<template>
  <div>
    <v-row v-if="admin" density="compact" class="mb-2">
      <v-col cols="12" md="5"><v-autocomplete v-model="filters.project" :items="L.projects.value" label="Progetto" clearable hide-details /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="filters.from" type="date" label="Emissione dal" hide-details /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="filters.to" type="date" label="al" hide-details /></v-col>
      <v-col cols="12" md="3"><v-btn color="white" variant="elevated" prepend-icon="mdi-magnify" :loading="loading" @click="load">Cerca</v-btn></v-col>
    </v-row>
    <div class="d-flex flex-wrap ga-2 mb-2">
      <v-btn v-if="canWrite" color="green" prepend-icon="mdi-plus" @click="open(null)">Nuova tranche</v-btn>
      <v-btn color="primary" prepend-icon="mdi-microsoft-excel" :disabled="!rows.length" @click="exportRows">XLS</v-btn>
    </div>
    <v-data-table :items="rows" :headers="headers" :search="search" :loading="loading" density="compact" :items-per-page="-1"
      :items-per-page-options="[10, 25, 50, { value: -1, title: 'Tutti' }]" no-data-text="Nessuna tranche">
      <template #top><v-text-field v-model="search" label="Cerca" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable /></template>
      <template #[`item.project_code`]="{ item }"><NuxtLink :to="`/projects/${item.project_id}`">[{{ item.project_code }}] {{ item.project_name }}</NuxtLink></template>
      <template #[`item.client_id`]="{ item }">{{ L.name(L.clients, item.client_id) }}</template>
      <template #[`item.sponsor`]="{ item }">{{ item.sponsor ? L.name(L.clients, item.sponsor) : '' }}</template>
      <template #[`item.type`]="{ item }"><v-chip size="small" label>{{ typeTitle(item.type) }}</v-chip></template>
      <template #[`item.previewdate`]="{ item }">{{ fmtDay(item.previewdate) }}</template>
      <template #[`item.invoicedate`]="{ item }">
        <v-chip v-if="item.emessa" size="small" :color="item.payed === 'P' ? 'green' : 'orange'" label>{{ fmtDay(item.invoicedate) }}{{ item.payed === 'P' ? ' · pagata' : '' }}</v-chip>
      </template>
      <template #[`item.paymentdate`]="{ item }">{{ fmtDay(item.paymentdate) }}</template>
      <template #[`item.total`]="{ item }">{{ formatEur(item.total) }}</template>
      <template #[`item.actions`]="{ item }">
        <v-menu>
          <template #activator="{ props: p }"><v-btn v-bind="p" icon="mdi-dots-vertical" variant="text" size="small" /></template>
          <v-list density="compact">
            <v-list-item v-if="canWrite" prepend-icon="mdi-pencil" title="Modifica" @click="open(item.id)" />
            <v-list-item v-else prepend-icon="mdi-eye" title="Visualizza" @click="open(item.id, true)" />
            <v-list-item v-if="canWrite && !item.emessa" prepend-icon="mdi-file-document-plus-outline" title="Genera fattura" @click="invoiceFor = item.id" />
            <v-list-item v-if="canWrite && !item.emessa" prepend-icon="mdi-delete-outline" base-color="red" title="Elimina" @click="toDelete = item" />
          </v-list>
        </v-menu>
      </template>
      <template v-if="!admin" #[`body.append`]>
        <tr class="font-weight-bold"><td colspan="7">Totale</td><td class="text-end">{{ formatEur(total) }}</td><td /></tr>
      </template>
    </v-data-table>

    <TrancheDialog v-if="dialog" :tranche-id="dialog.id" :project-id="projectId" :readonly="dialog.readonly"
      @close="dialog = null" @saved="dialog = null; load()" @invoice="(id) => { dialog = null; invoiceFor = id }" />
    <ActiveInvoiceDialog v-if="invoiceFor" :tranche-id="invoiceFor" :project-id="projectId" @close="invoiceFor = null" @saved="invoiceFor = null; load()" />
    <v-dialog :model-value="!!toDelete" max-width="440" @update:model-value="toDelete = null">
      <v-card title="Elimina tranche" text="Vuoi veramente eliminare la tranche selezionata?">
        <v-card-actions><v-spacer /><v-btn @click="toDelete = null">Annulla</v-btn><v-btn color="red" variant="flat" @click="remove">Elimina</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
