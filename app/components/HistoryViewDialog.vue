<script setup lang="ts">
// Consultazione di uno storico: dati del progetto e task com'erano al momento dell'istantanea.
// Legge sia le istantanee importate dall'originale sia quelle create dal remake (stesso formato, campi in parte diversi).
const props = defineProps<{ historyId: number }>()
const emit = defineEmits<{ close: [] }>()
const api = useApi()
const toast = useSnackbar()
const h = ref<any>(null)
const clients = ref<any[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const [rec, cl] = await Promise.all([api<any>(`projecthistory/get/${props.historyId}`), api<any[]>('client/list')])
    h.value = rec
    clients.value = cl
  }
  catch (e: any) { toast.error(e.message); emit('close') }
  finally { loading.value = false }
})
const p = computed(() => { const x = h.value?.history?.Project; return (Array.isArray(x) ? x[0] : x) ?? null })
const num = (v: any) => Number(v ?? 0)
const client = computed(() => p.value?.clientname || clients.value.find(c => c.id === Number(p.value?.client_id))?.name || '—')
const tasks = computed<any[]>(() => (h.value?.history?.Task ?? []).map((w: any) => {
  const t = w.Task ?? {}
  const userName = w.User?.name ?? [w.User?.firstname, w.User?.lastname].filter(Boolean).join(' ')
  const internal = Number(t.internalactivity) === 1
  return {
    id: t.id, shortname: t.shortname, startdate: t.startdate, enddate: t.enddate, status: t.status,
    assignee: internal ? userName : (w.Supplier?.name || t.genericsupplier || ''),
    profile: w.Userprofile?.profilename ?? '', hours: num(t.hours),
    price: t.price != null ? num(t.price) : (internal ? null : num(t.supplierprice)),
  }
}).filter((t: any) => t.status !== 'D'))
// orari salvati già in ora italiana
const fmtTs = (ts: string) => (ts ? `${fmtDay(ts.slice(0, 10))} ${ts.slice(11, 16)}` : '')
</script>

<template>
  <v-dialog :model-value="true" max-width="1100" scrollable @update:model-value="emit('close')">
    <v-card :loading="loading">
      <v-card-title class="d-flex align-center">
        <span>Storico{{ p ? ` – [${p.code}] ${p.name}` : '' }}</span>
        <v-spacer /><v-btn icon="mdi-close" variant="text" aria-label="Chiudi" @click="emit('close')" />
      </v-card-title>
      <v-card-subtitle v-if="h">
        {{ HISTORY_TYPES[h.type as HistoryCode] ?? h.type }} · {{ fmtTs(h.created) }}
      </v-card-subtitle>
      <v-card-text v-if="h">
        <v-alert v-if="!p" type="info" variant="tonal">Questa voce non contiene l'istantanea del progetto.</v-alert>
        <template v-else>
          <v-row density="compact">
            <v-col cols="12" md="6">
              <v-table density="compact">
                <tbody>
                  <tr><td>Cliente</td><td>{{ client }}</td></tr>
                  <tr><td>Stato</td><td><v-chip :color="statusColor(p.status)" variant="elevated" size="small" label>{{ statusName(p.status) }}</v-chip></td></tr>
                  <tr><td>Apertura</td><td>{{ p.openstatus === 'C' ? 'Chiuso' : 'Aperto' }}</td></tr>
                  <tr><td>Owner/s</td><td>{{ ownersText(p.ownersname) || '—' }}</td></tr>
                  <tr><td>Periodo</td><td>{{ formatDate(p.startdate) || '—' }} → {{ formatDate(p.enddate) || '—' }}</td></tr>
                  <tr v-if="p.status === 'I'"><td>Probabilità di successo</td><td>{{ p.successpercent }}%</td></tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col cols="12" md="6">
              <v-table density="compact">
                <tbody>
                  <tr><td>Totale proposta</td><td class="text-end">{{ formatEur(num(p.totaleproposta)) }}</td></tr>
                  <tr><td>Totale progetto</td><td class="text-end">{{ formatEur(num(p._totaleprogetto)) }}</td></tr>
                  <tr><td>Costo proposta</td><td class="text-end">{{ formatEur(num(p.costoproposta)) }}</td></tr>
                  <tr><td>Margine progetto</td><td class="text-end">{{ formatEur(num(p._margineprogetto)) }}</td></tr>
                  <tr><td>Costo reale</td><td class="text-end">{{ formatEur(num(p.costopropostareal)) }}</td></tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
          <div v-if="p.note" class="mt-2" style="white-space: pre-wrap"><strong>Note:</strong> {{ p.note }}</div>
          <h3 class="text-subtitle-1 mt-4 mb-1">Task ({{ tasks.length }})</h3>
          <v-data-table :items="tasks" density="compact" :items-per-page="-1" hide-default-footer no-data-text="Nessun task" :headers="[
            { title: 'Task', key: 'shortname' }, { title: 'Inizio', key: 'startdate' }, { title: 'Fine', key: 'enddate' },
            { title: 'Assegnato a', key: 'assignee' }, { title: 'Profilo', key: 'profile' },
            { title: 'Ore', key: 'hours', align: 'end' }, { title: 'Prezzo', key: 'price', align: 'end' },
          ]">
            <template #[`item.startdate`]="{ item }">{{ formatDate(item.startdate) }}</template>
            <template #[`item.enddate`]="{ item }">{{ formatDate(item.enddate) }}</template>
            <template #[`item.price`]="{ item }">{{ item.price == null ? '' : formatEur(item.price) }}</template>
          </v-data-table>
        </template>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
