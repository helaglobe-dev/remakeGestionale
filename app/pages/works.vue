<script setup lang="ts">
useHead({ title: 'Carichi di lavoro – Helaproject' })
// Carico % = ore di carico ÷ ore disponibili (8 h meno assenze, solo lun–ven) — soglie: 0 grigio, <50 verde, ≤80 arancione, >80 rosso
const api = useApi()
const toast = useSnackbar()

type Load = { presenze: Record<number, Record<string, number>>, holiday: Record<number, Record<string, number>>, tasks: Record<number, any[]> }
const users = ref<{ value: number, title: string, acronym: string }[]>([])
const selected = ref<number[]>([])
const stato = ref<1 | 2>(1)
const periodo = ref<1 | 2 | 3>(1)
const [m0, m1] = presetRange('mese')
const from = ref(m0)
const to = ref(m1)
const load = ref<Load | null>(null)
const closed = ref<Set<string>>(new Set())
const loading = ref(false)

onMounted(async () => {
  users.value = (await api<any[]>('user/list')).filter(u => u.activeuser).map(u => ({ value: u.id, title: `${u.firstname} ${u.lastname}`, acronym: u.acronym ?? '' }))
})
async function refresh() {
  if (!selected.value.length || !from.value || !to.value) return toast.error('Seleziona dipendenti e periodo')
  loading.value = true
  cancelSimulation()
  try {
    const [l, h] = await Promise.all([
      api<Load>('task/getcarico', { body: { stato: stato.value, user: selected.value, from: from.value, to: to.value, periodo: periodo.value } }),
      api<any[]>('holiday/isholidaydate/1', { body: { start: from.value, end: to.value } }),
    ])
    load.value = l
    closed.value = new Set(h.map(x => x.date))
    if (stato.value === 2) await loadSimulationTasks()
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
function preset(k: 'oggi' | 'mese' | 'mesePrec' | 'anno') { [from.value, to.value] = presetRange(k) }

const shown = computed(() => simulated.value ?? load.value)
const columns = computed(() => {
  if (!load.value) return []
  if (periodo.value === 1) {
    return dayRange(from.value, to.value).filter(d => !isWeekendDay(d) && !closed.value.has(d))
      .map(d => ({ key: d, title: `${['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'][weekdayOf(d)]} ${d.slice(8, 10)}/${d.slice(5, 7)}`, days: [d] }))
  }
  const keys = Object.keys(Object.values(load.value.presenze)[0] ?? {}).sort()
  return keys.map((k) => {
    const [a, b] = k.split(' -> ') as [string, string]
    const title = periodo.value === 2 ? `${fmtDay(a).slice(0, 5)}-${fmtDay(b).slice(0, 5)}`
      : new Date(`${a}T12:00:00`).toLocaleDateString('it-IT', { month: 'short', year: 'numeric' })
    return { key: k, title, days: dayRange(a < from.value ? from.value : a, b > to.value ? to.value : b).filter(d => !isWeekendDay(d)) }
  }).filter(c => c.days.length) // settimane/mesi che nel periodo hanno solo giorni di weekend
})
function cell(u: number, col: { key: string, days: string[] }) {
  const l = shown.value!
  const avail = col.days.reduce((s, d) => s + (480 - (l.holiday[u]?.[d] ?? 0)) / 60, 0)
  if (avail <= 0) return { text: '-', color: 'grey' }
  const pct = ((l.presenze[u]?.[col.key] ?? 0) / avail) * 100
  return { text: `${pct.toFixed(0)}%`, color: pct <= 0 ? 'grey' : pct < 50 ? 'green' : pct <= 80 ? 'orange' : 'red' }
}
const userName = (id: number) => users.value.find(u => u.value === id)?.title ?? `#${id}`

// --- dettaglio task che contribuiscono ---
const detailUser = ref<number | null>(null)

// --- simulatore (stato 2) ---
const simTasks = ref<{ value: number, title: string, userId: number }[]>([])
const simTask = ref<number | null>(null)
const simUser = ref<number | null>(null)
const simulated = ref<Load | null>(null)
const confirmSim = ref(false)
async function loadSimulationTasks() {
  const rows = await api<any[]>('task/listsimulation', { body: { from: from.value, to: to.value } })
  simTasks.value = rows.map(r => ({
    value: r.Task.id, userId: r.Task.user_id,
    title: `${r.Project.code} - ${r.Project.name} - ${r.Task.shortname} [${users.value.find(u => u.value === r.Task.user_id)?.acronym || 'Non assegnato'}] || ${fmtDay(r.Task.startdate)} - ${fmtDay(r.Task.enddate)} || ${r.Task.hours}h`,
  }))
}
async function simulate() {
  if (!simTask.value || !simUser.value) return
  const current = simTasks.value.find(t => t.value === simTask.value)!.userId
  if (current === simUser.value) return toast.error('Il task è già assegnato a questo dipendente')
  try {
    const users = [...new Set([...selected.value, simUser.value, ...(current ? [current] : [])])]
    simulated.value = await api<Load>('task/simulate', { body: { task_id: simTask.value, user_id: simUser.value, user: users, from: from.value, to: to.value, periodo: periodo.value } })
    if (!selected.value.includes(simUser.value)) selected.value = [...selected.value, simUser.value]
  }
  catch (e: any) { toast.error(e.message) }
}
function cancelSimulation() { simulated.value = null }
async function accept() {
  confirmSim.value = false
  try {
    await api('task/changeassegnatario', { body: { task_id: simTask.value, user_id: simUser.value } })
    toast.success('Task assegnato con successo')
    simTask.value = null
    simUser.value = null
    await refresh()
  }
  catch (e: any) { toast.error(e.message) }
}
</script>

<template>
  <v-container fluid class="px-6">
    <h1 class="text-h5 page-title my-4">Carichi di lavoro</h1>
    <v-row density="compact">
      <v-col cols="12" md="4">
        <v-autocomplete v-model="selected" :items="users" label="Dipendenti*" multiple chips closable-chips hide-details :disabled="!!simulated" />
      </v-col>
      <v-col cols="12" md="3">
        <v-select v-model="stato" :items="[{ value: 1, title: 'Approvato' }, { value: 2, title: 'Approvato/Confermato/In discussione' }]" label="Stato progetto*" hide-details :disabled="!!simulated" />
      </v-col>
      <v-col cols="6" md="2"><v-text-field v-model="from" type="date" label="Dal*" hide-details :disabled="!!simulated" /></v-col>
      <v-col cols="6" md="2"><v-text-field v-model="to" type="date" label="Al*" hide-details :disabled="!!simulated" /></v-col>
      <v-col cols="12" md="1">
        <v-menu>
          <template #activator="{ props }"><v-btn v-bind="props" icon="mdi-calendar-range" variant="text" :disabled="!!simulated" /></template>
          <v-list density="compact">
            <v-list-item title="Oggi" @click="preset('oggi')" /><v-list-item title="Mese corrente" @click="preset('mese')" />
            <v-list-item title="Mese precedente" @click="preset('mesePrec')" /><v-list-item title="Anno corrente" @click="preset('anno')" />
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" md="3">
        <v-btn-toggle v-model="periodo" mandatory density="compact" variant="outlined" divided :disabled="!!simulated">
          <v-btn :value="1">Giorno</v-btn><v-btn :value="2">Settimana</v-btn><v-btn :value="3">Mese</v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="12" md="2"><v-btn color="primary" prepend-icon="mdi-refresh" :loading="loading" :disabled="!!simulated" @click="refresh">Aggiorna</v-btn></v-col>
    </v-row>

    <v-card v-if="stato === 2 && load" variant="outlined" class="pa-3 my-3">
      <div class="text-subtitle-2 mb-2">Simulatore {{ simulated ? '· simulazione in corso (valori non salvati)' : '' }}</div>
      <v-row density="compact" align="center">
        <v-col cols="12" md="6"><v-autocomplete v-model="simTask" :items="simTasks" label="Task" hide-details :disabled="!!simulated" /></v-col>
        <v-col cols="12" md="3"><v-autocomplete v-model="simUser" :items="users" label="Nuovo assegnatario" hide-details :disabled="!!simulated" /></v-col>
        <v-col cols="12" md="3" class="d-flex ga-2">
          <v-btn v-if="!simulated" color="primary" :disabled="!simTask || !simUser" @click="simulate">Simula</v-btn>
          <template v-else>
            <v-btn color="orange" @click="cancelSimulation">Cancella</v-btn>
            <v-btn color="green" @click="confirmSim = true">Accetta</v-btn>
          </template>
        </v-col>
      </v-row>
    </v-card>

    <div v-if="shown" class="overflow-x-auto mt-3">
      <v-table density="compact" class="works-table">
        <thead>
          <tr><th>Dipendente</th><th v-for="c in columns" :key="c.key" class="text-center">{{ c.title }}</th></tr>
        </thead>
        <tbody>
          <tr v-for="u in selected" :key="u">
            <td class="cell-nowrap">
              <a v-if="!simulated" href="#" title="Task che contribuiscono al calcolo" @click.prevent="detailUser = u">{{ userName(u) }}</a>
              <span v-else>{{ userName(u) }}</span>
            </td>
            <td v-for="c in columns" :key="c.key" class="text-center font-weight-medium" :class="`text-${cell(u, c).color}`">{{ cell(u, c).text }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <v-alert v-else type="info" variant="tonal" class="mt-4">Seleziona dipendenti, stato e periodo e premi Aggiorna.</v-alert>

    <v-dialog :model-value="detailUser != null" max-width="900" @update:model-value="detailUser = null">
      <v-card v-if="detailUser != null && load" :title="`Task che contribuiscono al calcolo – ${userName(detailUser)}`">
        <v-card-text>
          <v-data-table :items="load.tasks[detailUser] ?? []" density="compact" :items-per-page="-1" hide-default-footer no-data-text="Nessun task nel periodo"
            :headers="[{ title: 'Progetto', key: 'p' }, { title: 'Task', key: 't' }, { title: 'Inizio', key: 's' }, { title: 'Fine', key: 'e' }, { title: 'Ore', key: 'h', align: 'end' }, { title: 'Carico/giorno', key: 'c', align: 'end' }]">
            <template #[`item.p`]="{ item }">[{{ item.Project.code }}] {{ item.Project.name }}</template>
            <template #[`item.t`]="{ item }">{{ item.Task.shortname }}</template>
            <template #[`item.s`]="{ item }">{{ fmtDay(item.Task.startdate) }}</template>
            <template #[`item.e`]="{ item }">{{ fmtDay(item.Task.enddate) }}</template>
            <template #[`item.h`]="{ item }">{{ item.Task.hours }}</template>
            <template #[`item.c`]="{ item }">{{ Number(Object.values(item.Task.carico)[0] ?? 0).toLocaleString('it-IT', { maximumFractionDigits: 2 }) }} h</template>
          </v-data-table>
        </v-card-text>
        <v-card-actions><v-spacer /><v-btn @click="detailUser = null">Chiudi</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmSim" max-width="440">
      <v-card title="Conferma assegnazione" text="Confermi il cambio dell'assegnazione del task?">
        <v-card-actions><v-spacer /><v-btn @click="confirmSim = false">Annulla</v-btn><v-btn color="green" variant="flat" @click="accept">Accetta</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.works-table th, .works-table td { min-width: 72px; }
</style>
