<script setup lang="ts">
const props = defineProps<{
  projectId: number
  task: Record<string, any> | null
  users: { id: number, name: string, disabled: boolean }[]
  profiles: { id: number, profilename: string }[]
  /** Codice progetto: il suffisso anno sceglie il listino (es. PR12026 → 2026) */
  projectCode: string
  suppliers: { id: number, name: string }[]
}>()
const emit = defineEmits<{ close: [], saved: [] }>()
const api = useApi()
const toast = useSnackbar()
const form = ref()
const saving = ref(false)

const t = ref<Record<string, any>>({
  id: 0, shortname: '', description: '', note: '', type: 'P', status: 'A', internalactivity: 1,
  esecutivo: 0, iscr: 0, startdate: null, enddate: null, user_id: null, userprofile_id: null,
  supplier_id: null, macrovoice_id: null, genericsupplier: '', supplierprice: 0, suppliercost: 0,
  ...(props.task ? { ...props.task, user_id: props.task.user_id || null, userprofile_id: props.task.userprofile_id || null, supplier_id: props.task.supplier_id || null, macrovoice_id: props.task.macrovoice_id || null } : {}),
})
// Il budget si inserisce in giorni (1 g = 8 h), come nell'originale
const days = ref<number>(props.task ? props.task.hours / 8 : 0)

const internal = computed(() => t.value.internalactivity === 1)
// Come l'originale, prezzo e costo si ricalcolano sempre: listino del profilo per l'anno di inizio del task
// (o di creazione se manca la data); per i task esterni valgono i valori del fornitore.
const year = computed(() => Number((t.value.startdate || t.value.created || localDay()).slice(0, 4)))
const rates = ref<{ userprofile_id: number, price: number | null, cost: number | null }[]>([])
watch(year, async (y) => { rates.value = await api<any[]>(`userprofile/rates/${y}`).catch(() => []) }, { immediate: true })
const macrovoices = ref<{ title: string, value: number }[]>([])
const rate = computed(() => rates.value.find(r => r.userprofile_id === t.value.userprofile_id))
const missingRate = computed(() => internal.value && !!t.value.userprofile_id && (rate.value?.price == null || rate.value?.cost == null))
const estimated = computed(() => internal.value
  ? { price: (rate.value?.price ?? 0) * days.value * 8, cost: (rate.value?.cost ?? 0) * days.value * 8 }
  : { price: Number(t.value.supplierprice) || 0, cost: Number(t.value.suppliercost) || 0 })
const activeUsers = computed(() => props.users.filter(u => !u.disabled || u.id === t.value.user_id))
onMounted(async () => {
  macrovoices.value = (await api<any[]>('macrovoice/list')).map(x => ({ title: x.Macrovoice.name, value: x.Macrovoice.id }))
})

const required = (v: unknown) => (v != null && String(v).trim() !== '') || 'Campo obbligatorio'

