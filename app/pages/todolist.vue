<script setup lang="ts">
useHead({ title: 'Calendario / To Do – Helaproject' })
import type { CalEvent } from '~/components/MonthCalendar.vue'

const api = useApi()
const toast = useSnackbar()
const { user } = useAuth()

const deadlinesMode = ref(false) // false = Attività svolte, true = Scadenze task
const projectId = ref<number | null>(null)
const onlyMine = ref(true)
const projects = ref<{ value: number, title: string, status: string }[]>([])
const range = ref<[string, string] | null>(null)
const hours = ref<any[]>([])
const allHours = ref<any[]>([])
const deadlines = ref<any[]>([])
const calendarDays = ref<{ date: string, name: string, color: string | null, type: string }[]>([])
const tasks = ref<any[]>([])

onMounted(async () => {
  projects.value = (await api<any[]>('project/activelist', { body: {} }))
    .filter(p => p.type !== 'F').map(p => ({ value: p.id, title: `[${p.code}] ${p.name}`, status: p.status }))
  await loadTasks()
})
async function loadTasks() {
  tasks.value = await api<any[]>('task/getmytasks', { body: { project_id: projectId.value, onlymytask: onlyMine.value } })
}
async function loadCalendar() {
  if (!range.value) return
  const [start, end] = range.value
  try {
    calendarDays.value = await api('holiday/isholidaydate/0', { body: { start, end } })
    if (deadlinesMode.value) {
      deadlines.value = await api<any[]>('task/getscadenze', { body: { start, end, onlymytask: onlyMine.value } })
    }
    else {
      hours.value = await api<any[]>('hour/list', { body: { start, end, project_id: projectId.value } })
      // il grafico considera sempre tutte le ore dell'utente, anche con il filtro progetto
      allHours.value = projectId.value ? await api<any[]>('hour/list', { body: { start, end } }) : hours.value
    }
  }
  catch (e: any) { toast.error(e.message) }
}
watch([range, deadlinesMode], loadCalendar)
watch([projectId, onlyMine], () => { loadTasks(); loadCalendar() })

const closed = computed(() => new Set(calendarDays.value.filter(d => d.type === 'F' || d.type === 'C').map(d => d.date)))
const totColor = (h: number) => (h < 8 ? '#e53935' : h > 8 ? '#fb8c00' : '#43a047')

const events = computed<CalEvent[]>(() => {
  const out: CalEvent[] = calendarDays.value.map(d => ({ id: `cal-${d.date}-${d.name}`, date: d.date, name: d.name, color: d.color }))
  if (deadlinesMode.value) {
    for (const r of deadlines.value) {
      out.push({ id: `t-${r.Task.id}`, date: r.Task.enddate.slice(0, 10), name: `[${r.Project.code}] ${r.Project.name} - ${r.Task.shortname}`,
        color: r.Task.color, clickable: true })
    }
    return out
  }
  const perDay = new Map<string, number>()
  for (const h of hours.value) {
    const d = h.startdate.slice(0, 10)
    perDay.set(d, (perDay.get(d) ?? 0) + h._ore)
    out.push({ id: h.id, date: d, name: h.task_name, color: h.color, time: h.startdate.slice(11, 16), clickable: true })
  }
  for (const [d, tot] of perDay) out.push({ id: `tot-${d}`, date: d, name: `TOT ORE: ${tot.toFixed(2)}`, color: totColor(tot), bold: true })
  return out.sort((a, b) => Number(String(a.id).startsWith('tot')) - Number(String(b.id).startsWith('tot')))
})

