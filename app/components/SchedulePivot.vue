<script setup lang="ts">
// Scadenziario attivo (tranche per mese di emissione) e scadenziario fatture (incassi/scadenze + tranche non fatturate).
const props = defineProps<{ mode: 'attivo' | 'fatture' }>()
const api = useApi()
const toast = useSnackbar()
const L = useLookups()
const Y = new Date().getFullYear()
const years = Array.from({ length: Y + 3 - 2023 }, (_, i) => 2023 + i)
const f = reactive({ client: null as number | null, project: null as number | null, from: Y, to: Y })
const raw = ref<any[]>([])
const loading = ref(false)
const note = ref<string | null>(null)
const MONTHS = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']

async function load() {
  if (f.to < f.from) return toast.error('L\'anno finale precede quello iniziale')
  loading.value = true
  try {
    raw.value = await api<any[]>(props.mode === 'attivo' ? 'invoice/scadenziario' : 'invoice/scadenziariofa',
      { body: { client: f.client, project: f.project, anno_da: f.from, anno_a: f.to, spostate: 1 } })
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}
onMounted(async () => { await L.load(['clients', 'projects']); await load() })

const months = computed(() => {
  const out = [{ key: `${f.from - 1}-12`, title: `12/${f.from - 1}` }]
  for (let y = f.from; y <= f.to; y++) for (let m = 1; m <= 12; m++) out.push({ key: `${y}-${String(m).padStart(2, '0')}`, title: `${MONTHS[m - 1]} ${y}` })
  out.push({ key: `${f.to + 1}-01`, title: `01/${f.to + 1}` })
  return out
})
const curMonth = localDay().slice(0, 7)
type Cell = { value: number, tranche: number, color: string, note: string }
const pivot = computed(() => {
  const rows = new Map<string, { dest: number, sponsor: boolean, project: any, cells: Record<string, Cell> }>()
  for (const r of raw.value) {
    const dest = r.sponsor_client_id || r.client_id
    const key = `${dest}|${r.project_id}`
    const row = rows.get(key) ?? { dest, sponsor: !!r.sponsor_client_id, project: L.projects.value.find(p => p.value === r.project_id), cells: {} as Record<string, Cell> }
    const mk = `${r.anno}-${String(r.mese).padStart(2, '0')}`
    const past = mk < curMonth
    let color = '#000000'
    if (props.mode === 'attivo') color = r.colore === '#62be62' ? '#62be62' : past ? '#ea261a' : '#000000'
    else {
      const st = String(r.stati || '').split(',').filter(Boolean)
      color = r.scaduta ? '#f54336' : st.length && st.every((x: string) => x === 'P') ? '#62be62'
        : st.some((x: string) => x === 'P') ? (past ? '#ea261a' : '#eb7c2a') : past ? '#ea261a' : '#000000'
    }
    row.cells[mk] = props.mode === 'attivo'
      ? { value: r.totale, tranche: 0, color, note: r.note }
      : { value: r.totale_fattura, tranche: r.totale_tranche + r.vat_tranche, color, note: r.note }
    rows.set(key, row)
  }
  const code = (p: any) => { const m = String(p?.code ?? '').match(/^PR(\d+)(\d{4})$/); return m ? Number(m[2]) * 1e6 + Number(m[1]) : 0 }
  return [...rows.values()].sort((a, b) => code(a.project) - code(b.project))
})
const colTotal = (k: string) => pivot.value.reduce((a, r) => a + (r.cells[k]?.value ?? 0) + (r.cells[k]?.tranche ?? 0), 0)
const eurShort = (v: number) => (v ? new Intl.NumberFormat('it-IT', { maximumFractionDigits: 0 }).format(v) : '')

function exportRows() {
  exportXlsx(props.mode === 'attivo' ? 'scadenziario.xlsx' : 'ScadenziarioFattureAttive.xlsx', 'Scadenziario', [
    { header: 'Destinatario', key: 'dest', width: 30 }, { header: 'Sponsor', key: 'sp' }, { header: 'Progetto', key: 'prog', width: 40 },
    ...months.value.map(m => ({ header: m.title, key: m.key, type: 'eur' as const })),
  ], [
    ...pivot.value.map(r => ({ dest: L.name(L.clients, r.dest), sp: r.sponsor ? 'SI' : 'NO', prog: r.project?.title ?? '',
      ...Object.fromEntries(months.value.map(m => [m.key, (r.cells[m.key]?.value ?? 0) + (r.cells[m.key]?.tranche ?? 0) || null])) })),
    { dest: 'Totali', ...Object.fromEntries(months.value.map(m => [m.key, colTotal(m.key) || null])) },
  ])
}
</script>

<template>
  <div>
    <v-row density="compact" class="mb-2">
      <v-col cols="12" md="3"><v-autocomplete v-model="f.client" :items="L.clients.value" label="Destinatario" clearable hide-details /></v-col>
      <v-col cols="12" md="3"><v-autocomplete v-model="f.project" :items="L.projects.value" label="Progetto" clearable hide-details /></v-col>
      <v-col cols="6" md="2"><v-select v-model="f.from" :items="years" label="Da anno" hide-details /></v-col>
      <v-col cols="6" md="2"><v-select v-model="f.to" :items="years" label="A anno" hide-details /></v-col>
      <v-col cols="12" md="2" class="d-flex ga-2">
        <v-btn color="primary" icon="mdi-magnify" :loading="loading" title="Cerca" @click="load" />
        <v-btn color="primary" icon="mdi-microsoft-excel" title="Esporta" :disabled="!pivot.length" @click="exportRows" />
      </v-col>
    </v-row>
    <div class="text-caption text-medium-emphasis mb-2">
      <template v-if="mode === 'attivo'">Tranche per mese di emissione prevista, importi senza IVA · verde = fattura emessa, nero = da emettere, rosso = da emettere in un mese passato</template>
      <template v-else>Fatture per mese di incasso (o scadenza se non pagate) · in blu le tranche non ancora fatturate, IVA inclusa · verde = pagate, arancio = in parte, rosso = scadute</template>
    </div>
    <div class="overflow-x-auto">
      <v-table density="compact" class="pivot">
        <thead>
          <tr>
            <th class="sticky">Destinatario</th><th>Sponsor</th><th>Progetto</th>
            <th v-for="m in months" :key="m.key" class="text-end text-no-wrap">{{ m.title }}</th>
          </tr>
          <tr class="font-weight-bold bg-grey-lighten-4">
            <td class="sticky">Totali</td><td /><td />
            <td v-for="m in months" :key="m.key" class="text-end">{{ eurShort(colTotal(m.key)) }}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in pivot" :key="`${r.dest}|${r.project?.value}`">
            <td class="sticky text-no-wrap">{{ L.name(L.clients, r.dest) }}</td>
            <td>{{ r.sponsor ? 'SI' : 'NO' }}</td>
            <td class="text-no-wrap"><NuxtLink v-if="r.project" :to="`/projects/${r.project.value}?tab=tranche`">{{ r.project.title }}</NuxtLink></td>
            <td v-for="m in months" :key="m.key" class="text-end text-no-wrap">
              <template v-if="r.cells[m.key]">
                <span :style="{ color: r.cells[m.key]!.color }" class="font-weight-medium">{{ eurShort(r.cells[m.key]!.value) }}</span>
                <div v-if="r.cells[m.key]!.tranche" class="text-blue font-italic text-caption">{{ eurShort(r.cells[m.key]!.tranche) }}</div>
                <v-icon v-if="r.cells[m.key]!.note" size="x-small" class="ml-1" @click="note = r.cells[m.key]!.note">mdi-information-outline</v-icon>
              </template>
            </td>
          </tr>
          <tr v-if="!pivot.length"><td :colspan="months.length + 3" class="text-center text-medium-emphasis">Nessun dato nel periodo</td></tr>
        </tbody>
        <tfoot>
          <tr class="font-weight-bold bg-grey-lighten-4">
            <td class="sticky">Totali</td><td /><td />
            <td v-for="m in months" :key="m.key" class="text-end">{{ eurShort(colTotal(m.key)) }}</td>
          </tr>
        </tfoot>
      </v-table>
    </div>
    <v-dialog :model-value="!!note" max-width="560" @update:model-value="note = null">
      <v-card title="Dettaglio"><v-card-text style="white-space: pre-line">{{ note }}</v-card-text>
        <v-card-actions><v-spacer /><v-btn @click="note = null">Chiudi</v-btn></v-card-actions></v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.pivot .sticky { position: sticky; left: 0; background: rgb(var(--v-theme-surface)); z-index: 1; }
</style>
