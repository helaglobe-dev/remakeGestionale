<script setup lang="ts">
// Fattura passiva con righe di ripartizione su progetti/task (DialogInsModAdminPasInvoice). clone = duplica.
const props = defineProps<{ invoiceId?: number | null, clone?: boolean, projectId?: number | null, readonly?: boolean }>()
const emit = defineEmits<{ close: [], saved: [] }>()
const api = useApi()
const toast = useSnackbar()

type Row = { project_id: number | null, task_id: number | null, taxable: number, vat: number, rate: number | null }
const i = ref<Record<string, any>>({ id: 0, documenttype: 'F', supplier_id: null, invoicenumber: '', invoicedate: localDay(),
  paymentduedate: null, payment_date: null, bank_id: null, payed: 'N', iban: '', type: null, causale: '', note: '', budgetitem_id: null })
const rows = ref<Row[]>([])
const suppliers = ref<{ value: number, title: string, iban: string | null }[]>([])
const projects = ref<{ value: number, title: string }[]>([])
const banks = ref<{ value: number, title: string }[]>([])
const budgetItems = ref<{ value: number, title: string }[]>([])
const tasksByProject = ref<Record<number, { value: number, title: string }[]>>({})
const form = ref()
const loading = ref(true)
const saving = ref(false)
const flagprice = ref(false)

const newRow = (r?: Partial<Row>): Row => ({ project_id: props.projectId ?? null, task_id: null, taxable: 0, vat: 0, rate: 22, ...r })
async function loadTasks(pid: number | null) {
  if (!pid || tasksByProject.value[pid]) return
  const list = await api<any[]>('task/completelist', { body: { project_id: pid } })
  tasksByProject.value[pid] = list.filter(r => !r.Task.internalactivity)
    .map(r => ({ value: r.Task.id, title: `${r.Task.shortname} [${r.Supplier.name || r.Task.genericsupplier || 'fornitore n.d.'}]` }))
}
onMounted(async () => {
  try {
    const year = new Date().getFullYear()
    const [s, p, b] = await Promise.all([api<any[]>('supplier/list'), api<any[]>('project/list'), api<any[]>('bank/list')])
    suppliers.value = s.map(x => ({ value: x.id, title: x.name, iban: x.iban }))
    projects.value = p.map(x => ({ value: x.id, title: `[${x.code}] ${x.name}` }))
    banks.value = b.map(x => ({ value: x.id, title: x.name }))
    budgetItems.value = (await api<any[]>('budgetitem/list', { body: { year } }).catch(() => []))
      .map(x => ({ value: x.id, title: `${x.nome} (${({ V: 'variabili', F: 'fissi', P: 'personale' } as any)[x.group]})` }))
    if (props.invoiceId) {
      const d = await api<any>(`invoice/passiveget/${props.invoiceId}`)
      i.value = { ...d, bank_id: d.bank_id || null, budgetitem_id: d.budgetitem_id || null }
      rows.value = d.rows.map((r: any) => newRow({ project_id: r.project_id || null, task_id: r.task_id || null, taxable: r.taxable, vat: r.vat, rate: deduceVatRate(r.taxable, r.vat) }))
      if (props.clone) Object.assign(i.value, { id: 0, invoicenumber: '', payed: 'N', payment_date: null })
      await Promise.all(rows.value.map(r => loadTasks(r.project_id)))
    }
    else {
      rows.value = [newRow()]
      await loadTasks(props.projectId ?? null)
    }
  }
  catch (e: any) { toast.error(e.message); emit('close') }
  finally { loading.value = false }
})
function recalc(r: Row) { if (r.rate != null) r.vat = round2((r.taxable || 0) * r.rate / 100) }
function onSupplier(id: number) { i.value.iban = suppliers.value.find(s => s.value === id)?.iban ?? i.value.iban }
const totals = computed(() => ({
  taxable: round2(rows.value.reduce((a, r) => a + (r.taxable || 0), 0)),
  vat: round2(rows.value.reduce((a, r) => a + (r.vat || 0), 0)),
}))
const required = (v: unknown) => (v != null && v !== '') || 'Campo obbligatorio'
const title = computed(() => props.readonly ? 'Fattura passiva' : props.clone ? 'Duplica fattura passiva' : i.value.id ? 'Modifica fattura passiva' : 'Nuova fattura passiva')