// Grafico "Ore totali per giorno": ferie / normali / straordinari / mancanti, come l'originale
const chart = computed(() => {
  if (!range.value) return null
  const today = localDay()
  const days = dayRange(...range.value)
  const s = { ferie: [] as number[], normali: [] as number[], extra: [] as number[], mancanti: [] as number[] }
  for (const d of days) {
    const rows = allHours.value.filter(h => h.startdate.startsWith(d))
    const B = rows.filter(h => h.acttype === 'F').reduce((a, h) => a + h._ore, 0)
    const oe = rows.filter(h => h.acttype !== 'F').reduce((a, h) => a + h._ore, 0)
    const off = isWeekendDay(d) || closed.value.has(d)
    const normali = off ? 0 : Math.min(oe, Math.max(0, 8 - B))
    s.ferie.push(+B.toFixed(2))
    s.normali.push(+normali.toFixed(2))
    s.extra.push(+(off ? oe : Math.max(0, oe - Math.max(0, 8 - B))).toFixed(2))
    s.mancanti.push(!off && d <= today && B + oe < 8 ? +(8 - B - normali).toFixed(2) : 0)
  }
  const sum = (a: number[]) => a.reduce((x, y) => x + y, 0).toLocaleString('it-IT', { maximumFractionDigits: 2 })
  const workable = days.filter(d => !isWeekendDay(d) && !closed.value.has(d)).length * 8
  return {
    workable,
    series: [
      { name: `Ferie/Permessi/Malattia (${sum(s.ferie)} h)`, data: s.ferie },
      { name: `Ore normali (${sum(s.normali)} h)`, data: s.normali },
      { name: `Straordinario (${sum(s.extra)} h)`, data: s.extra },
      { name: `Mancanti (${sum(s.mancanti)} h)`, data: s.mancanti },
    ],
    options: {
      chart: { type: 'bar', stacked: true, toolbar: { show: false }, animations: { enabled: false } },
      colors: ['#9e9e9e', '#43a047', '#fb8c00', '#ff0000'],
      xaxis: { categories: days.map(d => d.slice(8, 10)) },
      yaxis: { max: 12, tickAmount: 6 },
      annotations: { yaxis: [{ y: 8, yAxisIndex: 0, borderColor: '#555', label: { text: '8 ore' } }] },
      dataLabels: { enabled: false }, legend: { position: 'top' },
      plotOptions: { bar: { columnWidth: '70%' } },
    },
  }
})

