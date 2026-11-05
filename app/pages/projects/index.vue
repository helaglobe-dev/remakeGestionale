<script setup lang="ts">
useHead({ title: 'Progetti – Helaproject' })

type Row = Record<string, any>
const api = useApi()
const { user } = useAuth()
const toast = useSnackbar()

// --- filtri, persistiti come nell'originale (localStorage) ---
function stored<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key)
    return v ? JSON.parse(v) as T : fallback
  }
  catch { return fallback }
}
function persist(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)) }
  catch { /* storage non disponibile */ }
}

const FILTERS_KEY = 'hp.filtri.progetti'
const filters = reactive(stored(FILTERS_KEY, {
  client: null as number | null,
  status: [] as string[],
  openstatus: null as string | null,
  responsabile: null as number | null,
  from: null as string | null,
  to: null as string | null,
}))
const search = ref('')
const sortBy = ref<{ key: string, order: 'asc' | 'desc' }[]>(stored('hp.ordinamento', [{ key: 'cliente', order: 'asc' }]))
watch(sortBy, v => persist('hp.ordinamento', v), { deep: true })

const users = ref<{ id: number, name: string, disabled: boolean }[]>([])
const userNames = computed(() => new Map(users.value.map(u => [u.id, u.name])))
const clients = ref<{ id: number, name: string }[]>([])
const rows = ref<Row[]>([])
const loading = ref(false)

// --- colonne ---
const ALL_HEADERS = [
  { title: 'ID', key: 'id', width: 30 },
  { title: 'Colore', key: 'color', sortable: false, width: 30 },
  { title: 'Codice', key: 'code' },
  { title: 'Nome', key: 'name' },
  { title: 'Nome a contratto', key: 'contractname' },
  { title: 'Descrizione', key: 'description', sortable: false },
  { title: 'Cliente', key: 'cliente' },
  { title: 'Resp.', key: 'ownername' },
  { title: 'Creazione', key: 'created' },
  { title: 'Inizio', key: 'startdate' },
  { title: 'Fine', key: 'enddate' },
  { title: 'Totale', key: 'totale' },
  { title: '% Succ.', key: 'successpercent' },
  { title: 'Stato', key: 'status' },
  { title: 'Aperto', key: 'openstatus' },
  { title: 'Note', key: 'note' },
  { title: 'Note Addendum', key: 'noteaddendum' },
] as const
const DEFAULT_COLUMNS = ['color', 'code', 'name', 'cliente', 'created', 'startdate', 'enddate', 'totale', 'successpercent', 'status', 'openstatus']
const visibleColumns = ref<string[]>(stored('hp.colonne', DEFAULT_COLUMNS))
watch(visibleColumns, v => persist('hp.colonne', v))
const headers = computed(() => [
  ...ALL_HEADERS.filter(h => visibleColumns.value.includes(h.key)),
  { title: 'Azioni', key: 'actions', sortable: false, align: 'end' as const },
])
const customKeySort = { code: compareProjectCode }

// --- caricamento ---
async function loadLookups() {
  const [u, c] = await Promise.all([api<any[]>('user/list'), api<any[]>('client/list')])
  users.value = u.map(x => ({ id: x.id, name: `${x.firstname} ${x.lastname}`, disabled: x.activeuser !== 1 }))
  clients.value = c
}

async function load() {
  persist(FILTERS_KEY, filters)
  loading.value = true
  try {
    const data = await api<any[]>('project/completelist', { body: { ...filters, client: filters.client ?? 0 } })
    const me = user.value!
    rows.value = data.map((r) => {
      const p = r.Project
      const ownerIds: number[] = r.Projectuser.map((o: any) => o.user_id)
      return {
        ...p,
        cliente: r.Client.name,
        color: r.Projectcolor.color,
        ownerIds,
        ownername: ownerIds.map(id => userNames.value.get(id)).filter(Boolean).join(', '),
        totale: projectTotal(p),
        successpercent: p.status === 'I' ? p.successpercent : 0,
        caneditproject: me.role === 'S' || me.role === 'A' || ownerIds.includes(me.id),
        attention: (p.status === 'I' || p.status === 'H') && p.startdate
          && new Date(new Date(p.startdate).setMonth(new Date(p.startdate).getMonth() + 3)) < new Date(),
      }
    })
  }
  catch (e: any) { toast.error(e.message) }
  finally { loading.value = false }
}

