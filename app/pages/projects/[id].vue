<script setup lang="ts">
const route = useRoute()
const projectId = computed(() => Number(route.params.id))
const api = useApi()
const { user } = useAuth()
const toast = useSnackbar()

const project = ref<any>(null)
const tasks = ref<any[]>([])
// cambia a ogni salvataggio del progetto, per ricaricare il tab Storico
const historyKey = ref(0)
const users = ref<{ id: number, name: string, disabled: boolean }[]>([])
const clients = ref<{ id: number, name: string }[]>([])
const profiles = ref<{ id: number, profilename: string }[]>([])
const suppliers = ref<{ id: number, name: string }[]>([])
const tab = ref('task')
const showDeleted = ref(false)
const taskStatusFilter = ref<string[]>([])
const loading = ref(true)

useHead(() => ({ title: project.value ? `${project.value.code} – ${project.value.name}` : 'Progetto' }))

const userName = (id: number) => users.value.find(u => u.id === id)?.name ?? ''
const clientName = computed(() => clients.value.find(c => c.id === project.value?.client_id)?.name ?? '—')
// Dati economici (tranche/fatture/economics): superadmin, admin, responsabili e chi gestisce le fatture
const canFinance = computed(() => canEdit.value || user.value?.hasinvoice === 1)
// tab richiesto via URL (es. dalle notifiche o dallo scadenziario)
if (typeof route.query.tab === 'string') tab.value = route.query.tab
const canEdit = computed(() => {
  const u = user.value
  if (!u || !project.value) return false
  return u.role === 'S' || u.role === 'A' || project.value.owners.includes(u.id)
})

async function loadProject() {
  project.value = await api(`project/get/${projectId.value}`)
}
async function loadTasks() {
  const rows = await api<any[]>('task/completelist', {
    body: { project_id: projectId.value, alsodeleted: showDeleted.value ? 1 : 0, statotask: taskStatusFilter.value },
  })
  tasks.value = rows.map((r, i) => ({
    ...r.Task,
    idproj: i + 1,
    assignee: r.Task.internalactivity ? r.User.name : (r.Supplier.name || r.Task.genericsupplier || ''),
    profile: r.Userprofile.name,
  }))
}
function loadHistory() {
  historyKey.value++
}