async function save() {
  if (!(await form.value.validate()).valid) return
  saving.value = true
  try {
    const res = await api<any>('invoice/passivecreateedit', {
      body: { invoice: i.value, rows: rows.value.map(r => ({ project_id: r.project_id, task_id: r.task_id, taxable: r.taxable, vat: r.vat })) },
    })
    toast.success(i.value.id ? 'Modifica fattura completata' : 'Registrazione fattura completata')
    if (res.flagprice) flagprice.value = true
    else emit('saved')
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}
</script>

<template>
  <v-dialog :model-value="true" max-width="1100" persistent scrollable>
    <v-card :loading="loading">
      <v-card-title class="d-flex align-center">{{ title }}<v-spacer /><v-btn icon="mdi-close" variant="text" @click="emit('close')" /></v-card-title>
      <v-card-text v-if="!loading">
        <v-form ref="form" :readonly="readonly" @submit.prevent="save">
          <v-row density="compact">
            <v-col cols="12" sm="3"><v-select v-model="i.documenttype" :items="DOCUMENT_TYPES" label="Tipo documento*" /></v-col>
            <v-col cols="12" sm="5"><v-autocomplete v-model="i.supplier_id" :items="suppliers" label="Fornitore*" :rules="[required]" @update:model-value="onSupplier" /></v-col>
            <v-col cols="12" sm="4"><v-text-field v-model="i.invoicenumber" label="Numero*" :rules="[required]" /></v-col>
            <v-col cols="6" sm="3"><v-text-field v-model="i.invoicedate" type="date" label="Data*" :rules="[required]" /></v-col>
            <v-col cols="6" sm="3"><v-text-field v-model="i.paymentduedate" type="date" label="Scadenza pagamento*" :rules="[required]" /></v-col>
            <v-col cols="6" sm="3"><v-select v-model="i.payed" :items="[{ value: 'N', title: 'Da pagare' }, { value: 'P', title: 'Pagata' }]" label="Pagata*" /></v-col>
            <v-col cols="6" sm="3"><v-text-field v-model="i.payment_date" type="date" label="Data effettiva pagamento"
              :rules="[v => i.payed !== 'P' || !!v || 'Obbligatoria se pagata']" /></v-col>
            <v-col cols="12" sm="4"><v-text-field v-model="i.iban" label="IBAN" :rules="[validIban]" /></v-col>
            <v-col cols="6" sm="3"><v-select v-model="i.bank_id" :items="banks" label="Banca" clearable /></v-col>
            <v-col cols="6" sm="2"><v-select v-model="i.type" :items="PRIORITY_TYPES" label="Priorità" clearable /></v-col>
            <v-col cols="12" sm="3"><v-select v-model="i.budgetitem_id" :items="budgetItems" label="Voce di budget" clearable hint="Per i costi aziendali" persistent-hint /></v-col>
            <v-col cols="12" sm="6"><v-text-field v-model="i.causale" label="Causale" /></v-col>
            <v-col cols="12" sm="6"><v-text-field v-model="i.note" label="Note" /></v-col>
          </v-row>
          <div class="d-flex align-center mt-2 mb-1">
            <span class="text-subtitle-2">Righe documento</span>
            <v-btn v-if="!readonly" size="small" variant="text" prepend-icon="mdi-plus" @click="rows.push(newRow())">Aggiungi riga</v-btn>
          </div>
          <v-row v-for="(r, n) in rows" :key="n" density="compact" align="center">
            <v-col cols="12" sm="3">
              <v-autocomplete v-model="r.project_id" :items="projects" label="Progetto" :rules="[v => !!v || !!i.budgetitem_id || 'Progetto o voce di budget']"
                @update:model-value="(v) => { r.task_id = null; loadTasks(v) }" />
            </v-col>
            <v-col cols="12" sm="3"><v-select v-model="r.task_id" :items="r.project_id ? tasksByProject[r.project_id] ?? [] : []" label="Task" clearable :disabled="!r.project_id" no-data-text="Nessun task esterno" /></v-col>
            <v-col cols="4" sm="2"><v-text-field v-model.number="r.taxable" type="number" label="Imponibile" @update:model-value="recalc(r)" /></v-col>
            <v-col cols="4" sm="1"><v-select v-model="r.rate" :items="VAT_RATES" label="% IVA" @update:model-value="recalc(r)" /></v-col>
            <v-col cols="4" sm="1"><v-text-field v-model.number="r.vat" type="number" label="IVA" :readonly="readonly || r.rate != null" /></v-col>
            <v-col cols="8" sm="1" class="text-body-2">{{ formatEur((r.taxable || 0) + (r.vat || 0)) }}</v-col>
            <v-col v-if="!readonly" cols="4" sm="1" class="d-flex">
              <v-btn icon="mdi-content-copy" size="x-small" variant="text" title="Duplica riga" @click="rows.splice(n + 1, 0, { ...r })" />
              <v-btn icon="mdi-delete-outline" size="x-small" variant="text" color="red" title="Rimuovi riga" :disabled="rows.length === 1" @click="rows.splice(n, 1)" />
            </v-col>
          </v-row>
          <div class="text-right font-weight-medium mt-2">
            Imponibile {{ formatEur(totals.taxable) }} · IVA {{ formatEur(totals.vat) }} · Totale {{ formatEur(totals.taxable + totals.vat) }}
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions v-if="!loading">
        <v-spacer />
        <v-btn @click="emit('close')">{{ readonly ? 'Chiudi' : 'Annulla' }}</v-btn>
        <v-btn v-if="!readonly" color="green" variant="flat" :loading="saving" @click="save">Salva</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog :model-value="flagprice" max-width="500" persistent>
      <v-card title="Attenzione" text="Il totale delle fatture per il task selezionato è diverso dal costo presente nel task. Se necessario controlla il task.">
        <v-card-actions><v-spacer /><v-btn color="primary" variant="flat" @click="flagprice = false; emit('saved')">Ho capito</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>
