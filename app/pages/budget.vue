<script setup lang="ts">
useHead({ title: 'Budget – Helaproject' })
// Budget aziendale (formule del frontend originale, spec-fatture-finanza §9). Valore attuale = fatture passive imputate alla voce.
const api = useApi()
const toast = useSnackbar()
const { user } = useAuth()
const year = ref(new Date().getFullYear())
const years = Array.from({ length: new Date().getFullYear() + 2 - 2023 }, (_, i) => 2023 + i)
const data = ref<any>(null)
async function load() {
  try { data.value = await api('invoice/budget', { body: { year: year.value } }) }
  catch (e: any) { toast.error(e.message) }
}
watch(year, load, { immediate: true })

type Voce = { id: number, nome: string, costo: number, costo_effettivo: number }
const mol = (v: { costo: number, costo_effettivo: number }) => v.costo - v.costo_effettivo
const pct = (v: { costo: number, costo_effettivo: number }) => (v.costo ? mol(v) / v.costo * 100 : null)
const sum = (g: Voce[]) => ({ costo: g.reduce((a, v) => a + v.costo, 0), costo_effettivo: g.reduce((a, v) => a + v.costo_effettivo, 0) })
const GROUPS = [['V', 'Costi variabili di gestione'], ['P', 'Costi del personale'], ['F', 'Costi fissi']] as const
const calc = computed(() => {
  const d = data.value
  if (!d) return null
  const RP = d.fatturato_acquisito, CPP = d.totalecostopreventivato, CPE = d.totalecostoeffettivo
  const V = sum(d.V), F = sum(d.F), P = sum(d.P)
  const mdc = RP - CPP
  const totVar = { costo: CPP + V.costo, costo_effettivo: CPE + V.costo_effettivo }
  const totAll = F.costo + P.costo + V.costo + CPP
  const reddito = RP - totAll
  return { RP, CPP, CPE, mdc, mdcPct: RP ? mdc / RP * 100 : null, totVar, totAll, reddito, leva: reddito ? mdc / reddito : 0, groups: { V, F, P } }
})
const p = (v: number | null) => (v == null ? '–' : `${v.toFixed(1)} %`)

