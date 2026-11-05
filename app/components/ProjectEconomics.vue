<script setup lang="ts">
// Riepilogo economics del progetto per macrovoce (pagina /economics dell'originale). Esclude le change request (iscr).
const props = defineProps<{ project: Record<string, any>, canEdit: boolean }>()
const api = useApi()
const toast = useSnackbar()
const tasks = ref<any[]>([])
const macro = ref<{ value: number, title: string }[]>([])
const loading = ref(true)

async function load() {
  loading.value = true
  try {
    const [t, m] = await Promise.all([api<any[]>('task/completelist', { body: { project_id: props.project.id } }), api<any[]>('macrovoice/list')])
    tasks.value = t.map(r => r.Task).filter(t => !t.iscr)
    macro.value = [{ value: 0, title: 'Non assegnato' }, ...m.map(x => ({ value: x.Macrovoice.id, title: x.Macrovoice.name }))]
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(load)

const groups = computed(() => {
  const totalMargin = tasks.value.reduce((a, t) => a + (t.price - t.cost), 0)
  return macro.value.map((m) => {
    const ts = tasks.value.filter(t => (t.macrovoice_id || 0) === m.value)
    const costo = ts.reduce((a, t) => a + t.cost, 0)
    const prezzo = ts.reduce((a, t) => a + t.price, 0)
    return { id: m.value, nome: m.title, ntask: ts.length, giornate: ts.reduce((a, t) => a + t.hours / 8, 0), costo, prezzo,
      margine: prezzo - costo, quota: totalMargin ? (prezzo - costo) / totalMargin * 100 : 0 }
  }).filter(g => g.ntask)
})
const tot = computed(() => groups.value.reduce((a, g) => ({ giornate: a.giornate + g.giornate, costo: a.costo + g.costo, prezzo: a.prezzo + g.prezzo, margine: a.margine + g.margine }), { giornate: 0, costo: 0, prezzo: 0, margine: 0 }))

const p = computed(() => props.project)
const header = computed(() => {
  const today = localDay()
  const residui = p.value.enddate && p.value.enddate > today ? dayRange(today, p.value.enddate).length - 1 : 0
  let avanzamento = null as number | null
  if (p.value.startdate && p.value.enddate && p.value.enddate > p.value.startdate) {
    const total = dayRange(p.value.startdate, p.value.enddate).length
    avanzamento = today < p.value.startdate ? 0 : today > p.value.enddate ? 100 : dayRange(p.value.startdate, today).length / total * 100
  }
  return { residui, avanzamento, stimato: p.value._totaleprogetto - p.value.costoproposta, attuale: p.value._totaleprogetto - p.value.costopropostareal }
})

async function assign(task: any, macrovoiceId: number) {
  try {
    await api('task/updatemacrovoice', { body: { task: [{ id: task.id, macrovoice_id: macrovoiceId }] } })
    task.macrovoice_id = macrovoiceId
  }
  catch (e: any) { toast.error(e.message) }
}
function exportRows() {
  exportXlsx(`economics-${p.value.code}.xlsx`, 'Economics', [
    { header: 'Macrovoce', key: 'nome', width: 30 }, { header: 'N. task', key: 'ntask' }, { header: 'Giornate', key: 'giornate' },
    { header: 'Costo interno', key: 'costo', type: 'eur' }, { header: 'Valore ricavo', key: 'prezzo', type: 'eur' },
    { header: 'Margine', key: 'margine', type: 'eur' }, { header: '% sul margine', key: 'quota' },
  ], [...groups.value.map(g => ({ ...g, quota: round2(g.quota) })), { nome: 'Totale', ...tot.value, ntask: tasks.value.length }])
}
</script>

<template>
  <div>
    <v-row density="compact" class="mb-2">
      <v-col cols="6" md="3"><InfoTile label="Giorni residui" :value="String(header.residui)" /></v-col>
      <v-col cols="6" md="3"><InfoTile label="Avanzamento temporale" :value="header.avanzamento == null ? 'n.d.' : `${header.avanzamento.toFixed(0)} %`" /></v-col>
      <v-col cols="6" md="3"><InfoTile label="Margine stimato" :value="formatEur(header.stimato)" /></v-col>
      <v-col cols="6" md="3"><InfoTile label="Margine attuale (costo reale)" :value="formatEur(header.attuale)" /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="7">
        <div class="d-flex align-center mb-2">
          <span class="text-subtitle-2 mr-auto">Riepilogo per macrovoce</span>
          <v-btn size="small" color="primary" prepend-icon="mdi-microsoft-excel" @click="exportRows">XLS</v-btn>
        </div>
        <v-table density="compact">
          <thead><tr><th>Macrovoce</th><th class="text-end">Task</th><th class="text-end">Giornate</th><th class="text-end">Costo</th><th class="text-end">Valore</th><th class="text-end">Margine</th><th class="text-end">% margine</th></tr></thead>
          <tbody>
            <tr v-for="g in groups" :key="g.id">
              <td>{{ g.nome }}</td><td class="text-end">{{ g.ntask }}</td><td class="text-end">{{ g.giornate.toLocaleString('it-IT') }}</td>
              <td class="text-end">{{ formatEur(g.costo) }}</td><td class="text-end">{{ formatEur(g.prezzo) }}</td>
              <td class="text-end">{{ formatEur(g.margine) }}</td><td class="text-end">{{ g.quota.toFixed(1) }} %</td>
            </tr>
            <tr class="font-weight-bold">
              <td>Totale</td><td class="text-end">{{ tasks.length }}</td><td class="text-end">{{ tot.giornate.toLocaleString('it-IT') }}</td>
              <td class="text-end">{{ formatEur(tot.costo) }}</td><td class="text-end">{{ formatEur(tot.prezzo) }}</td><td class="text-end">{{ formatEur(tot.margine) }}</td><td />
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12" md="5">
        <div class="text-subtitle-2 mb-2">Economics di sintesi</div>
        <v-table density="compact">
          <tbody>
            <tr><td>Valore base</td><td class="text-end">{{ formatEur(p.totaleproposta) }}</td></tr>
            <tr><td>Incremento</td><td class="text-end">{{ p.tipoincrementoproposta === 'V' ? formatEur(p.incrementoproposta) : `${p.incrementoproposta} %` }}</td></tr>
            <tr><td>Sconto</td><td class="text-end">{{ p.tiposcontoproposta === 'V' ? formatEur(-p.scontoproposta) : `-${p.scontoproposta} %` }}</td></tr>
            <tr class="font-weight-bold"><td>Preventivo finale</td><td class="text-end">{{ formatEur(p._totaleprogetto) }}</td></tr>
            <tr><td>Costo stimato</td><td class="text-end">{{ formatEur(p.costoproposta) }}</td></tr>
            <tr class="font-weight-bold"><td>Margine</td><td class="text-end">{{ formatEur(p._totaleprogetto - tot.costo) }}
              <span class="text-medium-emphasis">({{ p._totaleprogetto ? ((p._totaleprogetto - tot.costo) / p._totaleprogetto * 100).toFixed(1) : 'n.a.' }} %)</span></td></tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <div class="text-subtitle-2 mt-4 mb-2">Assegnazione macrovoci ai task</div>
    <v-data-table :items="tasks" :loading="loading" density="compact" :items-per-page="-1" hide-default-footer no-data-text="Nessun task"
      :headers="[{ title: 'Task', key: 'shortname' }, { title: 'Giornate', key: 'hours', align: 'end' }, { title: 'Costo', key: 'cost', align: 'end' }, { title: 'Valore', key: 'price', align: 'end' }, { title: 'Macrovoce', key: 'macrovoice_id', sortable: false }]">
      <template #[`item.hours`]="{ item }">{{ (item.hours / 8).toLocaleString('it-IT') }}</template>
      <template #[`item.cost`]="{ item }">{{ formatEur(item.cost) }}</template>
      <template #[`item.price`]="{ item }">{{ formatEur(item.price) }}</template>
      <template #[`item.macrovoice_id`]="{ item }">
        <v-select :model-value="item.macrovoice_id || 0" :items="macro" density="compact" hide-details variant="plain" :disabled="!canEdit"
          style="min-width: 200px" @update:model-value="v => assign(item, v)" />
      </template>
    </v-data-table>
  </div>
</template>
