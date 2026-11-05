<script setup lang="ts">
// Dettaglio task in sola lettura con le ore eseguite (DialogViewTask)
const props = defineProps<{ taskId: number }>()
const emit = defineEmits<{ close: [] }>()
const api = useApi()
const task = ref<any>(null)
const project = ref<any>(null)
const hours = ref<any[]>([])
const users = ref<Map<number, string>>(new Map())
onMounted(async () => {
  const [t, h, u] = await Promise.all([api<any>(`task/get/${props.taskId}`), api<any[]>(`hour/gettaskhours/${props.taskId}`), api<any[]>('user/list')])
  task.value = t
  hours.value = h
  users.value = new Map(u.map(x => [x.id, `${x.firstname} ${x.lastname}`]))
  project.value = await api<any>(`project/get/${t.project_id}`)
})
const usedDays = computed(() => hours.value.reduce((s, h) => s + h.Hour._ore, 0) / 8)
const budgetDays = computed(() => (task.value?.hours ?? 0) / 8)
const color = computed(() => { const r = budgetDays.value - usedDays.value; return r <= 0 ? 'red' : r <= 1 ? 'orange' : 'green' })
const dt = (s: string) => `${fmtDay(s.slice(0, 10))} ${s.slice(11, 16)}`
</script>

<template>
  <v-dialog :model-value="true" max-width="900" scrollable @update:model-value="emit('close')">
    <v-card :loading="!task">
      <v-card-title class="d-flex align-center">Dettaglio task<v-spacer /><v-btn icon="mdi-close" variant="text" @click="emit('close')" /></v-card-title>
      <v-card-text v-if="task && project">
        <div class="mb-1"><strong>Progetto:</strong> {{ project.name }} [{{ project.code }}]</div>
        <div class="mb-3"><strong>Responsabile/i:</strong> {{ project.owners.map((id: number) => users.get(id)).join(', ') }}</div>
        <v-table density="compact" class="mb-4">
          <tbody>
            <tr><td>Nome</td><td>{{ task.shortname }}</td></tr>
            <tr v-if="task.description"><td>Descrizione</td><td>{{ task.description }}</td></tr>
            <tr><td>Periodo</td><td>{{ formatDate(task.startdate) || '—' }} → {{ formatDate(task.enddate) || '—' }}</td></tr>
            <tr><td>Giornate a budget</td><td>{{ budgetDays.toLocaleString('it-IT') }}</td></tr>
            <tr><td>Stato</td><td>{{ TASK_STATUSES.find(s => s.code === task.status)?.name }}</td></tr>
            <tr><td>Tipo</td><td>{{ TASK_TYPES.find(s => s.code === task.type)?.name }} · {{ task.internalactivity ? 'interno' : 'esterno' }}{{ task.esecutivo ? ' · esecutivo' : '' }}</td></tr>
            <tr v-if="task.internalactivity"><td>Assegnatario</td><td>{{ users.get(task.user_id) ?? '—' }}</td></tr>
            <tr v-if="task.note"><td>Note</td><td>{{ task.note }}</td></tr>
          </tbody>
        </v-table>
        <div class="text-subtitle-2 mb-1">Ore eseguite</div>
        <v-data-table :items="hours" density="compact" :items-per-page="-1" hide-default-footer no-data-text="Nessuna ora registrata"
          :headers="[{ title: 'Utente', key: 'u' }, { title: 'Ore', key: 'o', align: 'end' }, { title: 'Inizio', key: 's' }, { title: 'Fine', key: 'e' }, { title: 'Attività', key: 'a' }, { title: 'Descrizione', key: 'd' }]">
          <template #[`item.u`]="{ item }">{{ item.User.firstname }} {{ item.User.lastname }}</template>
          <template #[`item.o`]="{ item }">{{ item.Hour._ore.toLocaleString('it-IT') }}</template>
          <template #[`item.s`]="{ item }">{{ dt(item.Hour.startdate) }}</template>
          <template #[`item.e`]="{ item }">{{ dt(item.Hour.enddate) }}</template>
          <template #[`item.a`]="{ item }">{{ item.Activity?.name }}</template>
          <template #[`item.d`]="{ item }">{{ item.Hour.description }}</template>
        </v-data-table>
        <div class="mt-3 font-weight-medium" :class="`text-${color}`">
          Totale {{ (usedDays * 8).toLocaleString('it-IT', { maximumFractionDigits: 2 }) }} h ·
          {{ usedDays.toLocaleString('it-IT', { maximumFractionDigits: 2 }) }} / {{ budgetDays.toLocaleString('it-IT') }} gg budget
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