// gestione voci (superadmin)
const editing = ref<{ id: number, group: string, nome: string, costo: number } | null>(null)
async function saveItem() {
  try {
    await api('budgetitem/createedit', { body: { Budgetitem: { ...editing.value, year: year.value } } })
    editing.value = null
    await load()
  }
  catch (e: any) { toast.error(e.message) }
}
async function removeItem(id: number) {
  try { await api(`budgetitem/delete/${id}`, { method: 'POST' }); await load() }
  catch (e: any) { toast.error(e.message) }
}
function exportRows() {
  const c = calc.value!
  const rows: Record<string, any>[] = [
    { voce: 'RICAVI PRESUNTI', budget: c.RP }, { voce: 'COSTI PASSANTI PRESUNTI', budget: c.CPP }, { voce: 'COSTI PASSANTI EFFETTIVI', attuale: c.CPE },
    { voce: 'MDC NETTO', budget: c.mdc, pct: c.mdcPct },
  ]
  for (const [g, title] of GROUPS) {
    rows.push({ voce: title.toUpperCase() })
    for (const v of data.value[g] as Voce[]) rows.push({ voce: v.nome, budget: v.costo, attuale: v.costo_effettivo, mol: mol(v), pct: pct(v) })
    const t = c.groups[g]
    rows.push({ voce: `Totale ${title.toLowerCase()}`, budget: t.costo, attuale: t.costo_effettivo, mol: mol(t), pct: pct(t) })
  }
  rows.push({ voce: 'TOTALE COSTI VARIABILI E FISSI', budget: c.totAll }, { voce: 'REDDITO OPERATIVO', budget: c.reddito }, { voce: 'LEVA OPERATIVA', budget: c.leva })
  exportXlsx(`budget_${year.value}.xlsx`, `Budget ${year.value}`, [
    { header: 'Voce', key: 'voce', width: 40 }, { header: 'Valore budget', key: 'budget', type: 'eur', width: 18 },
    { header: 'Valore attuale', key: 'attuale', type: 'eur', width: 18 }, { header: 'MOL', key: 'mol', type: 'eur', width: 18 }, { header: '%', key: 'pct' },
  ], rows)
}
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center flex-wrap ga-2 my-4">
      <h1 class="text-h5 page-title mr-auto">Budget {{ year }}</h1>
      <v-select v-model="year" :items="years" label="Anno" hide-details style="max-width: 130px" />
      <v-btn color="primary" prepend-icon="mdi-microsoft-excel" :disabled="!calc" @click="exportRows">XLS</v-btn>
    </div>
    <template v-if="calc">
      <v-row density="compact" class="mb-3">
        <v-col cols="6" md="2"><InfoTile label="Ricavi presunti" :value="formatEur(calc.RP)" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Costi passanti presunti" :value="formatEur(calc.CPP)" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Costi passanti effettivi" :value="formatEur(calc.CPE)" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="MDC netto" :value="`${formatEur(calc.mdc)} (${p(calc.mdcPct)})`" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Reddito operativo" :value="formatEur(calc.reddito)" /></v-col>
        <v-col cols="6" md="2"><InfoTile label="Leva operativa" :value="calc.leva.toLocaleString('it-IT', { maximumFractionDigits: 2 })" /></v-col>
      </v-row>
      <v-card v-for="[g, title] in GROUPS" :key="g" variant="outlined" class="mb-3">
        <v-card-title class="d-flex align-center text-subtitle-1">
          {{ title }}<v-spacer />
          <v-btn v-if="user?.role === 'S'" size="small" variant="text" prepend-icon="mdi-plus" @click="editing = { id: 0, group: g, nome: '', costo: 0 }">Voce</v-btn>
        </v-card-title>
        <v-table density="compact">
          <thead><tr><th>Voce</th><th class="text-end">Valore budget</th><th class="text-end">Valore attuale</th><th class="text-end">MOL</th><th class="text-end">%</th><th /></tr></thead>
          <tbody>
            <tr v-for="v in data[g]" :key="v.id">
              <td>{{ v.nome }}</td><td class="text-end">{{ formatEur(v.costo) }}</td><td class="text-end">{{ formatEur(v.costo_effettivo) }}</td>
              <td class="text-end" :class="mol(v) < 0 ? 'text-red' : ''">{{ formatEur(mol(v)) }}</td><td class="text-end">{{ p(pct(v)) }}</td>
              <td class="text-end">
                <template v-if="user?.role === 'S'">
                  <v-btn icon="mdi-pencil" size="x-small" variant="text" @click="editing = { id: v.id, group: g, nome: v.nome, costo: v.costo }" />
                  <v-btn icon="mdi-delete-outline" size="x-small" variant="text" color="red" @click="removeItem(v.id)" />
                </template>
              </td>
            </tr>
            <tr v-if="g === 'V'"><td>Costi passanti di progetto</td><td class="text-end">{{ formatEur(calc.CPP) }}</td><td class="text-end">{{ formatEur(calc.CPE) }}</td>
              <td class="text-end">{{ formatEur(calc.CPP - calc.CPE) }}</td><td class="text-end">{{ p(calc.CPP ? (calc.CPP - calc.CPE) / calc.CPP * 100 : null) }}</td><td /></tr>
            <tr class="font-weight-bold">
              <td>Totale</td>
              <template v-if="g === 'V'"><td class="text-end">{{ formatEur(calc.totVar.costo) }}</td><td class="text-end">{{ formatEur(calc.totVar.costo_effettivo) }}</td>
                <td class="text-end">{{ formatEur(mol(calc.totVar)) }}</td><td class="text-end">{{ p(pct(calc.totVar)) }}</td></template>
              <template v-else><td class="text-end">{{ formatEur(calc.groups[g].costo) }}</td><td class="text-end">{{ formatEur(calc.groups[g].costo_effettivo) }}</td>
                <td class="text-end">{{ formatEur(mol(calc.groups[g])) }}</td><td class="text-end">{{ p(pct(calc.groups[g])) }}</td></template>
              <td />
            </tr>
          </tbody>
        </v-table>
      </v-card>
      <v-table density="compact" class="font-weight-bold">
        <tbody>
          <tr><td>Totale costi variabili e fissi</td><td class="text-end">{{ formatEur(calc.totAll) }}</td></tr>
          <tr><td>Reddito operativo</td><td class="text-end" :class="calc.reddito < 0 ? 'text-red' : ''">{{ formatEur(calc.reddito) }}</td></tr>
        </tbody>
      </v-table>
      <div class="text-caption text-medium-emphasis mt-2">Valore attuale delle voci = fatture passive imputate alla voce nell'anno · Costi passanti: presunti = costi dei task esterni dei progetti con tranche nell'anno, effettivi = fatture passive su progetto nell'anno (ricostruzione).</div>
    </template>

    <v-dialog :model-value="!!editing" max-width="440" persistent>
      <v-card v-if="editing" :title="editing.id ? 'Modifica voce di budget' : 'Nuova voce di budget'">
        <v-card-text>
          <v-select v-model="editing.group" :items="GROUPS.map(([value, title]) => ({ value, title }))" label="Gruppo" />
          <v-text-field v-model="editing.nome" label="Voce*" />
          <v-text-field v-model.number="editing.costo" type="number" label="Valore budget" prefix="€" />
        </v-card-text>
        <v-card-actions><v-spacer /><v-btn @click="editing = null">Annulla</v-btn><v-btn color="green" variant="flat" @click="saveItem">Salva</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
