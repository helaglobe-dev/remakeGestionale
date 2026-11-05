<script setup lang="ts">
// Fattura attiva (DialogInsModActInvoice / DialogInsModAdminActInvoice). Con trancheId si precompila dalla tranche.
const props = defineProps<{ invoiceId?: number | null, projectId?: number | null, trancheId?: number | null, readonly?: boolean }>()
const emit = defineEmits<{ close: [], saved: [] }>()
const api = useApi()
const toast = useSnackbar()

const i = ref<Record<string, any>>({ id: 0, project_id: props.projectId ?? null, payment_tranche_id: null, bank_id: null,
  invoicenumber: '', invoicedate: localDay(), taxable: 0, vat: 0, paymentduedate: null, payment_date: null, payed: 'N',
  anticipobancario: 0, percentualeanticipo: 0, meseannoanticipo: null, note: '' })
const vatRate = ref<number | null>(22)
const paymentType = ref<string | null>('30')
const projects = ref<{ value: number, title: string }[]>([])
const tranches = ref<{ value: number, title: string, paymenttype: string | null, emessa: number, invoiceId: number }[]>([])
const banks = ref<{ value: number, title: string }[]>([])
const form = ref()
const loading = ref(true)
const saving = ref(false)
const typeTitle = (c: string) => TRANCHE_TYPES.find(t => t.value === c)?.title ?? c

async function loadTranches(pid: number | null) {
  tranches.value = []
  if (!pid) return
  const rows = await api<any[]>(`invoice/tranchelist/${pid}`)
  tranches.value = rows.map(t => ({ value: t.id, title: `${typeTitle(t.type)} ${fmtDay(t.previewdate)}${t.description ? ` - ${t.description}` : ''} · ${formatEur(t.total)}`,
    paymenttype: t.paymenttype, emessa: t.emessa, invoiceId: t.invoice_id }))
}
async function applyTranche(id: number | null) {
  if (!id) return
  const t = await api<any>(`invoice/trancheget/${id}`)
  Object.assign(i.value, { project_id: t.project_id, payment_tranche_id: t.id, taxable: t.total, invoicedate: t.previewdate })
  vatRate.value = 22
  paymentType.value = t.paymenttype ?? '30'
}
onMounted(async () => {
  try {
    banks.value = (await api<any[]>('bank/list')).map(b => ({ value: b.id, title: b.name }))
    if (!props.projectId) projects.value = (await api<any[]>('project/list')).map(p => ({ value: p.id, title: `[${p.code}] ${p.name}` }))
    if (props.invoiceId) {
      const d = await api<any>(`invoice/activeget/${props.invoiceId}`)
      i.value = { ...d, payment_tranche_id: d.payment_tranche_id || null, bank_id: d.bank_id || null }
      await loadTranches(d.project_id)
      vatRate.value = deduceVatRate(d.taxable, d.vat)
      paymentType.value = deducePaymentType(d.invoicedate, d.paymentduedate)
    }
    else {
      await loadTranches(i.value.project_id)
      if (props.trancheId) {
        if (!i.value.project_id) { const t = await api<any>(`invoice/trancheget/${props.trancheId}`); await loadTranches(t.project_id) }
        await applyTranche(props.trancheId)
      }
    }
  }
  catch (e: any) { toast.error(e.message); emit('close') }
  finally { loading.value = false }
})
watch([() => i.value.taxable, vatRate], () => { if (vatRate.value != null) i.value.vat = round2((i.value.taxable || 0) * vatRate.value / 100) })
watch([() => i.value.invoicedate, paymentType], () => { if (paymentType.value != null) i.value.paymentduedate = dueDate(i.value.invoicedate, paymentType.value) })
const alreadyInvoiced = computed(() => {
  const t = tranches.value.find(x => x.value === i.value.payment_tranche_id)
  return !!t?.emessa && t.invoiceId !== i.value.id
})
const required = (v: unknown) => (v != null && v !== '') || 'Campo obbligatorio'
// mese-anno anticipo: input type="month" lavora già in YYYY-MM