// --- dialog ---
const hourDialog = ref<{ open: boolean, hourId?: number | null, taskId?: number | null, date?: string | null }>({ open: false })
const viewTask = ref<number | null>(null)
const toComplete = ref<any>(null)
function onEvent(e: CalEvent) {
  if (deadlinesMode.value) viewTask.value = Number(String(e.id).slice(2))
  else hourDialog.value = { open: true, hourId: Number(e.id) }
}
function onDay(d: string) {
  if (!deadlinesMode.value) hourDialog.value = { open: true, date: d }
}
async function onHourSaved() {
  hourDialog.value = { open: false }
  await Promise.all([loadCalendar(), loadTasks()])
}
async function complete() {
  const t = toComplete.value
  toComplete.value = null
  try {
    await api('task/completetask', { body: { task_id: t.Task.id } })
    toast.success('Task completato')
    await loadTasks()
  }
  catch (e: any) { toast.error(e.message) }
}
const deadlineColor = (d: string | null) => {
  if (!d) return ''
  const today = localDay()
  return d.slice(0, 10) <= today ? 'text-red' : d.slice(0, 10) <= addDays(today, 10) ? 'text-orange' : ''
}
const mineTask = (r: any) => r.User?.id === user.value?.id
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center flex-wrap ga-2 my-4">
      <h1 class="text-h5 page-title mr-auto">Calendario / To Do</h1>
      <v-btn color="green" prepend-icon="mdi-timer-plus-outline" @click="hourDialog = { open: true }">Report mie ore</v-btn>
    </div>
    <v-row>
      <v-col cols="12" lg="7">
        <v-card variant="outlined" class="pa-3">
          <div class="d-flex align-center mb-2">
            <v-switch v-model="deadlinesMode" color="primary" inset hide-details
              :label="deadlinesMode ? 'Scadenze task' : 'Calendario attività svolte'" />
          </div>
          <template v-if="!deadlinesMode && chart">
            <div class="text-subtitle-2">Ore totali per giorno <span class="text-medium-emphasis">· ore lavorabili nel periodo: {{ chart.workable }} h</span></div>
            <ClientOnly><apexchart type="bar" height="220" :options="chart.options" :series="chart.series" /></ClientOnly>
          </template>
          <MonthCalendar :events="events" @range="(a, b) => (range = [a, b])" @click:day="onDay" @click:event="onEvent" />
        </v-card>
      </v-col>
      <v-col cols="12" lg="5">
        <v-card variant="outlined" class="pa-3">
          <div class="text-subtitle-1 font-weight-medium mb-2">Assegnazioni</div>
          <div class="d-flex flex-wrap ga-2 align-center mb-2">
            <v-autocomplete v-model="projectId" :items="projects" label="Progetto" clearable hide-details style="min-width: 240px">
              <template #item="{ props: ip, item }">
                <v-list-item v-bind="ip">
                  <template #append><v-chip :color="statusColor(item.status)" size="x-small" label variant="elevated">{{ item.status }}</v-chip></template>
                </v-list-item>
              </template>
            </v-autocomplete>
            <v-checkbox v-model="onlyMine" label="Solo i miei task" hide-details density="compact" />
          </div>
          <v-list density="compact" lines="three">
            <v-list-item v-for="r in tasks" :key="r.Task.id" :style="{ opacity: r.Task.status === 'P' ? 0.5 : 1 }">
              <template #prepend>
                <v-icon :color="r.Project.color">{{ mineTask(r) ? 'mdi-folder-account' : 'mdi-folder' }}</v-icon>
              </template>
              <v-list-item-title class="text-wrap">[{{ r.Project.code }}] {{ r.Project.name }} - {{ r.Task.shortname }}</v-list-item-title>
              <div class="text-caption">
                {{ (r.Task.hours / 8).toLocaleString('it-IT') }} giornate allocate / {{ ((r.Task.hours - r.Task.rhours) / 8).toLocaleString('it-IT', { maximumFractionDigits: 2 }) }} residue
                · Assegnato: {{ r.User ? `${r.User.firstname} ${r.User.lastname}` : '—' }}
              </div>
              <div class="text-caption">
                Scadenza: <span :class="deadlineColor(r.Task.enddate)">{{ formatDate(r.Task.enddate) || '—' }}</span>
                · Stato: <span :class="r.Task.status === 'P' ? 'text-blue' : 'text-orange'">{{ TASK_STATUSES.find(s => s.code === r.Task.status)?.name }}</span>
              </div>
              <template #append>
                <v-btn v-if="r.Task.status !== 'P' && mineTask(r)" icon="mdi-timer-plus-outline" size="small" variant="text" color="green" title="Registra ore"
                  @click="hourDialog = { open: true, taskId: r.Task.id }" />
                <v-btn v-if="r.Task.status === 'A' && mineTask(r)" icon="mdi-check" size="small" variant="text" color="blue" title="Completa task" @click="toComplete = r" />
                <v-btn icon="mdi-information-outline" size="small" variant="text" title="Dettagli task" @click="viewTask = r.Task.id" />
              </template>
            </v-list-item>
            <v-list-item v-if="!tasks.length" title="Nessun task assegnato" />
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <HourEntryDialog v-if="hourDialog.open" :hour-id="hourDialog.hourId" :task-id="hourDialog.taskId" :date="hourDialog.date"
      @close="hourDialog = { open: false }" @saved="onHourSaved" />
    <TaskViewDialog v-if="viewTask" :task-id="viewTask" @close="viewTask = null" />
    <v-dialog :model-value="!!toComplete" max-width="440" @update:model-value="toComplete = null">
      <v-card title="Completamento task" text="Confermi il completamento del task? I responsabili del progetto riceveranno una notifica.">
        <v-card-actions><v-spacer /><v-btn @click="toComplete = null">Annulla</v-btn><v-btn color="blue" variant="flat" @click="complete">Completa</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
