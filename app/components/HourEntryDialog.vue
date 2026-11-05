<script setup lang="ts">
// "Report ore" (DialogInsModRapportino): più righe in inserimento, una sola in modifica.
// Regole dell'originale: fine ≥ inizio, attività ferie/permessi max 8 h per riga e per giorno,
// proposta automatica dell'attività di tipo F sui progetti di tipo F. In più il server rifiuta le sovrapposizioni.
const props = defineProps<{ hourId?: number | null, taskId?: number | null, date?: string | null }>()
const emit = defineEmits<{ close: [], saved: [] }>()
const api = useApi()
const toast = useSnackbar()

type Row = { day: string, from: string, to: string, task_id: number | null, activity_id: number | null, description: string }
type TaskOpt = { value: number, title: string, projectType: string }
const tasks = ref<TaskOpt[]>([])
const activities = ref<{ value: number, title: string, type: string }[]>([])
const rows = ref<Row[]>([])
const loading = ref(true)
const saving = ref(false)
const confirmDelete = ref(false)
const isEdit = computed(() => !!props.hourId)

const newRow = (r?: Partial<Row>): Row => ({
  day: props.date ?? localDay(), from: roundedTime(-1), to: roundedTime(0),
  task_id: props.taskId ?? null, activity_id: null, description: '', ...r,
})

onMounted(async () => {
  try {
    const [t, a, c] = await Promise.all([api<any[]>('task/listall'), api<any[]>('activity/list'), api<any[]>('client/list')])
    const clientName = new Map(c.map(x => [x.id, x.name]))
    tasks.value = t.map(r => ({
      value: r.Task.id, projectType: r.Project.type,
      title: [r.Project.code, clientName.get(r.Project.client_id), r.Project.name, r.Task.shortname].filter(Boolean).join(' - ')
        + (r.Userprofile.code ? ` [${r.Userprofile.code}]` : ''),
    }))
    activities.value = a.map(r => ({ value: r.Activity.id, title: `${r.Activity.name} (${r.Activity.acronimo})`, type: r.Activity.type }))
    if (props.hourId) {
      const h = await api<any>(`hour/get/${props.hourId}`)
      if (!tasks.value.some(t => t.value === h.task_id)) tasks.value.push({ value: h.task_id, title: `${h.name} [NON ASSEGNATO]`, projectType: 'N' })
      rows.value = [{ day: h.startdate.slice(0, 10), from: h.startdate.slice(11, 16), to: h.enddate.slice(11, 16),
        task_id: h.task_id, activity_id: h.activity_id, description: h.description ?? '' }]
    }
    else {
      rows.value = [newRow()]
      proposeActivity(rows.value[0]!)
    }
  }
  catch (e: any) { toast.error(e.message); emit('close') }
  finally { loading.value = false }
})

/** Progetto di tipo F → prima attività di tipo F, come l'originale. */
function proposeActivity(r: Row) {
  const t = tasks.value.find(x => x.value === r.task_id)
  if (t?.projectType === 'F') r.activity_id = activities.value.find(a => a.type === 'F')?.value ?? r.activity_id
}
const isF = (r: Row) => activities.value.find(a => a.value === r.activity_id)?.type === 'F'
const duration = (r: Row) => minutesOf(r.to) - minutesOf(r.from)

const errors = computed(() => {
  const fByDay = new Map<string, number>()
  rows.value.forEach(r => { if (isF(r)) fByDay.set(r.day, (fByDay.get(r.day) ?? 0) + duration(r)) })
  return rows.value.map((r) => {
    if (!r.day) return 'Data obbligatoria'
    if (duration(r) <= 0) return 'Ora fine minore o uguale all\'ora inizio'
    if (isF(r) && duration(r) > 480) return 'Per questa attività non è possibile registrare più di 8 ore'
    if (isF(r) && (fByDay.get(r.day) ?? 0) > 480) return 'Per questa data il totale delle ore dell\'attività supera 8 ore'
    return ''
  })
})
const valid = computed(() => rows.value.length > 0 && rows.value.every(r => r.task_id) && errors.value.every(e => !e))
const total = computed(() => rows.value.reduce((s, r) => s + Math.max(0, duration(r)), 0) / 60)