onMounted(async () => {
  await loadLookups()
  await load()
})

// --- preset date creazione ---
function setPreset(kind: 'oggi' | 'mese' | 'mesePrec' | 'anno') {
  const d = new Date()
  const iso = (x: Date) => x.toLocaleDateString('fr-CA')
  if (kind === 'oggi') { filters.from = filters.to = iso(d) }
  if (kind === 'mese') { filters.from = iso(new Date(d.getFullYear(), d.getMonth(), 1)); filters.to = iso(new Date(d.getFullYear(), d.getMonth() + 1, 0)) }
  if (kind === 'mesePrec') { filters.from = iso(new Date(d.getFullYear(), d.getMonth() - 1, 1)); filters.to = iso(new Date(d.getFullYear(), d.getMonth(), 0)) }
  if (kind === 'anno') { filters.from = iso(new Date(d.getFullYear(), 0, 1)); filters.to = iso(new Date(d.getFullYear(), 11, 31)) }
}

// --- dialog progetto / eliminazione / note ---
const dialog = ref<{ open: boolean, id: number, clone: boolean }>({ open: false, id: 0, clone: false })
const openDialog = (id = 0, clone = false) => { dialog.value = { open: true, id, clone } }
async function onSaved() {
  dialog.value.open = false
  await load()
}

const toDelete = ref<Row | null>(null)
async function confirmDelete() {
  const p = toDelete.value!
  toDelete.value = null
  try {
    await api(`project/delete/${p.id}`, { method: 'POST' })
    toast.success('Progetto eliminato')
    await load()
  }
  catch (e: any) { toast.error(e.message) }
}
const noteToShow = ref<string | null>(null)