onMounted(async () => {
  try {
    const [u, c, up, s] = await Promise.all([
      api<any[]>('user/list'), api<any[]>('client/list'), api<any[]>('userprofile/list'), api<any[]>('supplier/list'),
    ])
    users.value = u.map(x => ({ id: x.id, name: `${x.firstname} ${x.lastname}`, disabled: x.activeuser !== 1 }))
    clients.value = c
    profiles.value = up
    suppliers.value = s
    await Promise.all([loadProject(), loadTasks(), loadHistory()])
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
})
watch([showDeleted, taskStatusFilter], () => loadTasks().catch(e => toast.error(e.message)))

// --- totali task (giorni = ore / 8, come l'originale) ---
const visibleTasks = computed(() => tasks.value.filter(t => t.status !== 'D'))
const totals = computed(() => visibleTasks.value.reduce((acc, t) => ({
  days: acc.days + t.hours / 8,
  internalDays: acc.internalDays + (t.internalactivity ? t.hours / 8 : 0),
  workedDays: acc.workedDays + t.nhours / 8,
  price: acc.price + t.price,
  cost: acc.cost + t.cost,
  realcost: acc.realcost + t.realcost,
}), { days: 0, internalDays: 0, workedDays: 0, price: 0, cost: 0, realcost: 0 }))

const taskHeaders = [
  { title: '#', key: 'idproj', width: 40 },
  { title: 'Nome', key: 'shortname' },
  { title: 'Tipo', key: 'type' },
  { title: 'Stato', key: 'status' },
  { title: 'Interno', key: 'internalactivity' },
  { title: 'Esecutivo', key: 'esecutivo' },
  { title: 'Gg. Budget', key: 'hours', align: 'end' as const },
  { title: 'Ore lavorate', key: 'nhours', align: 'end' as const },
  { title: 'Profilo', key: 'profile' },
  { title: 'Assegnatario / Fornitore', key: 'assignee' },
  { title: 'Prezzo', key: 'price', align: 'end' as const },
  { title: 'Costo', key: 'cost', align: 'end' as const },
  { title: 'Costo effettivo', key: 'realcost', align: 'end' as const },
  { title: 'Inizio', key: 'startdate' },
  { title: 'Fine', key: 'enddate' },
  { title: '', key: 'actions', sortable: false, align: 'end' as const },
]

// --- dialog ---
const projectDialog = ref(false)
const taskDialog = ref<{ open: boolean, task: any | null }>({ open: false, task: null })
const taskToDelete = ref<any>(null)

async function refreshAll() {
  await Promise.all([loadProject(), loadTasks(), loadHistory()])
}
async function onProjectSaved() {
  projectDialog.value = false
  await refreshAll()
}
async function onTaskSaved() {
  taskDialog.value.open = false
  await Promise.all([loadProject(), loadTasks()])
}
async function deleteTask() {
  const t = taskToDelete.value
  taskToDelete.value = null
  try {
    await api(`task/delete/${t.id}`, { method: 'POST' })
    toast.success('Task eliminato')
    await Promise.all([loadProject(), loadTasks()])
  }
  catch (e: any) { toast.error(e.message) }
}

// --- economia: salvataggio puntuale dei campi (project/salvaCampo) ---
async function saveField(field: string, value: unknown) {
  try {
    project.value = await api('project/salvaCampo', { body: { id: projectId.value, field, value } })
    toast.success('Salvataggio completato')
  }
  catch (e: any) { toast.error(e.message) }
}
const margin = computed(() => {
  if (!project.value) return null
  // Stessa definizione del backend originale: _margineprogetto = ricavo − costoproposta
  const revenue = projectTotal(project.value)
  const value = project.value._margineprogetto
  return { revenue, cost: project.value.costoproposta, value, pct: revenue ? (value / revenue) * 100 : null }
})
</script>

<template>
  <v-container fluid class="px-6">
    <div v-if="loading" class="d-flex justify-center my-12"><v-progress-circular indeterminate color="primary" /></div>

    <template v-else-if="project">
      <div class="d-flex align-center flex-wrap ga-2 my-4">
        <v-btn icon="mdi-arrow-left" variant="text" to="/projects" title="Torna ai progetti" />
        <div class="mr-auto">
          <div class="text-caption text-medium-emphasis">{{ project.code }} · {{ clientName }}</div>
          <h1 class="text-h5 page-title">
            {{ project.name }}
            <v-chip :color="statusColor(project.status)" variant="elevated" size="small" label class="ml-2">{{ statusName(project.status) }}</v-chip>
            <v-chip :color="project.openstatus === 'A' ? 'green' : 'grey'" size="small" variant="outlined" label class="ml-1">
              {{ project.openstatus === 'A' ? 'Aperto' : 'Chiuso' }}
            </v-chip>
          </h1>
        </div>
        <v-btn v-if="canEdit" color="primary" variant="tonal" prepend-icon="mdi-pencil" @click="projectDialog = true">Modifica progetto</v-btn>
      </div>

      <v-row density="compact" class="mb-2">
        <v-col cols="6" md="2"><InfoTile label="Responsabili" :value="project.owners.map(userName).join(', ') || '—'" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Periodo" :value="`${formatDate(project.startdate) || '—'} → ${formatDate(project.enddate) || '—'}`" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Totale progetto" :value="formatEur(projectTotal(project))" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Costo previsto" :value="formatEur(margin?.cost)" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Margine" :value="margin?.pct == null ? 'n.a.' : `${formatEur(margin.value)} (${margin.pct.toFixed(1)}%)`" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Giorni budget / lavorati" :value="`${totals.days.toLocaleString('it-IT')} / ${totals.workedDays.toLocaleString('it-IT', { maximumFractionDigits: 1 })}`" /></v-col>
      </v-row>

      <v-tabs v-model="tab" color="primary" class="mb-2">
        <v-tab value="task">Task ({{ visibleTasks.length }})</v-tab>
        <v-tab value="economia">Economia</v-tab>
        <v-tab value="storico">Storico</v-tab>
        <v-tab value="info">Dettagli</v-tab>
        <template v-if="canFinance">
          <v-tab value="tranche">Tranche</v-tab>
          <v-tab value="attive">Fatture attive</v-tab>
          <v-tab value="passive">Fatture passive</v-tab>
          <v-tab value="economics">Economics</v-tab>
        </template>
      </v-tabs>

      <v-window v-model="tab">
        <!-- TASK -->
        <v-window-item value="task">
          <div class="d-flex align-center flex-wrap ga-3 mb-2">
            <v-btn v-if="canEdit" color="green" prepend-icon="mdi-plus" @click="taskDialog = { open: true, task: null }">Nuovo task</v-btn>
            <v-select v-model="taskStatusFilter" :items="TASK_STATUSES.filter(s => s.code !== 'D')" item-title="name" item-value="code"
              label="Stato task" multiple chips clearable hide-details style="max-width: 320px" />
            <v-switch v-model="showDeleted" label="Mostra eliminati" color="primary" hide-details inset />
          </div>
          <v-data-table :items="tasks" :headers="taskHeaders" density="compact" :items-per-page="-1" hide-default-footer
            no-data-text="Nessun task">
            <template #[`item.shortname`]="{ item }">
              <span :class="{ 'text-decoration-line-through text-medium-emphasis': item.status === 'D' }">{{ item.shortname }}</span>
              <div v-if="item.description" class="text-caption text-medium-emphasis">{{ item.description }}</div>
            </template>
            <template #[`item.type`]="{ item }">{{ TASK_TYPES.find(t => t.code === item.type)?.name }}</template>
            <template #[`item.status`]="{ item }">{{ TASK_STATUSES.find(s => s.code === item.status)?.name }}</template>
            <template #[`item.internalactivity`]="{ item }">{{ item.internalactivity ? 'Si' : 'No' }}</template>
            <template #[`item.esecutivo`]="{ item }">{{ item.esecutivo ? 'Si' : 'No' }}</template>
            <template #[`item.hours`]="{ item }">{{ (item.hours / 8).toLocaleString('it-IT') }}</template>
            <template #[`item.nhours`]="{ item }">{{ item.nhours.toLocaleString('it-IT') }}</template>
            <template #[`item.price`]="{ item }"><span class="cell-nowrap">{{ formatEur(item.price) }}</span></template>
            <template #[`item.cost`]="{ item }"><span class="cell-nowrap">{{ formatEur(item.cost) }}</span></template>
            <template #[`item.realcost`]="{ item }"><span class="cell-nowrap">{{ formatEur(item.realcost) }}</span></template>
            <template #[`item.startdate`]="{ item }">{{ formatDate(item.startdate) }}</template>
            <template #[`item.enddate`]="{ item }">{{ formatDate(item.enddate) }}</template>
            <template #[`item.actions`]="{ item }">
              <template v-if="canEdit && item.status !== 'D'">
                <v-btn icon="mdi-pencil" size="small" variant="text" title="Modifica" @click="taskDialog = { open: true, task: item }" />
                <v-btn icon="mdi-delete-outline" size="small" variant="text" color="red" title="Elimina" @click="taskToDelete = item" />
              </template>
            </template>
            <template #[`body.append`]>
              <tr class="font-weight-bold">
                <td colspan="6">Totale</td>
                <td class="text-end">{{ totals.days.toLocaleString('it-IT') }}</td>
                <td class="text-end">{{ (totals.workedDays * 8).toLocaleString('it-IT') }}</td>
                <td colspan="2" />
                <td class="text-end cell-nowrap">{{ formatEur(totals.price) }}</td>
                <td class="text-end cell-nowrap">{{ formatEur(totals.cost) }}</td>
                <td class="text-end cell-nowrap">{{ formatEur(totals.realcost) }}</td>
                <td colspan="3" />
              </tr>
            </template>
          </v-data-table>
        </v-window-item>

        <!-- ECONOMIA -->
        <v-window-item value="economia">
          <v-row>
            <v-col cols="12" md="7">
              <v-table density="compact">
                <tbody>
                  <tr><td>Totale proposta (somma prezzi task)</td><td class="text-end">{{ formatEur(project.totaleproposta) }}</td></tr>
                  <tr>
                    <td>
                      Incremento
                      <div v-if="project.noteincremento" class="text-caption text-medium-emphasis">{{ project.noteincremento }}</div>
                    </td>
                    <td class="text-end">{{ project.tipoincrementoproposta === 'V' ? formatEur(project.incrementoproposta) : `${project.incrementoproposta} %` }}</td>
                  </tr>
                  <tr>
                    <td>
                      Sconto
                      <div v-if="project.notesconto" class="text-caption text-medium-emphasis">{{ project.notesconto }}</div>
                    </td>
                    <td class="text-end">{{ project.tiposcontoproposta === 'V' ? formatEur(project.scontoproposta) : `${project.scontoproposta} %` }}</td>
                  </tr>
                  <tr class="font-weight-bold"><td>Totale progetto</td><td class="text-end">{{ formatEur(project._totaleprogetto) }}</td></tr>
                  <tr v-if="project.newtotaleproposta"><td>Nuovo totale proposta (sovrascrive il totale)</td><td class="text-end">{{ formatEur(project.newtotaleproposta) }}</td></tr>
                  <tr><td>Costo proposta</td><td class="text-end">{{ formatEur(project.costoproposta) }}</td></tr>
                  <tr><td>Costo reale (ore consuntivate)</td><td class="text-end">{{ formatEur(project.costopropostareal) }}</td></tr>
                  <tr>
                    <td>Margine reale (su costo reale)</td>
                    <td class="text-end">{{ formatEur(project._margineprogettoreal) }}</td>
                  </tr>
                  <tr class="font-weight-bold">
                    <td>Margine</td>
                    <td class="text-end">{{ formatEur(margin?.value) }} <span class="text-medium-emphasis">({{ margin?.pct == null ? 'n.a.' : `${margin.pct.toFixed(1)}%` }})</span></td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col v-if="canEdit" cols="12" md="5">
              <EconomicsEditor :project="project" @save="saveField" />
            </v-col>
          </v-row>
        </v-window-item>

        <!-- STORICO -->
        <v-window-item value="storico">
          <HistoriesPanel :key="historyKey" :project-id="projectId" :can-edit="canEdit" />
        </v-window-item>

        <!-- DETTAGLI -->
        <v-window-item value="info">
          <v-row>
            <v-col cols="12" md="6">
              <v-table density="compact">
                <tbody>
                  <tr><td>Nome a contratto</td><td>{{ project.contractname || '—' }}</td></tr>
                  <tr><td>Descrizione</td><td style="white-space: pre-wrap">{{ project.description || '—' }}</td></tr>
                  <tr><td>Referente</td><td>{{ project.referent || '—' }}</td></tr>
                  <tr><td>Tipo</td><td>{{ PROJECT_TYPES.find(t => t.code === project.type)?.name }}{{ project.internalproject ? ' · Interno' : '' }}</td></tr>
                  <tr v-if="project.signaturedate"><td>Data firma contratto</td><td>{{ formatDate(project.signaturedate) }}</td></tr>
                  <tr v-if="project.status === 'I'"><td>Percentuale di successo</td><td>{{ project.successpercent }} %</td></tr>
                  <tr><td>Split</td><td>{{ project.splitpercent }}% {{ project.splityear }} · {{ project.splitpercent1 }}% {{ project.splityear1 }}</td></tr>
                  <tr><td>Creato</td><td>{{ formatDate(project.created) }}</td></tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col cols="12" md="6">
              <div class="text-subtitle-2 mb-1">Note</div>
              <p class="mb-4" style="white-space: pre-wrap">{{ project.note || '—' }}</p>
              <div class="text-subtitle-2 mb-1">Note addendum</div>
              <p class="mb-4" style="white-space: pre-wrap">{{ project.noteaddendum || '—' }}</p>
              <div class="text-subtitle-2 mb-1">Sponsor</div>
              <v-table v-if="project.sponsors.length" density="compact">
                <thead><tr><th>Cliente</th><th>Data contratto</th><th>Note</th></tr></thead>
                <tbody>
                  <tr v-for="s in project.sponsors" :key="s.Sponsor.id">
                    <td>{{ s.Client.name }}</td><td>{{ formatDate(s.Sponsor.contractdate) }}</td><td>{{ s.Sponsor.note }}</td>
                  </tr>
                </tbody>
              </v-table>
              <p v-else>—</p>
            </v-col>
          </v-row>
        </v-window-item>
        <template v-if="canFinance">
          <v-window-item value="tranche"><TranchesPanel v-if="tab === 'tranche'" :project-id="project.id" :project-label="`[${project.code}] ${project.name}`" /></v-window-item>
          <v-window-item value="attive"><ActiveInvoicesPanel v-if="tab === 'attive'" :project-id="project.id" :project-label="`[${project.code}] ${project.name}`" /></v-window-item>
          <v-window-item value="passive"><PassiveInvoicesPanel v-if="tab === 'passive'" :project-id="project.id" :project-label="`[${project.code}] ${project.name}`" /></v-window-item>
          <v-window-item value="economics"><ProjectEconomics v-if="tab === 'economics'" :project="project" :can-edit="canEdit" /></v-window-item>
        </template>
      </v-window>

      <ProjectDialog v-if="projectDialog" :id="project.id" :clone="false" :users="users" :clients="clients"
        @close="projectDialog = false" @saved="onProjectSaved" />
      <TaskDialog v-if="taskDialog.open" :project-id="project.id" :task="taskDialog.task" :users="users"
        :profiles="profiles" :suppliers="suppliers" :project-code="project.code" @close="taskDialog.open = false" @saved="onTaskSaved" />
      <v-dialog :model-value="!!taskToDelete" max-width="440" @update:model-value="taskToDelete = null">
        <v-card title="Elimina task" :text="`Vuoi eliminare il task «${taskToDelete?.shortname}»?`">
          <v-card-actions>
            <v-spacer />
            <v-btn @click="taskToDelete = null">Annulla</v-btn>
            <v-btn color="red" variant="flat" @click="deleteTask">Elimina</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <v-alert v-else type="warning" class="mt-6">Progetto non trovato.</v-alert>
  </v-container>
</template>
