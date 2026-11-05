<script setup lang="ts">
useHead({ title: 'Gestione calendario – Helaproject' })
type Ev = { id: number, day: string, type: string, description: string, color: string | null }
const api = useApi()
const toast = useSnackbar()
const year = ref(new Date().getFullYear())
const years = Array.from({ length: new Date().getFullYear() + 6 - 2023 }, (_, i) => 2023 + i)
const rows = ref<Ev[]>([])
const colors = ref<{ title: string, value: string }[]>([])
const search = ref('')

async function load() {
  try { rows.value = await api<Ev[]>('holiday/list', { body: { year: year.value } }) }
  catch (e: any) { toast.error(e.message) }
}
watch(year, load, { immediate: true })
onMounted(async () => {
  colors.value = (await api<any[]>('projectcolor/list')).map(r => ({ title: r.Projectcolor.name, value: r.Projectcolor.color }))
})
const recurring = (e: Ev) => e.day.startsWith('0000')
const ddmm = (e: Ev) => `${e.day.slice(8, 10)}/${e.day.slice(5, 7)}`

// Il form usa le stesse date testuali dell'originale: GG-MM (ricorrente) o GG-MM-AAAA
type Form = { id: number, type: string, ricorrente: number, giornomese: string, day: string, daya: string, description: string, color: string | null }
const editing = ref<Form | null>(null)
const form = ref()
function open(e?: Ev) {
  editing.value = e
    ? { id: e.id, type: e.type, ricorrente: recurring(e) ? 1 : 0, giornomese: `${e.day.slice(8, 10)}-${e.day.slice(5, 7)}`,
        day: `${e.day.slice(8, 10)}-${e.day.slice(5, 7)}-${e.day.slice(0, 4)}`, daya: '', description: e.description, color: e.color }
    : { id: 0, type: 'F', ricorrente: 0, giornomese: '', day: '', daya: '', description: '', color: colors.value[0]?.value ?? null }
}
const req = (v: string) => !!v?.trim() || 'Campo obbligatorio'
const fmt = (re: RegExp, msg: string) => (v: string) => !v || re.test(v) || msg
async function save() {
  if (!(await form.value.validate()).valid) return
  try {
    await api('holiday/createedit', { body: { Holiday: editing.value } })
    toast.success('Salvataggio completato')
    editing.value = null
    await load()
  }
  catch (e: any) { toast.error(e.message) }
}
const toDelete = ref<Ev | null>(null)
async function remove() {
  const id = toDelete.value!.id
  toDelete.value = null
  try {
    await api(`holiday/delete/${id}`, { method: 'POST' })
    toast.success('Evento cancellato')
    await load()
  }
  catch (e: any) { toast.error(e.message) }
}
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center flex-wrap ga-2 my-4">
      <h1 class="text-h5 page-title mr-auto">Eventi in calendario</h1>
      <v-select v-model="year" :items="years" label="Anno" hide-details style="max-width: 140px" />
      <v-btn color="green" prepend-icon="mdi-plus" @click="open()">Nuovo evento</v-btn>
    </div>
    <v-data-table :items="rows" :search="search" density="compact" :items-per-page="30" no-data-text="Nessun evento"
      :sort-by="[{ key: 'day', order: 'asc' }]" :custom-key-sort="{ day: (a: string, b: string) => a.slice(5).localeCompare(b.slice(5)) }"
      :headers="[{ title: 'Giorno', key: 'day' }, { title: 'Anno', key: 'year', sortable: false }, { title: 'Tipo', key: 'type' },
                 { title: 'Colore', key: 'color', sortable: false }, { title: 'Descrizione', key: 'description' }, { title: '', key: 'actions', sortable: false, align: 'end' }]">
      <template #top><v-text-field v-model="search" label="Cerca" prepend-inner-icon="mdi-magnify" class="pa-2" hide-details clearable /></template>
      <template #[`item.day`]="{ item }">{{ ddmm(item) }}</template>
      <template #[`item.year`]="{ item }">{{ recurring(item) ? 'ogni anno' : item.day.slice(0, 4) }}</template>
      <template #[`item.type`]="{ item }">{{ optTitle(HOLIDAY_TYPES, item.type) }}</template>
      <template #[`item.color`]="{ item }"><v-chip v-if="item.color" :color="item.color" variant="elevated" size="x-small" label /></template>
      <template #[`item.actions`]="{ item }">
        <v-btn icon="mdi-pencil" size="small" variant="text" @click="open(item)" />
        <v-btn icon="mdi-delete-outline" size="small" variant="text" color="red" @click="toDelete = item" />
      </template>
    </v-data-table>

    <v-dialog :model-value="!!editing" max-width="560" persistent>
      <v-card v-if="editing" :title="editing.id ? 'Modifica evento' : 'Nuovo evento'">
        <v-card-text>
          <v-form ref="form" @submit.prevent="save">
            <v-row density="compact">
              <v-col cols="6"><v-select v-model="editing.type" :items="HOLIDAY_TYPES" label="Tipo*" /></v-col>
              <v-col cols="6"><v-switch v-model="editing.ricorrente" :true-value="1" :false-value="0" color="green" inset hide-details label="Ricorrente ogni anno" /></v-col>
              <v-col v-if="editing.ricorrente" cols="12">
                <v-text-field v-model="editing.giornomese" label="Giorno-Mese*" placeholder="25-12" :rules="[req, fmt(/^\d{2}-\d{2}$/, 'Formato GG-MM')]" />
              </v-col>
              <template v-else>
                <v-col cols="6">
                  <v-text-field v-model="editing.day" :label="editing.id ? 'Giorno*' : 'Da giorno*'" placeholder="14-08-2026" :rules="[req, fmt(/^\d{2}-\d{2}-\d{4}$/, 'Formato GG-MM-AAAA')]" />
                </v-col>
                <v-col v-if="!editing.id" cols="6">
                  <v-text-field v-model="editing.daya" label="A giorno (se più giorni)" placeholder="16-08-2026" :rules="[fmt(/^\d{2}-\d{2}-\d{4}$/, 'Formato GG-MM-AAAA')]"
                    hint="Crea un evento per ogni giorno dell'intervallo" persistent-hint />
                </v-col>
              </template>
              <v-col cols="12"><v-text-field v-model="editing.description" label="Descrizione*" :rules="[req]" /></v-col>
              <v-col cols="12">
                <v-select v-model="editing.color" :items="colors" label="Colore">
                  <template #selection="{ item }"><v-chip :color="item.value" size="x-small" label variant="elevated" class="mr-2" />{{ item.title }}</template>
                </v-select>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions><v-spacer /><v-btn @click="editing = null">Annulla</v-btn><v-btn color="green" variant="flat" @click="save">Salva</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog :model-value="!!toDelete" max-width="440" @update:model-value="toDelete = null">
      <v-card title="Elimina evento" :text="`Vuoi veramente eliminare l'evento «${toDelete?.description}»?`">
        <v-card-actions><v-spacer /><v-btn @click="toDelete = null">Annulla</v-btn><v-btn color="red" variant="flat" @click="remove">Elimina</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