// --- export Excel ---
async function exportXlsx() {
  const { default: ExcelJS } = await import('exceljs')
  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet('Progetti')
  const cols: [string, string, number][] = [
    ['ID', 'id', 8], ['Codice', 'code', 14], ['Nome', 'name', 50], ['Nome a contratto', 'contractname', 35],
    ['Descrizione', 'description', 40], ['Tipo', 'typecoded', 20], ['Creazione', 'created', 12], ['Inizio', 'startdate', 12],
    ['Fine', 'enddate', 12], ['Cliente', 'cliente', 30], ['Resp.', 'ownername', 30], ['Stato', 'statuscoded', 30],
    ['Aperto', 'openstatuscoded', 8], ['Note', 'note', 50], ['Note Addendum', 'noteaddendum', 50],
    ['Totale proposta', 'totaleproposta', 15], ['Incremento', 'incrementoproposta', 12], ['Tipo incremento', 'tipoincr', 14],
    ['Sconto', 'scontoproposta', 12], ['Tipo sconto', 'tiposconto', 14], ['Note Incremento', 'noteincremento', 30],
    ['Note Sconto', 'notesconto', 30], ['Costo', 'costoproposta', 15], ['Costo reale', 'costopropostareal', 15],
    ['Tot. proposta attuale', 'totalepropostamodified', 18], ['Costo proposta attuale', 'costopropostamodified', 18],
    ['Nuovo totale proposta', 'newtotaleproposta', 18], ['Progetto Interno', 'interno', 10], ['Perc. di successo', 'successpercent', 10],
    ['Perc. di split', 'splitpercent', 10], ['Anno Split', 'splityear', 10], ['Perc. di split anno succ.', 'splitpercent1', 10],
    ['Anno Split succ.', 'splityear1', 10],
  ]
  ws.columns = cols.map(([header, key, width]) => ({ header, key, width }))
  ws.getRow(1).font = { bold: true }
  for (const r of sortedRows()) {
    ws.addRow({
      ...r,
      created: formatDate(r.created), startdate: formatDate(r.startdate), enddate: formatDate(r.enddate),
      typecoded: PROJECT_TYPES.find(t => t.code === r.type)?.name ?? '',
      statuscoded: statusName(r.status), openstatuscoded: r.openstatus === 'A' ? 'Si' : 'No',
      interno: r.internalproject ? 'Si' : 'No',
      tipoincr: r.tipoincrementoproposta === 'V' ? 'Valore' : 'Percentuale',
      tiposconto: r.tiposcontoproposta === 'V' ? 'Valore' : 'Percentuale',
    })
  }
  const blob = new Blob([await wb.xlsx.writeBuffer()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: 'export-progetti.xlsx' })
  a.click()
  URL.revokeObjectURL(a.href)
}
function sortedRows() {
  const out = [...rows.value]
  return out.sort((a, b) => {
    for (const { key, order } of sortBy.value) {
      const c = key === 'code' ? compareProjectCode(a.code, b.code)
        : typeof a[key] === 'number' ? a[key] - b[key]
          : String(a[key] ?? '').localeCompare(String(b[key] ?? ''), 'it', { numeric: true })
      if (c) return order === 'desc' ? -c : c
    }
    return 0
  })
}
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center flex-wrap ga-2 my-4">
      <h1 class="text-h5 page-title mr-auto">Progetti</h1>
      <v-btn v-if="user?.hasprojects === 1" color="green" prepend-icon="mdi-plus" @click="openDialog()">Crea progetto</v-btn>
      <v-btn color="primary" prepend-icon="mdi-export" @click="exportXlsx">XLS</v-btn>
    </div>

    <v-row density="compact">
      <v-col cols="12" md="2">
        <v-autocomplete v-model="filters.client" :items="clients" item-title="name" item-value="id" label="Clienti" clearable no-data-text="Nessun risultato trovato" />
      </v-col>
      <v-col cols="12" md="3">
        <v-select v-model="filters.status" :items="PROJECT_STATUSES" item-title="name" item-value="code" label="Stato" multiple chips closable-chips clearable>
          <template #chip="{ item, props }">
            <v-chip v-bind="props" :color="item.color" variant="elevated" label size="small">{{ item.code }}</v-chip>
          </template>
        </v-select>
      </v-col>
      <v-col cols="12" md="2">
        <v-select v-model="filters.openstatus" :items="OPEN_STATUSES" item-title="name" item-value="code" label="Stato apertura" clearable />
      </v-col>
      <v-col cols="12" md="2">
        <v-autocomplete v-model="filters.responsabile" :items="users" item-title="name" item-value="id" label="Responsabile di Progetto" clearable no-data-text="Nessun risultato trovato" />
      </v-col>
      <v-col cols="12" md="3" class="d-flex ga-2">
        <v-text-field v-model="filters.from" type="date" label="Creato dal" clearable />
        <v-text-field v-model="filters.to" type="date" label="al" clearable />
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-calendar-range" variant="text" title="Periodi rapidi" />
          </template>
          <v-list density="compact">
            <v-list-item title="Oggi" @click="setPreset('oggi')" />
            <v-list-item title="Mese corrente" @click="setPreset('mese')" />
            <v-list-item title="Mese precedente" @click="setPreset('mesePrec')" />
            <v-list-item title="Anno corrente" @click="setPreset('anno')" />
          </v-list>
        </v-menu>
      </v-col>
      <v-col cols="12" class="d-flex justify-end mt-n2 mb-2">
        <v-btn color="white" variant="elevated" prepend-icon="mdi-magnify" :loading="loading" @click="load">Cerca</v-btn>
      </v-col>
    </v-row>

    <v-select
      v-model="visibleColumns" :items="ALL_HEADERS" item-title="title" item-value="key"
      label="Colonne visibili" multiple chips closable-chips class="mb-2" hide-details
    />

    <v-data-table
      v-model:sort-by="sortBy" :items="rows" :headers="headers" :search="search" :loading="loading"
      :custom-key-sort="customKeySort" density="compact" :items-per-page="25" multi-sort
      :items-per-page-options="[10, 15, 25, 50, { value: -1, title: 'Tutti' }]"
      no-data-text="Nessun elemento disponibile" loading-text="Caricamento…"
    >
      <template #top>
        <v-text-field v-model="search" label="Cerca nei risultati" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable />
      </template>
      <template #[`item.color`]="{ item }">
        <v-chip v-if="item.color" :color="item.color" variant="elevated" size="x-small" label />
      </template>
      <template #[`item.code`]="{ item }">
        <span :title="`ID ${item.id}`" class="cell-nowrap">{{ item.code }}</span>
        <v-tooltip v-if="item.attention" text="Progetto da attenzionare: sono passati oltre 3 mesi dall'inizio del progetto e risulta in Discussione/Hold">
          <template #activator="{ props }">
            <v-icon v-bind="props" color="orange" size="small" class="ml-1">mdi-alert-outline</v-icon>
          </template>
        </v-tooltip>
      </template>
      <template #[`item.name`]="{ item }">
        <NuxtLink :to="`/projects/${item.id}`" class="hg-link">{{ item.name }}</NuxtLink>
        <v-chip v-if="item.internalproject" label size="x-small" variant="outlined" class="ml-1">Interno</v-chip>
        <v-chip v-if="item.type === 'A'" label size="x-small" variant="outlined" color="blue" class="ml-1">Ammin.</v-chip>
        <v-chip v-if="item.type === 'F'" label size="x-small" variant="outlined" color="green" class="ml-1">Ferie</v-chip>
      </template>
      <template #[`item.created`]="{ item }">{{ formatDate(item.created) }}</template>
      <template #[`item.startdate`]="{ item }">{{ formatDate(item.startdate) }}</template>
      <template #[`item.enddate`]="{ item }">{{ formatDate(item.enddate) }}</template>
      <template #[`item.totale`]="{ item }"><span class="cell-nowrap">{{ formatEur(item.totale) }}</span></template>
      <template #[`item.successpercent`]="{ item }">
        <span v-if="item.status === 'I'">{{ item.successpercent }} %</span>
      </template>
      <template #[`item.status`]="{ item }">
        <v-chip :color="statusColor(item.status)" variant="elevated" size="small" label :title="statusName(item.status)">{{ item.status }}</v-chip>
      </template>
      <template #[`item.openstatus`]="{ item }">
        <v-icon v-if="item.openstatus === 'A'" color="green" title="Aperto">mdi-check-bold</v-icon>
      </template>
      <template #[`item.actions`]="{ item }">
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-dots-vertical" variant="text" size="small" />
          </template>
          <v-list density="compact">
            <v-list-item v-if="item.note" prepend-icon="mdi-information-outline" title="Info" @click="noteToShow = item.note" />
            <v-list-item prepend-icon="mdi-text-box-search-outline" title="Dettagli" :to="`/projects/${item.id}`" />
            <v-list-item v-if="item.caneditproject" prepend-icon="mdi-pencil" title="Modifica" @click="openDialog(item.id)" />
            <v-list-item v-if="user?.hasprojects === 1" prepend-icon="mdi-content-copy" title="Duplica" @click="openDialog(item.id, true)" />
            <v-list-item v-if="item.caneditproject && item.status !== 'D'" prepend-icon="mdi-delete-outline" base-color="red" title="Elimina" @click="toDelete = item" />
          </v-list>
        </v-menu>
      </template>
    </v-data-table>

    <ProjectDialog
      v-if="dialog.open" :id="dialog.id" :clone="dialog.clone" :users="users" :clients="clients"
      @close="dialog.open = false" @saved="onSaved"
    />

    <v-dialog :model-value="!!toDelete" max-width="480" @update:model-value="toDelete = null">
      <v-card title="Elimina progetto">
        <v-card-text>Vuoi veramente eliminare il progetto {{ toDelete?.name }} [{{ toDelete?.code }}]?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="toDelete = null">Annulla</v-btn>
          <v-btn color="red" variant="flat" @click="confirmDelete">Elimina</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog :model-value="!!noteToShow" max-width="400" @update:model-value="noteToShow = null">
      <v-card title="Note">
        <v-card-text style="white-space: pre-wrap">{{ noteToShow }}</v-card-text>
        <v-card-actions><v-spacer /><v-btn color="primary" @click="noteToShow = null">Chiudi</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
