<script setup lang="ts">
const props = defineProps<{
  id: number
  clone: boolean
  users: { id: number, name: string, disabled: boolean }[]
  clients: { id: number, name: string }[]
}>()
const emit = defineEmits<{ close: [], saved: [project: any] }>()

const api = useApi()
const { user } = useAuth()
const toast = useSnackbar()

type Sponsor = { sponsor: number | null, contractdate: string | null, note: string | null }
const year = new Date().getFullYear()
const p = ref<Record<string, any>>({
  id: 0, code: '', name: '', contractname: '', description: '', referent: '',
  projectcolor_id: null, status: 'S', openstatus: 'A', type: 'N', internalproject: 0,
  startdate: null, enddate: null, signaturedate: null, successpercent: 0,
  splitpercent: 100, splityear: year, splitpercent1: 0, splityear1: year + 1, note: '', noteaddendum: '',
})
const originalStatus = ref<string | null>(null)
const owners = ref<number[]>([])
const client = ref<{ id: number, name: string } | string | null>(null)
const sponsors = ref<Sponsor[]>([])
const cloneTasks = ref(false)
const colors = ref<{ id: number, title: string, color: string }[]>([])
const loading = ref(true)
const saving = ref(false)
const confirmStatus = ref(false)
const confirmNewClient = ref(false)
const form = ref()

const isNew = computed(() => props.id === 0)
const canEdit = computed(() => {
  const u = user.value!
  if (isNew.value || props.clone) return u.hasprojects === 1
  return u.role === 'S' || u.role === 'A' || owners.value.includes(u.id)
})
const title = computed(() =>
  isNew.value ? 'Nuovo progetto' : props.clone ? 'Duplica progetto' : canEdit.value ? 'Modifica progetto' : 'Visualizza progetto')

// Stati selezionabili, come nell'originale: superadmin tutti; progetto A/C solo A/C; altrimenti senza A e D.
const statusItems = computed(() => {
  const all = PROJECT_STATUSES.map(s => ({ ...s, props: { disabled: false } }))
  if (user.value?.role === 'S') return all
  const locked = (code: string) => ({ disabled: code === 'A' && originalStatus.value !== 'A' })
  if (!isNew.value && !props.clone && (originalStatus.value === 'A' || originalStatus.value === 'C')) {
    return all.filter(s => s.code === 'A' || s.code === 'C').map(s => ({ ...s, props: locked(s.code) }))
  }
  return all.filter(s => s.code !== 'D').map(s => ({ ...s, props: locked(s.code) }))
})
const activeUsers = computed(() => props.users.filter(u => !u.disabled || owners.value.includes(u.id)))

const required = (v: unknown) => (v != null && String(v).trim() !== '') || 'Campo obbligatorio'
const codeRule = (v: string) => /^PR\d+\d{4}$/.test(v ?? '') || 'Formato PR<numero><anno>, es. PR12026'
const splitRule = () => p.value.status !== 'I'
  || Number(p.value.splitpercent) + Number(p.value.splitpercent1) === 100 || 'La somma delle percentuali deve essere 100%'

onMounted(async () => {
  try {
    const [cols] = await Promise.all([api<any[]>('projectcolor/list')])
    colors.value = cols.map(({ Projectcolor: c }) => ({ id: c.id, title: c.name || c.color, color: c.color }))
    if (props.id > 0) {
      const d = await api<any>(`project/get/${props.id}`)
      p.value = { ...d }
      if (props.clone) { p.value.id = 0; p.value.code = '' }
      if (!d.splitpercent && !d.splitpercent1) p.value.splitpercent = 100
      if (!d.splityear && !d.splityear1) {
        p.value.splityear = d.startdate ? new Date(d.startdate).getFullYear() : year
        p.value.splityear1 = p.value.splityear + 1
      }
      originalStatus.value = props.clone ? null : d.status
      owners.value = [...d.owners]
      client.value = props.clients.find(c => c.id === d.client_id) ?? null
      sponsors.value = d.sponsors.map((s: any) => ({ sponsor: s.Client.id, contractdate: s.Sponsor.contractdate, note: s.Sponsor.note }))
    }
    else if (user.value) {
      owners.value = [user.value.id]
    }
    if (isNew.value || props.clone) p.value.code = (await api<string[]>('project/getNewProjectName'))[0]
  }
  catch (e: any) {
    toast.error(e.message)
    emit('close')
  }
  finally { loading.value = false }
})

// Default anno split dalla data di inizio, se l'utente non l'ha toccato
watch(() => p.value.startdate, (d) => {
  if (!d || !(isNew.value || props.clone)) return
  p.value.splityear = new Date(d).getFullYear()
  p.value.splityear1 = p.value.splityear + 1
})

