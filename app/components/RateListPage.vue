<script setup lang="ts">
// Listino orario annuale: una riga per profilo (o dipendente) con il valore dell'anno scelto.
// Serve /upprices, /upcosts (per profilo) e /costs (per dipendente), identiche nell'originale.
const props = defineProps<{
  title: string
  kind: 'upprice' | 'upcost' | 'cost'
  ownerLabel: string
  valueLabel: string
  owners: { id: number, name: string }[]
  backTo?: string
}>()
const api = useApi()
const toast = useSnackbar()
const year = ref(new Date().getFullYear())
const values = ref<{ id: number, owner: number, hcost: number }[]>([])
const ownerKey = props.kind === 'cost' ? 'user_id' : 'userprofile_id'

async function load() {
  try {
    values.value = (await api<any[]>(`${props.kind}/list`, { body: { user_id: 0, year: year.value } }))
      .map(r => ({ id: r.id, owner: r[ownerKey], hcost: r.hcost }))
  }
  catch (e: any) { toast.error(e.message) }
}
watch(year, load, { immediate: true })
const rows = computed(() => props.owners.map((o) => {
  const v = values.value.find(x => x.owner === o.id)
  return { ownerId: o.id, name: o.name, year: year.value, rateId: v?.id ?? 0, hcost: v?.hcost ?? null }
}))

const editing = ref<{ ownerId: number, name: string, rateId: number, hcost: number | null } | null>(null)
const saving = ref(false)
async function save() {
  const e = editing.value!
  if (e.hcost == null || e.hcost < 0) return toast.error(`${props.valueLabel} obbligatorio`)
  saving.value = true
  try {
    await api(`${props.kind}/savecost`, { body: { Cost: { id: e.rateId, hcost: e.hcost, year: year.value, user_id: e.ownerId } } })
    toast.success('Salvataggio completato')
    editing.value = null
    await load()
  }
  catch (err: any) { toast.error(err.message) }
  finally { saving.value = false }
}
const toDelete = ref<{ rateId: number, name: string } | null>(null)
async function remove() {
  const id = toDelete.value!.rateId
  toDelete.value = null
  try {
    await api(`${props.kind}/delete/${id}`, { method: 'POST' })
    toast.success('Eliminazione completata')
    await load()
  }
  catch (e: any) { toast.error(e.message) }
}
</script>

<template>
  <v-container fluid class="px-6">
    <div class="d-flex align-center flex-wrap ga-2 my-4">
      <h1 class="text-h5 page-title mr-auto">{{ title }}</h1>
      <v-btn v-if="backTo" :to="backTo" variant="text" prepend-icon="mdi-arrow-left">Torna ai profili</v-btn>
      <v-select v-model="year" :items="rateYears()" label="Anno" hide-details style="max-width: 140px" />
    </div>
    <v-data-table :items="rows" density="compact" :items-per-page="25" no-data-text="Nessun elemento"
      :headers="[{ title: ownerLabel, key: 'name' }, { title: 'Anno', key: 'year' }, { title: valueLabel, key: 'hcost', align: 'end' }, { title: '', key: 'actions', sortable: false, align: 'end' }]">
      <template #[`item.hcost`]="{ item }">
        <span v-if="item.hcost != null">{{ formatEur(item.hcost) }}/h</span>
        <span v-else class="text-medium-emphasis">non impostato</span>
      </template>
      <template #[`item.actions`]="{ item }">
        <template v-if="item.rateId">
          <v-btn icon="mdi-pencil" size="small" variant="text" title="Modifica" @click="editing = { ...item }" />
          <v-btn icon="mdi-delete-outline" size="small" variant="text" color="red" title="Elimina" @click="toDelete = item" />
        </template>
        <v-btn v-else icon="mdi-plus" size="small" variant="text" color="green" title="Imposta" @click="editing = { ...item, hcost: null }" />
      </template>
    </v-data-table>

    <v-dialog :model-value="!!editing" max-width="440" persistent>
      <v-card v-if="editing" :title="`${editing.rateId ? 'Modifica' : 'Nuovo'} ${valueLabel.toLowerCase()} di ${editing.name} per l'anno ${year}`">
        <v-card-text>
          <v-text-field v-model.number="editing.hcost" type="number" min="0" step="0.01" :label="`${valueLabel}*`" suffix="€/h" autofocus @keyup.enter="save" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="editing = null">Annulla</v-btn>
          <v-btn color="green" variant="flat" :loading="saving" @click="save">Salva</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog :model-value="!!toDelete" max-width="440" @update:model-value="toDelete = null">
      <v-card :title="`Elimina ${valueLabel.toLowerCase()}`" :text="`Vuoi veramente eliminare questo ${valueLabel.toLowerCase()} di ${toDelete?.name} per il ${year}?`">
        <v-card-actions><v-spacer /><v-btn @click="toDelete = null">Annulla</v-btn><v-btn color="red" variant="flat" @click="remove">Elimina</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
