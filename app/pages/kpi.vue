<script setup lang="ts">
useHead({ title: 'KPI – Helaproject' })
// Calcoli economici e KPI di progetto. Formule verificate sui dati reali (spec-fatture-finanza §19).
const api = useApi()
const toast = useSnackbar()
const L = useLookups()
const { filters, save } = useStoredFilters('hp.filtri.kpi', { client: null as number | null, project: null as number | null, aperto: 1 })
const rows = ref<any[]>([])
const loading = ref(false)
const search = ref('')
async function load() {
  loading.value = true
  save()
  try { rows.value = await api<any[]>('invoice/kpi', { body: { ...filters } }) }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(async () => { await L.load(['clients', 'projects']); await load() })
const COLS = [
  ['ricavipresunti', 'Ricavi presunti'], ['ricavi', 'Ricavi effettivi'], ['costipresunti', 'Costi presunti'], ['costi', 'Costi passanti effettivi'],
  ['primomarg', 'Primo margine'], ['margprog', 'Margine di progetto'], ['margcomm', 'Margine commerciale'],
] as const
const headers = [
  { title: 'Codice', key: 'project_code' }, { title: 'Cliente', key: 'client_name' }, { title: 'Progetto', key: 'project_name' },
  ...COLS.map(([key, title]) => ({ title, key, align: 'end' as const })), { title: '% margine', key: 'margpercent', align: 'end' as const },
]
const totals = computed(() => Object.fromEntries(COLS.map(([k]) => [k, rows.value.reduce((a, r) => a + r[k], 0)])))
// legenda originale: >65% in salute, 31–64% da monitorare, ≤30% in perdita
const pctColor = (v: number) => (v <= 30.99 ? '#f76363' : v < 65 ? '#fac314' : '#72de72')
function exportRows() {
  exportXlsx('kpi.xlsx', 'KPI', [
    { header: 'Codice', key: 'project_code' }, { header: 'Cliente', key: 'client_name', width: 30 }, { header: 'Progetto', key: 'project_name', width: 40 },
    ...COLS.map(([key, header]) => ({ header, key, type: 'eur' as const, width: 18 })), { header: '% margine', key: 'margpercent' },
  ], [...rows.value, { project_code: 'Totale', ...totals.value }])
}
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center my-4"><h1 class="text-h5 page-title mr-auto">Calcoli economici e KPI di progetto</h1>
      <v-btn color="primary" prepend-icon="mdi-microsoft-excel" :disabled="!rows.length" @click="exportRows">XLS</v-btn></div>
    <v-row density="compact" class="mb-2">
      <v-col cols="12" md="3"><v-autocomplete v-model="filters.client" :items="L.clients.value" label="Cliente" clearable hide-details /></v-col>
      <v-col cols="12" md="4"><v-autocomplete v-model="filters.project" :items="L.projects.value" label="Progetto" clearable hide-details /></v-col>
      <v-col cols="12" md="3"><v-select v-model="filters.aperto" :items="[{ value: 0, title: 'Tutti' }, { value: 1, title: 'Aperti' }, { value: 2, title: 'Chiusi' }]" label="Progetti" hide-details /></v-col>
      <v-col cols="12" md="2"><v-btn color="white" variant="elevated" prepend-icon="mdi-magnify" :loading="loading" @click="load">Cerca</v-btn></v-col>
    </v-row>
    <div class="text-caption text-medium-emphasis mb-2">
      Primo margine = ricavi − costi passanti · Margine di progetto = primo margine − costo ore interne · Margine commerciale = primo margine − ore interne a prezzo di vendita (stima) · % = margine di progetto ÷ ricavi effettivi.
      <span class="ml-2"><v-chip size="x-small" color="#72de72" variant="flat">≥ 65% in salute</v-chip> <v-chip size="x-small" color="#fac314" variant="flat">31–64% da monitorare</v-chip> <v-chip size="x-small" color="#f76363" variant="flat">≤ 30% in perdita</v-chip></span>
    </div>
    <v-data-table :items="rows" :headers="headers" :search="search" :loading="loading" density="compact" :items-per-page="-1"
      :sort-by="[{ key: 'margpercent', order: 'asc' }]" no-data-text="Nessun progetto">
      <template #top><v-text-field v-model="search" label="Cerca" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable /></template>
      <template #[`item.project_code`]="{ item }"><NuxtLink :to="`/projects/${item.project_id}?tab=economics`">{{ item.project_code }}</NuxtLink></template>
      <template v-for="[k] in COLS" :key="k" #[`item.${k}`]="{ item }"><span class="text-no-wrap">{{ formatEur(item[k]) }}</span></template>
      <template #[`item.margpercent`]="{ item }"><v-chip size="small" variant="flat" :color="pctColor(item.margpercent)">{{ item.margpercent.toLocaleString('it-IT') }} %</v-chip></template>
      <template #[`body.append`]>
        <tr class="font-weight-bold"><td colspan="3">Totale</td><td v-for="[k] in COLS" :key="k" class="text-end text-no-wrap">{{ formatEur(totals[k]) }}</td><td /></tr>
      </template>
    </v-data-table>
  </v-container>
</template>