async function save() {
  if (!valid.value) return
  saving.value = true
  try {
    await api('hour/createedit', {
      body: {
        id: props.hourId ?? 0,
        tasks: rows.value.map(r => ({ datei: r.day, datefi: r.from, dateff: r.to, task_id: r.task_id, activity_id: r.activity_id, description: r.description || null })),
      },
    })
    toast.success(isEdit.value ? 'Modifica report ore completata' : 'Creazione report ore completata')
    emit('saved')
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}
async function remove() {
  confirmDelete.value = false
  try {
    await api(`hour/delete/${props.hourId}`, { method: 'POST' })
    toast.success('Report ore eliminato')
    emit('saved')
  }
  catch (e: any) { toast.error(e.message) }
}
</script>

<template>
  <v-dialog :model-value="true" max-width="1200" persistent scrollable>
    <v-card :loading="loading">
      <v-card-title class="d-flex align-center">
        Report ore<v-spacer />
        <span class="text-body-2 text-medium-emphasis mr-4">Totale {{ total.toLocaleString('it-IT', { maximumFractionDigits: 2 }) }} h</span>
        <v-btn v-if="isEdit" icon="mdi-delete-outline" variant="text" color="red" title="Elimina" @click="confirmDelete = true" />
        <v-btn icon="mdi-close" variant="text" @click="emit('close')" />
      </v-card-title>
      <v-card-text v-if="!loading">
        <div v-for="(r, i) in rows" :key="i" class="mb-2">
          <v-row density="compact" align="center">
            <v-col cols="12" sm="2"><v-text-field v-model="r.day" type="date" label="Data*" hide-details /></v-col>
            <v-col cols="6" sm="1"><v-select v-model="r.from" :items="QUARTERS" label="Inizio" hide-details /></v-col>
            <v-col cols="6" sm="1"><v-select v-model="r.to" :items="QUARTERS" label="Fine" hide-details /></v-col>
            <v-col cols="12" sm="4">
              <v-autocomplete v-model="r.task_id" :items="tasks" label="Task*" hide-details no-data-text="Nessun task assegnato"
                @update:model-value="proposeActivity(r)" />
            </v-col>
            <v-col cols="12" sm="2">
              <v-select v-model="r.activity_id" :items="activities" label="Attività" clearable hide-details>
                <template #item="{ item, props: ip }">
                  <v-list-item v-bind="ip" :class="{ 'text-green font-weight-bold': item.type === 'F' }" />
                </template>
              </v-select>
            </v-col>
            <v-col v-if="!isEdit" cols="12" sm="2" class="d-flex">
              <v-btn icon="mdi-content-copy" size="small" variant="text" title="Duplica riga" @click="rows.splice(i + 1, 0, { ...r })" />
              <v-btn icon="mdi-delete-outline" size="small" variant="text" color="red" title="Rimuovi riga" :disabled="rows.length === 1" @click="rows.splice(i, 1)" />
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-text-field v-model="r.description" label="Descrizione" density="compact" hide-details variant="underlined" />
            </v-col>
          </v-row>
          <div v-if="errors[i]" class="text-red text-caption">{{ errors[i] }}</div>
          <v-divider v-if="i < rows.length - 1" class="mt-2" />
        </div>
        <v-btn v-if="!isEdit" variant="tonal" prepend-icon="mdi-plus" class="mt-2" @click="rows.push(newRow({ day: rows.at(-1)?.day }))">Aggiungi riga</v-btn>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="emit('close')">Annulla</v-btn>
        <v-btn color="green" variant="flat" :disabled="!valid" :loading="saving" @click="save">Salva</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="confirmDelete" max-width="420">
      <v-card title="Elimina report ore" text="Vuoi veramente eliminare questo report ore?">
        <v-card-actions><v-spacer /><v-btn @click="confirmDelete = false">Annulla</v-btn><v-btn color="red" variant="flat" @click="remove">Elimina</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>