async function submit() {
  const { valid } = await form.value.validate()
  if (!valid) return
  if (internal.value && !days.value) return toast.error('Inserire giorni budget')
  if (internal.value && t.value.user_id && !t.value.userprofile_id) return toast.error('Inserire profilo professionale')
  saving.value = true
  try {
    await api('task/createedit', {
      body: {
        Task: {
          ...t.value,
          project_id: props.projectId,
          hours: days.value * 8,
        },
      },
    })
    toast.success(t.value.id ? 'Modifica task completata' : 'Creazione task completata')
    emit('saved')
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}
</script>

<template>
  <v-dialog :model-value="true" max-width="900" persistent scrollable>
    <v-card>
      <v-card-title class="d-flex align-center">
        {{ t.id ? 'Modifica task' : 'Nuovo task' }}
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" @click="emit('close')" />
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submit">
          <v-row density="compact">
            <v-col cols="12" sm="8"><v-text-field v-model="t.shortname" label="Nome*" :rules="[required]" autofocus /></v-col>
            <v-col cols="12" sm="4"><v-select v-model="t.type" :items="TASK_TYPES" item-title="name" item-value="code" label="Tipo di costo" /></v-col>
            <v-col cols="12" sm="4"><v-select v-model="t.macrovoice_id" :items="macrovoices" label="Macrovoce" clearable /></v-col>
            <v-col cols="12"><v-textarea v-model="t.description" label="Descrizione" rows="2" auto-grow /></v-col>
            <v-col cols="6" sm="3">
              <v-select v-model="t.status" :items="TASK_STATUSES.filter(s => s.code !== 'D')" item-title="name" item-value="code" label="Stato" />
            </v-col>
            <v-col cols="6" sm="3">
              <v-switch v-model="t.internalactivity" :true-value="1" :false-value="0" color="green" inset hide-details
                :label="internal ? 'Attività interna' : 'Attività esterna'" />
            </v-col>
            <v-col cols="6" sm="3">
              <v-switch v-model="t.esecutivo" :true-value="1" :false-value="0" color="green" inset hide-details label="Esecutivo" />
            </v-col>
            <v-col cols="6" sm="3">
              <v-switch v-model="t.iscr" :true-value="1" :false-value="0" color="green" inset hide-details label="Change request" />
            </v-col>
            <v-col cols="6" sm="3"><v-text-field v-model="t.startdate" type="date" label="Inizio" /></v-col>
            <v-col cols="6" sm="3">
              <v-text-field v-model="t.enddate" type="date" label="Fine"
                :rules="[v => !v || !t.startdate || v >= t.startdate || 'Precede l\'inizio']" />
            </v-col>

            <template v-if="internal">
              <v-col cols="12" sm="2">
                <v-text-field v-model.number="days" type="number" min="0" step="0.5" label="Giorni budget*" :hint="`${days * 8} ore`" persistent-hint />
              </v-col>
              <v-col cols="12" sm="4">
                <v-autocomplete v-model="t.user_id" :items="activeUsers" item-title="name" item-value="id" label="Assegnatario" clearable />
              </v-col>
              <v-col cols="12" sm="4">
                <v-select v-model="t.userprofile_id" :items="profiles" item-title="profilename" item-value="id" label="Profilo professionale" clearable
                  :hint="rate && !missingRate ? `Listino ${year}: ${formatEur(rate.price)}/h vendita · ${formatEur(rate.cost)}/h costo` : ''" persistent-hint
                  :error-messages="missingRate ? `Listino ${year} non impostato per questo profilo: prezzo e costo risulteranno 0 finché non lo imposti in Profili professionali` : ''" />
              </v-col>
            </template>
            <template v-else>
              <v-col cols="12" sm="4">
                <v-autocomplete v-model="t.supplier_id" :items="suppliers" item-title="name" item-value="id" label="Fornitore" clearable />
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field v-model="t.genericsupplier" label="Fornitore generico (se non in anagrafica)" :disabled="!!t.supplier_id" />
              </v-col>
              <v-col cols="6" sm="2"><v-text-field v-model.number="t.supplierprice" type="number" min="0" label="Prezzo fornitore" prefix="€" /></v-col>
              <v-col cols="6" sm="2"><v-text-field v-model.number="t.suppliercost" type="number" min="0" label="Costo fornitore" prefix="€" /></v-col>
            </template>
          </v-row>

          <v-card variant="tonal" class="pa-3 mt-2">
            <div class="d-flex align-center flex-wrap ga-4">
              <div>Prezzo <strong>{{ formatEur(estimated.price) }}</strong></div>
              <div>Costo <strong>{{ formatEur(estimated.cost) }}</strong></div>
              <v-spacer />
              <span class="text-caption text-medium-emphasis">{{ internal ? `ore × listino ${year} del profilo` : 'valori del fornitore' }}</span>
            </div>
          </v-card>
          <v-textarea v-model="t.note" label="Note" rows="2" auto-grow class="mt-3" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="emit('close')">Annulla</v-btn>
        <v-btn color="green" variant="flat" :loading="saving" @click="submit">Salva</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
