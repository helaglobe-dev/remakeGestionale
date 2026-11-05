<script setup lang="ts">
// Storici di progetto: elenco generale con filtri (pagina Storici) o di un singolo progetto (tab Storico).
const props = defineProps<{ projectId?: number | null, canEdit?: boolean }>()
const api = useApi()
const toast = useSnackbar()
const { user } = useAuth()
const L = useLookups()
const admin = computed(() => !props.projectId)
// eliminare: superadmin/admin ovunque, nel progetto anche i responsabili (controllo definitivo lato server)
const canDelete = computed(() => props.canEdit || user.value?.role === 'S' || user.value?.role === 'A')

const { filters, save: saveFilters } = useStoredFilters('hp.filtri.storici', { type: null as string | null, project: null as number | null, from: '', to: '' })
const rows = ref<any[]>([])
const loading = ref(false)
const search = ref('')
const typeItems = Object.entries(HISTORY_TYPES).map(([value, title]) => ({ value, title }))

async function load() {
  loading.value = true
  try {
    if (admin.value) {
      saveFilters()
      rows.value = (await api<any[]>('projecthistory/historieslist', { body: { ...filters, from: filters.from || null, to: filters.to || null } }))
        .map(r => ({ ...r.Projecthistory, code: r.Project.code, name: r.Project.name, client_id: Number(r.Project.client_id) || 0, clientname: r.Project.clientname ?? '', snap: r.Project }))
    }
    else {
      rows.value = (await api<any[]>(`projecthistory/list/${props.projectId}`)).map(r => ({ ...r.Projecthistory, user: r.User.name }))
    }
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(async () => {
  if (admin.value) await L.load(['clients', 'projects'])
  await load()
})
defineExpose({ load })

// per i cambi stato i valori sono codici: si mostra il nome dello stato, come l'originale
const valueLabel = (type: string, v: string | null) => (v ? (type === 'S' ? statusName(v) : type === 'A' ? (v === 'A' ? 'Aperto' : 'Chiuso') : v) : '')
const clientOf = (r: any) => r.clientname || L.name(L.clients, r.client_id)
const headers = computed(() => [
  ...(admin.value ? [{ title: 'Codice', key: 'code' }, { title: 'Nome progetto', key: 'name' }, { title: 'Cliente', key: 'client', value: clientOf }] : []),
  { title: 'Tipo', key: 'type', value: (r: any) => HISTORY_TYPES[r.type as HistoryCode] ?? r.type },
  { title: 'Vecchio valore', key: 'oldvalue', value: (r: any) => valueLabel(r.type, r.oldvalue) },
  { title: 'Nuovo valore', key: 'newvalue', value: (r: any) => valueLabel(r.type, r.newvalue) },
  { title: 'Data/ora creazione', key: 'created' }, { title: 'Utente', key: 'user' },
  { title: '', key: 'actions', sortable: false, align: 'end' as const },
])
// orari salvati già in ora italiana
const fmtTs = (ts: string) => (ts ? `${fmtDay(ts.slice(0, 10))} ${ts.slice(11, 16)}` : '')

const viewing = ref<number | null>(null)
const toDelete = ref<any>(null)
async function remove() {
  const r = toDelete.value
  toDelete.value = null
  try { await api(`projecthistory/delete/${r.id}`, { method: 'POST' }); toast.success('Storico eliminato'); await load() }
  catch (e: any) { toast.error(e.message) }
}
const creating = ref(false)
async function create() {
  creating.value = true
  try { await api(`projecthistory/saveprojecthistory/${props.projectId}`, { method: 'POST' }); toast.success('Storico creato'); await load() }
  catch (e: any) { toast.error(e.message) }
  finally { creating.value = false }
}
function exportRows() {
  exportXlsx('export-storici.xlsx', 'Storici', [
    { header: 'Codice', key: 'code' }, { header: 'Nome progetto', key: 'name', width: 40 }, { header: 'Cliente', key: 'cliente', width: 30 },
    { header: 'Tipo', key: 'tipo', width: 20 }, { header: 'Vecchio valore', key: 'vecchio', width: 24 }, { header: 'Nuovo valore', key: 'nuovo', width: 24 },
    { header: 'Data/ora creazione', key: 'quando', width: 20 }, { header: 'Utente', key: 'user', width: 24 },
    { header: 'Stato progetto', key: 'stato', width: 24 }, { header: 'Apertura', key: 'apertura' }, { header: 'Owner/s', key: 'owners', width: 30 },
    { header: 'Data inizio', key: 'startdate', type: 'date' }, { header: 'Data fine', key: 'enddate', type: 'date' },
    { header: 'Totale progetto', key: 'totale', type: 'eur' }, { header: 'Costo progetto', key: 'costo', type: 'eur' }, { header: 'Margine', key: 'margine', type: 'eur' },
  ], rows.value.map(r => ({
    code: r.code, name: r.name, cliente: clientOf(r), tipo: HISTORY_TYPES[r.type as HistoryCode] ?? r.type,
    vecchio: valueLabel(r.type, r.oldvalue), nuovo: valueLabel(r.type, r.newvalue), quando: fmtTs(r.created), user: r.user,
    stato: statusName(r.snap.status ?? ''), apertura: (r.snap.openstatus ?? 'A') === 'A' ? 'Aperto' : 'Chiuso', owners: ownersText(r.snap.ownersname),
    startdate: r.snap.startdate || null, enddate: r.snap.enddate || null,
    totale: Number(r.snap._totaleprogetto ?? 0), costo: Number(r.snap.costoproposta ?? 0), margine: Number(r.snap._margineprogetto ?? 0),
  })))
}
</script>

<template>
  <div>
    <v-row v-if="admin" density="compact" class="mb-2">
      <v-col cols="12" md="4"><v-autocomplete v-model="filters.project" :items="L.projects.value" label="Progetto" clearable hide-details /></v-col>
      <v-col cols="12" md="2"><v-select v-model="filters.type" :items="typeItems" label="Tipo di storico" clearable hide-details /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="filters.from" type="date" label="Creato dal" hide-details /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="filters.to" type="date" label="al" hide-details /></v-col>
      <v-col cols="12" md="2"><v-btn color="white" variant="elevated" prepend-icon="mdi-magnify" :loading="loading" @click="load">Cerca</v-btn></v-col>
    </v-row>
    <div class="d-flex flex-wrap ga-2 mb-2">
      <v-btn v-if="!admin && canEdit" color="green" prepend-icon="mdi-camera-outline" :loading="creating" @click="create">Crea storico</v-btn>
      <v-btn v-if="admin" color="primary" prepend-icon="mdi-microsoft-excel" :disabled="!rows.length" @click="exportRows">XLS</v-btn>
    </div>
    <v-data-table :items="rows" :headers="headers" :search="search" :loading="loading" density="compact" :items-per-page="25"
      :items-per-page-options="[10, 25, 50, 100, { value: -1, title: 'Tutti' }]" :sort-by="[{ key: 'created', order: 'desc' }]" no-data-text="Nessuno storico">
      <template #top><v-text-field v-model="search" label="Cerca" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable /></template>
      <template #[`item.code`]="{ item }"><NuxtLink class="hg-link" :to="`/projects/${item.project_id}`">{{ item.code }}</NuxtLink></template>
      <template #[`item.type`]="{ item }"><v-chip size="small" label>{{ HISTORY_TYPES[item.type as HistoryCode] ?? item.type }}</v-chip></template>
      <template #[`item.oldvalue`]="{ item }">
        <v-chip v-if="item.type === 'S' && item.oldvalue" :color="statusColor(item.oldvalue)" variant="elevated" size="small" label>{{ statusName(item.oldvalue) }}</v-chip>
        <span v-else>{{ valueLabel(item.type, item.oldvalue) }}</span>
      </template>
      <template #[`item.newvalue`]="{ item }">
        <v-chip v-if="item.type === 'S' && item.newvalue" :color="statusColor(item.newvalue)" variant="elevated" size="small" label>{{ statusName(item.newvalue) }}</v-chip>
        <span v-else>{{ valueLabel(item.type, item.newvalue) }}</span>
      </template>
      <template #[`item.created`]="{ item }">{{ fmtTs(item.created) }}</template>
      <template #[`item.actions`]="{ item }">
        <v-menu>
          <template #activator="{ props: p }"><v-btn v-bind="p" icon="mdi-dots-vertical" variant="text" size="small" aria-label="Azioni" /></template>
          <v-list density="compact">
            <v-list-item prepend-icon="mdi-eye" title="Consulta" @click="viewing = item.id" />
            <v-list-item v-if="canDelete" prepend-icon="mdi-delete-outline" base-color="red" title="Elimina" @click="toDelete = item" />
          </v-list>
        </v-menu>
      </template>
    </v-data-table>

    <HistoryViewDialog v-if="viewing" :history-id="viewing" @close="viewing = null" />
    <v-dialog :model-value="!!toDelete" max-width="440" @update:model-value="toDelete = null">
      <v-card title="Elimina storico" text="Vuoi veramente eliminare lo storico selezionato?">
        <v-card-actions><v-spacer /><v-btn @click="toDelete = null">Annulla</v-btn><v-btn color="red" variant="flat" @click="remove">Elimina</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
