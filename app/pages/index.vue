<script setup lang="ts">
useHead({ title: 'Dashboard – Helaproject' })
// Dashboard (manuale §1, spec-fatture-finanza §12). Alert ore per tutti; sezioni economiche con "Visualizza dashboard".
const api = useApi()
const { user } = useAuth()
const Y = new Date().getFullYear()
const alert = ref<{ alerttask: number, giorno: string, ore: number } | null>(null)
const can = computed(() => user.value?.viewdashboard === 1)

const OPEN = [{ value: 'A', title: 'Tutti' }, { value: 'O', title: 'Aperti' }, { value: 'C', title: 'Chiusi' }]
const INTERNAL = [{ value: 'ALL', title: 'Tutti' }, { value: 0, title: 'Esterni' }, { value: 1, title: 'Interni' }]
const defaults = {
  eco: { from: `${Y}-01-01`, to: `${Y}-12-31`, open: 'A', internal: 'ALL' as string | number },
  mac: { from: `${Y}-01-01`, to: localDay(), open: 'A', internal: 'ALL' as string | number },
  cli: { open: 'O', internal: 0 as string | number },
  pro: { from: `${Y}-01-01`, to: localDay(), users: [] as number[], open: 'O', internal: 'ALL' as string | number },
  per: { open: 'O', internal: 'ALL' as string | number },
}
const { filters: f, save, reset } = useStoredFilters('hp.dashboard', structuredClone(defaults))
const eco = ref<any>(null), mac = ref<any>(null), cli = ref<any>(null), pro = ref<any>(null), per = ref<any>(null)
const users = ref<{ value: number, title: string }[]>([])
const perSearch = ref('')
const showUsers = ref(false)

async function loadEco() { eco.value = await api('user/getSuperAdminDashboardDataEconomico', { body: { from: f.eco.from, to: f.eco.to, onlyopenEconomico: f.eco.open, internalFilterEconomico: f.eco.internal } }) }
async function loadMac() { mac.value = await api('user/getSuperAdminDashboardDataMacchina', { body: { frommacchina: f.mac.from, tomacchina: f.mac.to, onlyopenMacchina: f.mac.open, internalFilterMacchina: f.mac.internal } }) }
async function loadCli() { cli.value = await api('user/getSuperAdminDashboardDataClienti', { body: { onlyopenClienti: f.cli.open, internalFilterClienti: f.cli.internal } }) }
async function loadPro() { pro.value = await api('user/getSuperAdminDashboardDataProgetti', { body: { fromprogetti: f.pro.from, toprogetti: f.pro.to, users: f.pro.users, onlyopenProgetti: f.pro.open, internalFilterProgetti: f.pro.internal } }) }
async function loadPer() { per.value = await api('user/getSuperAdminDashboardDataPerformance', { body: { onlyopen: f.per.open, internalFilter: f.per.internal } }) }
const loaders = { eco: loadEco, mac: loadMac, cli: loadCli, pro: loadPro, per: loadPer }
async function refresh(k: keyof typeof loaders) { save(); await loaders[k]().catch(() => {}) }

onMounted(async () => {
  alert.value = await api('user/getSuperAdminDashboardData', { body: {} }).catch(() => null)
  if (!can.value) return
  users.value = (await api<any[]>('user/list')).filter(u => u.activeuser && u.usedindashboard).map(u => ({ value: u.id, title: `${u.firstname} ${u.lastname}` }))
  await Promise.all(Object.values(loaders).map(l => l().catch(() => {})))
})
async function resetAll() { reset(); await Promise.all(Object.values(loaders).map(l => l().catch(() => {}))) }

const n2 = (v: number | null | undefined) => (v == null ? 'n.a.' : v.toLocaleString('it-IT', { maximumFractionDigits: 1 }))
const traffic = (v: number, a: number, b: number) => (v < a ? 'red' : v < b ? 'orange' : 'green')
const loadColor = (v: number) => (v < 60 ? 'green' : v < 90 ? 'orange' : 'red')
const userName = (id: number) => users.value.find(u => u.value === id)?.title ?? `#${id}`
const perRows = computed(() => (per.value?.progetti ?? [])
  .map((p: any) => ({ ...p, margine: per.value.arymargini[p.id], pct: per.value.arypercentuale[p.id] }))
  .filter((p: any) => !perSearch.value || `${p.code} ${p.name}`.toLowerCase().includes(perSearch.value.toLowerCase())))
</script>