async function save() {
  if (!(await form.value.validate()).valid) return
  saving.value = true
  try {
    await api('invoice/activecreateedit', { body: { invoice: i.value } })
    toast.success(i.value.id ? 'Modifica fattura completata' : 'Registrazione fattura completata')
    emit('saved')
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}
</script>

<template>
  <v-dialog :model-value="true" max-width="900" persistent scrollable>
    <v-card :loading="loading">
      <v-card-title class="d-flex align-center">
        {{ readonly ? 'Fattura attiva' : i.id ? 'Modifica fattura attiva' : 'Nuova fattura attiva' }}<v-spacer />
        <v-btn icon="mdi-close" variant="text" @click="emit('close')" />
      </v-card-title>
      <v-card-text v-if="!loading">
        <v-alert v-if="alreadyInvoiced" type="error" variant="tonal" density="compact" class="mb-3">Attenzione: esiste già una fattura per questa tranche</v-alert>
        <v-form ref="form" :readonly="readonly" @submit.prevent="save">
          <v-row density="compact">
            <v-col v-if="!projectId" cols="12">
              <v-autocomplete v-model="i.project_id" :items="projects" label="Progetto*" :rules="[required]"
                @update:model-value="(v) => { i.payment_tranche_id = null; loadTranches(v) }" />
            </v-col>
            <v-col cols="12" sm="8">
              <v-select v-model="i.payment_tranche_id" :items="tranches" label="Tranche" clearable :disabled="!i.project_id"
                @update:model-value="applyTranche" />
            </v-col>
            <v-col cols="12" sm="4"><v-select v-model="i.bank_id" :items="banks" label="Banca" clearable /></v-col>
            <v-col cols="6" sm="4"><v-text-field v-model="i.invoicenumber" label="Numero fattura*" :rules="[required]" /></v-col>
            <v-col cols="6" sm="4"><v-text-field v-model="i.invoicedate" type="date" label="Data fattura*" :rules="[required]" /></v-col>
            <v-col cols="12" sm="4"><v-select v-model="i.payed" :items="PAYED" label="Pagata*" /></v-col>
            <v-col cols="6" sm="4"><v-text-field v-model.number="i.taxable" type="number" label="Imponibile" prefix="€" /></v-col>
            <v-col cols="6" sm="4"><v-select v-model="vatRate" :items="VAT_RATES" label="% IVA*" /></v-col>
            <v-col cols="12" sm="4"><v-text-field v-model.number="i.vat" type="number" label="IVA" prefix="€" :readonly="readonly || vatRate != null"
              :hint="`Totale ${formatEur((i.taxable || 0) + (i.vat || 0))}`" persistent-hint /></v-col>
            <v-col cols="12" sm="4"><v-select v-model="paymentType" :items="PAYMENT_TYPES" label="Tipo pagamento*" /></v-col>
            <v-col cols="6" sm="4"><v-text-field v-model="i.paymentduedate" type="date" label="Data prevista pagamento*" :rules="[required]" :readonly="readonly || paymentType != null" /></v-col>
            <v-col cols="6" sm="4"><v-text-field v-model="i.payment_date" type="date" label="Data effettiva pagamento"
              :rules="[v => i.payed !== 'P' || !!v || 'Obbligatoria se pagata']" /></v-col>
            <v-col cols="12" sm="4"><v-switch v-model="i.anticipobancario" :true-value="1" :false-value="0" color="green" inset hide-details
              :label="`Anticipo bancario: ${i.anticipobancario ? 'SI' : 'NO'}`" /></v-col>
            <template v-if="i.anticipobancario">
              <v-col cols="6" sm="4"><v-text-field v-model.number="i.percentualeanticipo" type="number" min="0" max="100" label="Percentuale anticipo" suffix="%" /></v-col>
              <v-col cols="6" sm="4"><v-text-field v-model="i.meseannoanticipo" type="month" label="Mese-anno" /></v-col>
            </template>
            <v-col cols="12"><v-textarea v-model="i.note" label="Note" rows="2" auto-grow /></v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions v-if="!loading">
        <v-spacer />
        <v-btn @click="emit('close')">{{ readonly ? 'Chiudi' : 'Annulla' }}</v-btn>
        <v-btn v-if="!readonly" color="green" variant="flat" :loading="saving" @click="save">Salva</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