async function submit() {
  const { valid } = await form.value.validate()
  if (!valid) return
  if (sponsors.value.some(s => s.sponsor == null)) {
    toast.error('Seleziona uno sponsor esistente o cancella la riga sponsor')
    return
  }
  if (!isNew.value && !props.clone && originalStatus.value && p.value.status !== originalStatus.value) {
    confirmStatus.value = true
    return
  }
  await afterStatusConfirmed()
}

async function afterStatusConfirmed() {
  confirmStatus.value = false
  if (typeof client.value === 'string' && client.value.trim()) {
    confirmNewClient.value = true
    return
  }
  await save()
}

async function save() {
  confirmStatus.value = false
  confirmNewClient.value = false
  saving.value = true
  const isNewClient = typeof client.value === 'string' && client.value.trim() !== ''
  try {
    const saved = await api('project/createedit', {
      body: {
        Project: {
          ...p.value,
          id: props.clone ? 0 : p.value.id,
          client_id: isNewClient ? (client.value as string).trim() : (client.value as any)?.id ?? null,
          newcliente: isNewClient ? 1 : 0,
          cloneid: props.clone ? props.id : 0,
        },
        Owners: owners.value,
        clonetask: props.clone && cloneTasks.value ? 1 : 0,
        sponsors: sponsors.value,
      },
    })
    toast.success(isNew.value ? 'Creazione progetto completata' : props.clone ? 'Duplicazione progetto completata' : 'Modifica progetto completata')
    emit('saved', saved)
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}
</script>

<template>
  <v-dialog :model-value="true" max-width="1100" persistent scrollable @update:model-value="emit('close')">
    <v-card :loading="loading">
      <v-card-title class="d-flex align-center">
        {{ title }}
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" @click="emit('close')" />
      </v-card-title>
      <v-card-text v-if="!loading">
        <v-form ref="form" :readonly="!canEdit" @submit.prevent="submit">
          <v-row density="compact">
            <v-col cols="12" sm="3">
              <v-text-field v-model="p.code" label="Codice progetto*" :rules="[required, codeRule]"
                :disabled="!isNew && !clone && user?.hasprojects !== 1" />
            </v-col>
            <v-col cols="12" sm="5">
              <v-text-field v-model="p.name" label="Nome progetto*" :rules="[required]" />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model="p.contractname" label="Nome da contratto" />
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="p.description" label="Descrizione progetto" rows="2" auto-grow />
            </v-col>
            <v-col cols="12" sm="4">
              <v-combobox v-model="client" :items="clients" item-title="name" item-value="id" label="Cliente"
                clearable hint="Scrivi un nome nuovo per creare il cliente" persistent-hint :return-object="true" />
            </v-col>
            <v-col cols="12" sm="4">
              <v-autocomplete v-model="owners" :items="activeUsers" item-title="name" item-value="id"
                label="Responsabile di progetto" multiple chips closable-chips
                hint="Il primo è il responsabile principale" persistent-hint />
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field v-model="p.referent" label="Referente progetto (cliente)" />
            </v-col>
            <v-col cols="6" sm="2">
              <v-text-field v-model="p.startdate" type="date" label="Inizio" />
            </v-col>
            <v-col cols="6" sm="2">
              <v-text-field v-model="p.enddate" type="date" label="Fine"
                :rules="[v => !v || !p.startdate || v >= p.startdate || 'Precede l\'inizio']" />
            </v-col>
            <v-col cols="12" sm="2">
              <v-select v-model="p.projectcolor_id" :items="colors" item-title="title" item-value="id" label="Colore" clearable>
                <template #selection="{ item }">
                  <v-chip :color="item.color" size="small" label variant="elevated" class="mr-2" />{{ item.title }}
                </template>
                <template #item="{ item, props: ip }">
                  <v-list-item v-bind="ip">
                    <template #prepend><v-chip :color="item.color" size="x-small" label variant="elevated" class="mr-2" /></template>
                  </v-list-item>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select v-model="p.status" :items="statusItems" item-title="name" item-value="code" label="Stato">
                <template #selection="{ item }">
                  <v-chip :color="item.color" size="x-small" label variant="elevated" class="mr-2">{{ item.code }}</v-chip>{{ item.name }}
                </template>
              </v-select>
            </v-col>
            <v-col v-if="p.status === 'A'" cols="12" sm="2">
              <v-text-field v-model="p.signaturedate" type="date" label="Data firma contratto" />
            </v-col>
            <v-col cols="6" sm="2">
              <v-switch v-model="p.openstatus" true-value="A" false-value="C" color="green" base-color="red" inset hide-details
                :label="`Aperto: ${p.openstatus === 'A' ? 'SI' : 'NO'}`" />
            </v-col>
            <v-col cols="6" sm="2">
              <v-switch v-model="p.internalproject" :true-value="1" :false-value="0" color="green" base-color="red" inset hide-details
                :label="`Interno: ${p.internalproject ? 'SI' : 'NO'}`" />
            </v-col>
            <v-col cols="12" sm="3">
              <v-select v-model="p.type" :items="PROJECT_TYPES" item-title="name" item-value="code" label="Tipo progetto" />
            </v-col>
            <v-col v-if="p.status === 'I'" cols="12" sm="3">
              <v-text-field v-model.number="p.successpercent" type="number" min="0" max="99" label="Percentuale di successo" suffix="%"
                :rules="[v => (v >= 0 && v <= 99) || 'Tra 0 e 99']" />
            </v-col>
          </v-row>

          <v-row density="compact">
            <v-col cols="6" sm="3">
              <v-text-field v-model.number="p.splitpercent" type="number" min="0" max="100" label="Percentuale di split*" suffix="%" :rules="[splitRule]" />
            </v-col>
            <v-col cols="6" sm="3">
              <v-text-field v-model.number="p.splityear" type="number" label="Anno*" :rules="[required]" />
            </v-col>
            <v-col cols="6" sm="3">
              <v-text-field v-model.number="p.splitpercent1" type="number" min="0" max="100" label="Percentuale di split*" suffix="%" :rules="[splitRule]" />
            </v-col>
            <v-col cols="6" sm="3">
              <v-text-field v-model.number="p.splityear1" type="number" label="Anno successivo*" :rules="[required]" />
            </v-col>
            <v-col cols="12" sm="6">
              <v-textarea v-model="p.note" label="Note" rows="2" auto-grow />
            </v-col>
            <v-col cols="12" sm="6">
              <v-textarea v-model="p.noteaddendum" label="Note addendum" rows="2" auto-grow />
            </v-col>
          </v-row>

          <div class="d-flex align-center mt-2 mb-1">
            <span class="text-subtitle-2">Sponsor</span>
            <v-btn v-if="canEdit" size="small" variant="text" prepend-icon="mdi-plus" class="ml-2"
              @click="sponsors.push({ sponsor: null, contractdate: null, note: null })">Aggiungi</v-btn>
          </div>
          <v-row v-for="(s, i) in sponsors" :key="i" density="compact">
            <v-col cols="12" sm="4">
              <v-autocomplete v-model="s.sponsor" :items="clients" item-title="name" item-value="id" label="Sponsor" />
            </v-col>
            <v-col cols="12" sm="3">
              <v-text-field v-model="s.contractdate" type="date" label="Data firma contratto" />
            </v-col>
            <v-col cols="10" sm="4">
              <v-text-field v-model="s.note" label="Note" />
            </v-col>
            <v-col v-if="canEdit" cols="2" sm="1">
              <v-btn icon="mdi-content-copy" size="small" variant="text" title="Duplica riga" @click="sponsors.push({ ...s })" />
              <v-btn icon="mdi-delete-outline" size="small" variant="text" color="red" title="Rimuovi" @click="sponsors.splice(i, 1)" />
            </v-col>
          </v-row>

          <v-switch v-if="clone" v-model="cloneTasks" color="green" inset hide-details
            :label="`Duplica anche i task: ${cloneTasks ? 'SI' : 'NO'}`" />
        </v-form>
      </v-card-text>
      <v-card-actions v-if="canEdit && !loading">
        <v-spacer />
        <v-btn @click="emit('close')">Annulla</v-btn>
        <v-btn color="green" variant="flat" :loading="saving" @click="submit">Salva</v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="confirmStatus" max-width="480">
      <v-card title="Modifica stato progetto" text="Confermi il cambio stato progetto?">
        <v-card-actions>
          <v-spacer />
          <v-btn color="orange" @click="confirmStatus = false">Annulla</v-btn>
          <v-btn color="green" variant="flat" @click="afterStatusConfirmed">Conferma</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmNewClient" max-width="480">
      <v-card title="Creazione nuovo cliente" :text="`Il cliente &quot;${client}&quot; non esiste. Vuoi crearlo?`">
        <v-card-actions>
          <v-spacer />
          <v-btn color="orange" @click="confirmNewClient = false">Annulla</v-btn>
          <v-btn color="green" variant="flat" @click="save">Crea e salva</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-dialog>
</template>