<template>
  <v-container fluid class="px-6">
    <h1 class="page-title my-4">Dashboard</h1>
    <v-alert v-if="alert?.alerttask" type="warning" variant="flat" class="mb-4" icon="mdi-alert-circle">
      ATTENZIONE: verifica l'inserimento delle tue ore nei giorni scorsi ({{ fmtDay(alert.giorno) }}: {{ n2(alert.ore) }} h registrate)
      <template #append><v-btn to="/todolist" variant="outlined" size="small">Registra ore</v-btn></template>
    </v-alert>
    <v-alert v-if="!can" type="info" variant="tonal">Benvenuto in Helaproject. Usa il menu per accedere a progetti e calendario.</v-alert>

    <template v-else>
      <div class="d-flex justify-end mb-4"><v-btn color="red" @click="resetAll">Reset filtri</v-btn></div>

      <DashSection title="Economico" icon="mdi-numeric-1-circle-outline">
        <template #filters>
          <v-text-field v-model="f.eco.from" type="date" prefix="Dal" aria-label="Dal" hide-details density="compact" bg-color="white" style="max-width: 185px" />
          <v-text-field v-model="f.eco.to" type="date" prefix="Al" aria-label="Al" hide-details density="compact" bg-color="white" style="max-width: 185px" />
          <v-btn icon="mdi-refresh" variant="text" title="Aggiorna" @click="refresh('eco')" />
        </template>
        <v-row density="compact" class="mb-2">
          <v-col cols="12" md="6"><v-select v-model="f.eco.open" :items="OPEN" label="Aperti/Chiusi/Tutti" hide-details @update:model-value="refresh('eco')" /></v-col>
          <v-col cols="12" md="6"><v-select v-model="f.eco.internal" :items="INTERNAL" label="Esterni/Interni/Tutti" hide-details @update:model-value="refresh('eco')" /></v-col>
        </v-row>
        <v-row v-if="eco">
          <v-col cols="12" md="4"><KpiTile label="Fatturato acquisito" :value="formatEur(eco.fatturato_acquisito)" note="Stato: Approvato / In attesa di contratto"
            info="Somma degli imponibili delle tranche con emissione prevista nel periodo, per i progetti Approvati o Confermati" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Pipeline ponderata attiva (anno corrente)" :value="formatEur(eco.pipeline)" :note="`${eco.ndiscussione} proposte in discussione`"
            info="Preventivi dei progetti In discussione o Confermati (quota split dell'anno corrente) ponderati con la probabilità di successo" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Win Rate" :value="eco.winrate == null ? 'n.a.' : `${n2(eco.winrate)} %`"
            info="Progetti passati ad Approvato/Confermato ÷ progetti passati ad Approvato/Confermato/Rifiutato nel periodo × 100" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Fatturato emesso" :value="formatEur(eco.fatturato_emesso)" note="da data fattura" info="Imponibile delle fatture con data fattura nel periodo" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Fatturato emesso pagato" :value="formatEur(eco.fatturato_emesso_pagato)" note="da data fattura" info="Imponibile delle fatture pagate con data fattura nel periodo" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Fatturato emesso pagato/emesso" :value="eco.fatturato_emesso ? `${n2(eco.fatturato_emesso_pagato / eco.fatturato_emesso * 100)} %` : 'n.a.'" /></v-col>
          <v-col cols="12">
            <div class="d-flex align-center text-brand font-weight-bold mb-3"><v-icon class="mr-2">mdi-format-align-left</v-icon>Progressione verso target annuo {{ Y }}</div>
            <div class="d-flex text-brand text-body-2 mb-1">
              <span class="font-weight-bold mr-auto">Fatturato acquisito {{ Y }}</span>
              <span>{{ formatEur(eco.fatturato_acquisito_corrente) }} / {{ formatEur(eco.targetannuo) }} ({{ n2(eco.targetannuo ? eco.fatturato_acquisito_corrente / eco.targetannuo * 100 : null) }} %)</span>
            </div>
            <v-progress-linear :model-value="eco.targetannuo ? eco.fatturato_acquisito_corrente / eco.targetannuo * 100 : 0" height="12" rounded
              :color="traffic(eco.targetannuo ? eco.fatturato_acquisito_corrente / eco.targetannuo * 100 : 0, 60, 90)" />
          </v-col>
          <v-col cols="12" md="4"><KpiTile label="Gap residuo puro" :value="formatEur(eco.targetannuo - eco.fatturato_acquisito_corrente)" info="Target annuo − fatturato acquisito nell'anno corrente" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Forecast" :value="formatEur(eco.fatturato_acquisito_corrente + eco.pipeline)" info="Fatturato acquisito + pipeline ponderata nell'anno corrente" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Gap coperto (incl. pipeline ponderata)" :value="formatEur(eco.targetannuo - eco.fatturato_acquisito_corrente - eco.pipeline)" info="Target annuo − forecast" /></v-col>
        </v-row>
      </DashSection>

      <v-row>
        <v-col cols="12" lg="6">
          <DashSection title="Macchina commerciale" icon="mdi-numeric-2-circle-outline">
            <template #filters>
              <v-text-field v-model="f.mac.from" type="date" prefix="Dal" aria-label="Dal" hide-details density="compact" bg-color="white" style="max-width: 180px" />
              <v-text-field v-model="f.mac.to" type="date" prefix="Al" aria-label="Al" hide-details density="compact" bg-color="white" style="max-width: 180px" />
              <v-btn icon="mdi-refresh" variant="text" title="Aggiorna" @click="refresh('mac')" />
            </template>
            <v-row v-if="mac">
              <v-col cols="12" md="4"><KpiTile label="Proposte inviate" :value="String(mac.ninviate)" info="Progetti passati in stato In discussione nel periodo" /></v-col>
              <v-col cols="12" md="4">
                <KpiTile label="Tempo medio alla proposta" :value="mac.tempomedioallaproposta == null ? 'n.a.' : `${n2(mac.tempomedioallaproposta)} gg`"
                  :color="mac.tempomedioallaproposta == null ? undefined : mac.tempomedioallaproposta <= 15 ? '#2e7d32' : '#c62828'"
                  note="obiettivo ≤ 15 gg lavorativi" info="Giorni lavorativi dalla creazione del progetto al passaggio In discussione" />
              </v-col>
              <v-col cols="12" md="4">
                <KpiTile label="Ciclo commerciale medio" :value="mac.tempomedioaltro == null ? 'n.a.' : `${n2(mac.tempomedioaltro)} gg`"
                  :color="mac.tempomedioaltro == null ? undefined : mac.tempomedioaltro <= 60 ? '#2e7d32' : mac.tempomedioaltro <= 70 ? '#ef6c00' : '#c62828'"
                  note="obiettivo ≤ 60 gg lavorativi" info="Giorni lavorativi dalla creazione al passaggio Approvato/Confermato o Rifiutato" />
              </v-col>
            </v-row>
          </DashSection>
        </v-col>
        <v-col cols="12" lg="6">
          <DashSection title="Clienti prioritari" icon="mdi-numeric-3-circle-outline">
            <template #filters><v-btn icon="mdi-refresh" variant="text" title="Aggiorna" @click="refresh('cli')" /></template>
            <v-table v-if="cli" density="compact">
              <thead><tr><th>Cliente</th><th class="text-end">Portafoglio attivo</th><th class="text-end">Attivi</th><th class="text-end">In coda</th></tr></thead>
              <tbody>
                <tr v-for="(c, id) in cli.arycliente" :key="id"><td>{{ c.client_name }}</td><td class="text-end">{{ formatEur(c.valore_portafoglio) }}</td>
                  <td class="text-end">{{ c.attivi }}</td><td class="text-end">{{ c.coda }}</td></tr>
                <tr v-if="!Object.keys(cli.arycliente).length"><td colspan="4" class="text-medium-emphasis">Nessun cliente segnato come prioritario (Clienti › Cliente prioritario)</td></tr>
              </tbody>
            </v-table>
          </DashSection>
        </v-col>
      </v-row>

      <DashSection title="Execution progetti" icon="mdi-numeric-4-circle-outline">
        <template #filters>
          <v-text-field v-model="f.pro.from" type="date" prefix="Dal" aria-label="Dal" hide-details density="compact" bg-color="white" style="max-width: 180px" />
          <v-text-field v-model="f.pro.to" type="date" prefix="Al" aria-label="Al" hide-details density="compact" bg-color="white" style="max-width: 180px" />
          <v-btn icon="mdi-refresh" variant="text" title="Aggiorna" @click="refresh('pro')" />
        </template>
        <v-autocomplete v-model="f.pro.users" :items="users" label="Persone (vuoto = tutte)" multiple chips closable-chips hide-details class="mb-4" @update:model-value="refresh('pro')" />
        <v-row v-if="pro">
          <v-col cols="12" md="4">
            <KpiTile label="Carico medio del team" :value="`${n2(pro.caricomedio)} %`" :color="pro.caricomedio < 60 ? '#2e7d32' : pro.caricomedio < 90 ? '#ef6c00' : '#c62828'"
              info="Ore assegnate su progetti Approvati/Confermati ÷ ore disponibili (lun–ven esclusi festività, chiusure e ferie)">
              <v-btn size="small" variant="text" color="brand" class="mt-1 px-0" @click="showUsers = !showUsers">{{ showUsers ? 'Nascondi dettaglio' : 'Dettaglio utenti' }}</v-btn>
            </KpiTile>
          </v-col>
          <v-col cols="12" md="4"><KpiTile label="Avanzamento fisico" :value="pro.tasktotali ? `${n2(pro.taskcompletati / pro.tasktotali * 100)} %` : 'n.a.'"
            :note="`${pro.taskcompletati} task completati su ${pro.tasktotali}`" info="Task completati ÷ task totali dei progetti aperti Approvati/Confermati" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Avanzamento temporale" :value="`${n2(pro.percentule_avanzamento)} %`" info="Tempo trascorso ÷ durata, media dei progetti aperti Approvati/Confermati" /></v-col>
          <v-col v-if="showUsers" cols="12">
            <v-table density="compact">
              <thead><tr><th>Persona</th><th class="text-end">Ore assegnate</th><th class="text-end">Ore disponibili</th><th class="text-end">Carico</th></tr></thead>
              <tbody>
                <tr v-for="u in pro.caricoutenti" :key="u.id"><td>{{ userName(u.id) }}</td><td class="text-end">{{ n2(u.usate) }}</td><td class="text-end">{{ n2(u.disponibili) }}</td>
                  <td class="text-end font-weight-medium" :class="`text-${loadColor(u.disponibili ? u.usate / u.disponibili * 100 : 0)}`">{{ u.disponibili ? `${n2(u.usate / u.disponibili * 100)} %` : '–' }}</td></tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </DashSection>

      <DashSection title="Performance economica progetti" icon="mdi-numeric-5-circle-outline">
        <template #filters><v-btn icon="mdi-refresh" variant="text" title="Aggiorna" @click="refresh('per')" /></template>
        <v-row density="compact" class="mb-2">
          <v-col cols="12" md="6"><v-select v-model="f.per.open" :items="OPEN" label="Aperti/Chiusi/Tutti" hide-details @update:model-value="refresh('per')" /></v-col>
          <v-col cols="12" md="6"><v-select v-model="f.per.internal" :items="INTERNAL" label="Esterni/Interni/Tutti" hide-details @update:model-value="refresh('per')" /></v-col>
        </v-row>
        <v-row v-if="per">
          <v-col cols="12" md="4"><KpiTile label="Margine portafoglio rolling" :value="formatEur(per.aggregatovalore)" :note="`${n2(per.aggregatopercentuale)} % sul preventivato`"
            info="Somma dei margini di progetto attuali e percentuale sul totale preventivato" /></v-col>
          <v-col cols="12" md="4"><KpiTile :label="`Progetti sotto soglia margine (${n2(per.soglia)} %)`" :value="String(per.countprog)"
            info="Progetti aperti Approvati/Confermati con margine sotto la soglia definita nei Target annui" /></v-col>
          <v-col cols="12" md="4"><KpiTile label="Valore aggregato sotto soglia" :value="formatEur(per.tot)" info="Somma dei preventivi dei progetti sotto soglia" /></v-col>
          <v-col v-if="per.countprog" cols="12">
            <v-chip v-for="(name, id) in per.elencoprogetti" :key="id" :to="`/projects/${id}`" color="red" variant="tonal" size="small" class="mr-1 mb-1">{{ name }}</v-chip>
          </v-col>
          <v-col cols="12">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel title="Dettaglio progetti">
                <v-expansion-panel-text>
                  <v-text-field v-model="perSearch" label="Cerca progetto" hide-details class="mb-2" clearable />
                  <v-table density="compact">
                    <thead><tr><th>Progetto</th><th class="text-end">Margine</th><th class="text-end">%</th></tr></thead>
                    <tbody>
                      <tr v-for="p in perRows" :key="p.id"><td><NuxtLink :to="`/projects/${p.id}?tab=economics`">[{{ p.code }}] {{ p.name }}</NuxtLink></td>
                        <td class="text-end">{{ formatEur(p.margine) }}</td><td class="text-end" :class="p.pct < per.soglia ? 'text-red' : ''">{{ n2(p.pct) }} %</td></tr>
                    </tbody>
                  </v-table>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </DashSection>
    </template>
  </v-container>
</template>
