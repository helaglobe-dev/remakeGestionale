<script setup lang="ts">
useHead({ title: 'Imputazione ore – Helaproject' })
const api = useApi()
const toast = useSnackbar()

const users = ref<{ value: number, title: string, acronym: string }[]>([])
const projects = ref<{ value: number, title: string }[]>([])
const selected = ref<number[]>([])
const from = ref(addDays(localDay(), -30))
const to = ref(localDay())
const projectId = ref<number | null>(null)
const rows = ref<any[]>([])
const stats = ref<any[]>([])
const hidden = ref<number[]>([])
const loading = ref(false)

onMounted(async () => {
  const [u, p] = await Promise.all([api<any[]>('user/list'), api<any[]>('project/list')])
  users.value = u.filter(x => x.activeuser).map(x => ({ value: x.id, title: `${x.firstname} ${x.lastname}`, acronym: x.acronym ?? '' }))
  projects.value = p.map(x => ({ value: x.id, title: `[${x.code}] - ${x.name}` }))
  selected.value = users.value.map(x => x.value)
  await load()
})
async function load() {
  if (!selected.value.length) { rows.value = []; stats.value = []; return }
  loading.value = true
  try {
    const body = { from: from.value, to: to.value, user_id: selected.value }
    ;[rows.value, stats.value] = await Promise.all([
      api<any[]>('hour/getuserhours', { body: { ...body, project_id: projectId.value } }),
      api<any[]>('hour/getStatisticheDipendenti', { body }),
    ])
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
function preset(k: Parameters<typeof presetRange>[0]) { [from.value, to.value] = presetRange(k); load() }
const userName = (id: number) => users.value.find(u => u.value === id)?.title ?? `#${id}`

const table = computed(() => rows.value.map(r => ({
  id: r.Hour.id, user: userName(r.Hour.user_id), project: `[${r.Project.code}] - ${r.Project.name}`, task: r.Task.shortname,
  date: r.Hour.startdate, ore: r.Hour._ore, activity: r.Activity?.name ?? '',
})))

const dailyChart = computed(() => {
  const days = dayRange(from.value, to.value)
  return {
    series: selected.value.map(u => ({
      name: userName(u),
      data: days.map(d => +rows.value.filter(r => r.Hour.user_id === u && r.Hour.startdate.startsWith(d)).reduce((s, r) => s + r.Hour._ore, 0).toFixed(2)),
    })),
    options: {
      chart: { type: 'line', toolbar: { show: false }, animations: { enabled: false } },
      xaxis: { categories: days.map(fmtDay), labels: { rotate: -45 } }, yaxis: { max: 12, min: 0 },
      stroke: { width: 2 }, annotations: { yaxis: [{ y: 8, yAxisIndex: 0, borderColor: '#e53935', label: { text: '8h giornaliere' } }] },
      legend: { position: 'top' },
    },
  }
})
const statsShown = computed(() => stats.value.filter(s => !hidden.value.includes(s.user_id)))
const statsChart = computed(() => ({
  series: [
    { name: 'Giorni lavorati', type: 'column', data: statsShown.value.map(s => s.lavorati) },
    { name: 'Ferie', type: 'column', data: statsShown.value.map(s => s.ferie) },
    { name: 'Straordinari', type: 'column', data: statsShown.value.map(s => s.straordinari) },
    { name: 'Mancanze', type: 'column', data: statsShown.value.map(s => s.mancanze) },
    { name: 'Giorni lavorativi', type: 'line', data: statsShown.value.map(s => s.lavorativi) },
  ],
  options: {
    chart: { stacked: true, toolbar: { show: false }, animations: { enabled: false } },
    colors: ['#43a047', '#9e9e9e', '#fb8c00', '#e53935', '#1e88e5'],
    xaxis: { categories: statsShown.value.map(s => s.sigla) }, yaxis: { min: 0, labels: { formatter: (v: number) => `${v}` } }, legend: { position: 'top' },
    tooltip: { y: { formatter: (v: number) => `${v} gg` } }, stroke: { width: [0, 0, 0, 0, 3] },
  },
}))

async function exportXlsx() {
  const { default: ExcelJS } = await import('exceljs')
  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet('Imputazione Ore')
  ws.columns = [{ header: 'Nome', key: 'user', width: 30 }, { header: 'Progetto', key: 'project', width: 60 }, { header: 'Task', key: 'task', width: 60 },
    { header: 'Data/Ora', key: 'date', width: 20 }, { header: 'Durata', key: 'dur', width: 20 }, { header: 'Attività', key: 'activity', width: 25 }]
  ws.getRow(1).font = { bold: true }
  table.value.forEach(r => ws.addRow({ ...r, date: `${fmtDay(r.date.slice(0, 10))} ${r.date.slice(11)}`, dur: fmtHours(r.ore) }))
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([await wb.xlsx.writeBuffer()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })),
    download: 'export-imputazione-ore.xlsx',
  })
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center flex-wrap ga-2 my-4">
      <h1 class="text-h5 page-title mr-auto">Imputazione ore</h1>
      <v-btn color="primary" prepend-icon="mdi-microsoft-excel" :disabled="!table.length" @click="exportXlsx">XLS</v-btn>
    </div>
    <v-row density="compact">
      <v-col cols="12" md="4">
        <v-autocomplete v-model="selected" :items="users" label="Dipendenti" multiple chips closable-chips clearable hide-details />
      </v-col>
      <v-col cols="6" md="2"><v-text-field v-model="from" type="date" label="Dal" hide-details /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="to" type="date" label="Al" hide-details /></v-col>
      <v-col cols="12" md="3"><v-autocomplete v-model="projectId" :items="projects" label="Progetto" clearable hide-details /></v-col>
      <v-col cols="12" md="1" class="d-flex ga-1">
        <v-menu>
          <template #activator="{ props }"><v-btn v-bind="props" icon="mdi-calendar-range" variant="text" title="Periodi rapidi" /></template>
          <v-list density="compact"><v-list-item v-for="[k, t] in PRESETS" :key="k" :title="t" @click="preset(k)" /></v-list>
        </v-menu>
        <v-btn color="primary" icon="mdi-magnify" title="Cerca" :loading="loading" @click="load" />
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="12" lg="6">
        <v-card variant="outlined" class="pa-3">
          <div class="text-subtitle-2">Ore giornaliere <span class="text-medium-emphasis">· ore registrate rispetto alle 8 ore giornaliere</span></div>
          <ClientOnly><apexchart v-if="dailyChart.series.length" type="line" height="300" :options="dailyChart.options" :series="dailyChart.series" /></ClientOnly>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6">
        <v-card variant="outlined" class="pa-3">
          <div class="text-subtitle-2">Giorni lavorativi vs giorni lavorati</div>
          <ClientOnly><apexchart v-if="statsShown.length" type="line" height="270" :options="statsChart.options" :series="statsChart.series" /></ClientOnly>
          <div class="d-flex flex-wrap ga-1">
            <v-chip v-for="s in stats" :key="s.user_id" size="small" :variant="hidden.includes(s.user_id) ? 'outlined' : 'tonal'"
              @click="hidden = hidden.includes(s.user_id) ? hidden.filter(x => x !== s.user_id) : [...hidden, s.user_id]">{{ s.sigla }}</v-chip>
            <v-btn v-if="hidden.length" size="x-small" variant="text" @click="hidden = []">Mostra tutti</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-data-table :items="table" :loading="loading" density="compact" :items-per-page="50" class="mt-4"
      :items-per-page-options="[10, 25, 50, { value: -1, title: 'Tutti' }]" no-data-text="Nessuna registrazione nel periodo"
      :headers="[{ title: 'Nome', key: 'user' }, { title: 'Progetto', key: 'project', sortable: false }, { title: 'Task', key: 'task' },
                 { title: 'Attività', key: 'activity' }, { title: 'Data/Ora', key: 'date' }, { title: 'Durata', key: 'ore', align: 'end' }]">
      <template #[`item.date`]="{ item }">{{ fmtDay(item.date.slice(0, 10)) }} {{ item.date.slice(11, 16) }}</template>
      <template #[`item.ore`]="{ item }">{{ fmtHours(item.ore) }}</template>
    </v-data-table>
  </v-container>
</template>
