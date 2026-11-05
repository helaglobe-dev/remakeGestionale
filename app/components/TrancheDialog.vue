<script setup lang="ts">
// Tranche di pagamento (DialogInsModPayTranche / DialogInsModAdminPayTranche)
const props = defineProps<{ trancheId?: number | null, projectId?: number | null, readonly?: boolean }>()
const emit = defineEmits<{ close: [], saved: [], invoice: [trancheId: number, projectId: number] }>()
const api = useApi()
const toast = useSnackbar()

const t = ref<Record<string, any>>({ id: 0, project_id: props.projectId ?? null, sponsor_id: null, type: 'A', total: 0, vat: 0,
  previewdate: localDay(), paymentdate: null, description: '', note: '' })
const vatRate = ref<number | null>(22)
const paymentType = ref<string | null>('30')
const projects = ref<{ value: number, title: string }[]>([])
const sponsors = ref<{ value: number, title: string, paymenttype: string | null }[]>([])
const projectPaymentType = ref<string | null>(null)
const projectTotal = ref<number | null>(null)
const form = ref()
const loading = ref(true)
const saving = ref(false)

async function loadProject(pid: number | null, keepSponsor = false) {
  sponsors.value = []
  projectTotal.value = null
  if (!pid) return
  const [tot, sp] = await Promise.all([api<any>(`project/gettotalproject/${pid}`), api<any[]>(`project/getsponsors/${pid}`)])
  projectTotal.value = tot.newtotaleproposta || tot.totalep
  projectPaymentType.value = tot.paymenttype
  sponsors.value = sp.map(s => ({ value: s.id, title: s.name, paymenttype: s.paymenttype }))
  if (!keepSponsor) { t.value.sponsor_id = null; paymentType.value = tot.paymenttype ?? '30' }
}
onMounted(async () => {
  try {
    if (props.trancheId) {
      const d = await api<any>(`invoice/trancheget/${props.trancheId}`)
      t.value = { ...d, sponsor_id: d.sponsor_id || null }
      await loadProject(d.project_id, true)
      vatRate.value = deduceVatRate(d.total, d.vat)
      paymentType.value = deducePaymentType(d.previewdate, d.paymentdate)
    }
    else if (props.projectId) await loadProject(props.projectId)
    if (!props.projectId && !props.trancheId) {
      projects.value = (await api<any[]>('project/list')).filter(p => p.status === 'A' && p.openstatus === 'A').map(p => ({ value: p.id, title: `[${p.code}] ${p.name}` }))
    }
  }
  catch (e: any) { toast.error(e.message); emit('close') }
  finally { loading.value = false }
})

watch([() => t.value.total, vatRate], () => { if (vatRate.value != null) t.value.vat = round2((t.value.total || 0) * vatRate.value / 100) })
watch([() => t.value.previewdate, paymentType], () => { if (paymentType.value != null) t.value.paymentdate = dueDate(t.value.previewdate, paymentType.value) })
function onSponsor(id: number | null) {
  const s = sponsors.value.find(x => x.value === id)
  paymentType.value = s?.paymenttype ?? projectPaymentType.value ?? paymentType.value
}
const required = (v: unknown) => (v != null && v !== '') || 'Campo obbligatorio'

async function save() {
  if (!(await form.value.validate()).valid) return
  saving.value = true
  try {
    await api('invoice/tranchecreateedit', { body: { tranche: t.value } })
    toast.success(t.value.id ? 'Modifica tranche completata' : 'Creazione tranche completata')
    emit('saved')
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}
</script>

<template>
  <v-dialog :model-value="true" max-width="820" persistent scrollable>
    <v-card :loading="loading">
      <v-card-title class="d-flex align-center">
        {{ readonly ? 'Tranche di pagamento' : t.id ? 'Modifica tranche di pagamento' : 'Nuova tranche di pagamento' }}<v-spacer />
        <v-btn icon="mdi-close" variant="text" @click="emit('close')" />
      </v-card-title>
      <v-card-text v-if="!loading">
        <v-alert v-if="projectTotal != null" type="info" variant="tonal" density="compact" class="mb-3">Totale progetto: {{ formatEur(projectTotal) }}</v-alert>
        <v-alert v-if="t.emessa" type="success" variant="tonal" density="compact" class="mb-3">Fattura emessa il {{ fmtDay(t.invoicedate) }} · {{ t.payed === 'P' ? 'pagata' : 'da incassare' }}</v-alert>
        <v-form ref="form" :readonly="readonly" @submit.prevent="save">
          <v-row density="compact">
            <v-col v-if="!projectId && !trancheId" cols="12">
              <v-autocomplete v-model="t.project_id" :items="projects" label="Progetto*" :rules="[required]" hint="Solo progetti approvati e aperti" persistent-hint
                @update:model-value="loadProject" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-select v-model="t.sponsor_id" :items="sponsors" label="Sponsor" clearable :disabled="!sponsors.length"
                hint="Se indicato, la fattura è intestata allo sponsor" persistent-hint @update:model-value="onSponsor" />
            </v-col>
            <v-col cols="12" sm="6"><v-select v-model="t.type" :items="TRANCHE_TYPES" label="Tipo*" /></v-col>
            <v-col cols="6" sm="4"><v-text-field v-model.number="t.total" type="number" label="Imponibile" prefix="€" /></v-col>
            <v-col cols="6" sm="4"><v-select v-model="vatRate" :items="VAT_RATES" label="% IVA*" /></v-col>
            <v-col cols="12" sm="4"><v-text-field v-model.number="t.vat" type="number" label="IVA" prefix="€" :readonly="readonly || vatRate != null" /></v-col>
            <v-col cols="12" sm="4"><v-text-field v-model="t.previewdate" type="date" label="Data prev. emissione fattura*" :rules="[required]" /></v-col>
            <v-col cols="12" sm="4"><v-select v-model="paymentType" :items="PAYMENT_TYPES" label="Tipo pagamento*" /></v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model="t.paymentdate" type="date" label="Data prev. pagamento*" :rules="[required]" :readonly="readonly || paymentType != null" />
            </v-col>
            <v-col cols="12"><v-text-field v-model="t.description" label="Milestone" /></v-col>
            <v-col cols="12"><v-textarea v-model="t.note" label="Note" rows="2" auto-grow /></v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions v-if="!loading">
        <v-btn v-if="t.id && !readonly && !t.emessa" color="primary" variant="tonal" prepend-icon="mdi-file-document-plus-outline" @click="emit('invoice', t.id, t.project_id)">Genera fattura</v-btn>
        <v-spacer />
        <v-btn @click="emit('close')">{{ readonly ? 'Chiudi' : 'Annulla' }}</v-btn>
        <v-btn v-if="!readonly" color="green" variant="flat" :loading="saving" @click="save">Salva</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
