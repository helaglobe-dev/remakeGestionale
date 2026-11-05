<script setup lang="ts">
useHead({ title: 'Utenti – Helaproject' })
const api = useApi()
const toast = useSnackbar()
const { user, token } = useAuth()
const profiles = ref<{ value: number, title: string }[]>([])
onMounted(async () => {
  profiles.value = (await api<any[]>('userprofile/list')).map(p => ({ value: p.id, title: p.profilename }))
})

// Flag operativi: stessi gruppi, etichette e default del dialog originale
const flag = (key: string, label: string, def = 0, cols = 6) => ({ key, label, type: 'switch' as const, default: def, cols })
const fields = computed(() => [
  { key: 'firstname', label: 'Nome', required: true, cols: 6 },
  { key: 'lastname', label: 'Cognome', required: true, cols: 6 },
  { key: 'email', label: 'Email', type: 'email' as const, required: true, rules: [isEmail], cols: 8 },
  { key: 'acronym', label: 'Sigla', required: true, cols: 4 },
  { key: 'role', label: 'Ruolo', type: 'select' as const, items: ROLES, default: 'U', required: true, cols: 6,
    disabledIf: (r: Record<string, any>) => r.id === user.value?.id },
  { key: 'userprofile_id', label: 'Profilo professionale', type: 'select' as const, items: () => profiles.value, required: true, cols: 6 },
  flag('activeuser', 'Utente attivo', 1), flag('usedindashboard', 'Appare in dashboard', 1),
  flag('viewdashboard', 'Visualizza dashboard'), flag('hasprojects', 'Può creare i progetti'),
  flag('hasinvoice', 'Può gestire fatture e tranche'), flag('cancreatemacro', 'Creazione macrovoci'),
  flag('viewkpi', 'Visualizzazione KPI'), flag('viewbudget', 'Visualizzazione budget'),
  flag('viewfic', 'Visualizza Fatture in Cloud'), flag('creanotifica', 'Ricezione notifiche', 1),
  flag('sendnotificationemail', 'Notifiche via email'), flag('sendpresenzealert', 'Alert inserimento presenze via email'),
])
const profileName = (id: number) => profiles.value.find(p => p.value === id)?.title ?? ''

// --- conferma nuovo utente: senza SMTP mostriamo il link da inoltrare ---
const confirmLink = ref<string | null>(null)
function onSaved(u: Record<string, any>) {
  if (u.confirmLink) confirmLink.value = u.confirmLink
}

// --- impersonazione ---
const toImpersonate = ref<Record<string, any> | null>(null)
async function impersonate() {
  const u = toImpersonate.value!
  try {
    const res = await api<{ user: { token: string } }>(`user/forceLogin/${u.id}`, { method: 'POST' })
    token.value = res.user.token
    window.location.href = '/'
  }
  catch (e: any) { toast.error(e.message) }
}
const forcePassword = ref<Record<string, any> | null>(null)
async function copyLink() {
  await navigator.clipboard.writeText(confirmLink.value!)
  toast.success('Link copiato')
}
</script>

<template>
  <CrudPage title="Utenti" resource="user" wrapper="User" item-label="utente" flat-payload :allow-duplicate="false" :dialog-width="820"
    :sort-by="[{ key: 'lastname', order: 'asc' }]" :can-delete-row="r => r.id !== user?.id"
    :columns="[
      { title: 'Nome', key: 'firstname' }, { title: 'Cognome', key: 'lastname' }, { title: 'Sigla', key: 'acronym' },
      { title: 'Email', key: 'email' }, { title: 'Ruolo', key: 'descrole' },
      { title: 'Profilo', key: 'userprofile_id', format: v => profileName(v) },
    ]"
    :fields="fields" :delete-text="r => `Vuoi veramente eliminare l'utente ${r.email}?`" @saved="onSaved">
    <template #item.firstname="{ item }">
      <span :class="{ 'text-red': !item.activeuser }" :title="`ID ${item.id}${item.activeuser ? '' : ' · non attivo'}`">{{ item.firstname }}</span>
    </template>
    <template #item.lastname="{ item }">
      <span :class="{ 'text-red': !item.activeuser }">{{ item.lastname }}</span>
    </template>
    <template #row-actions="{ item }">
      <v-list-item v-if="item.id !== user?.id && item.activeuser" prepend-icon="mdi-account-switch" title="Impersona" @click="toImpersonate = item" />
      <v-list-item prepend-icon="mdi-lock-reset" title="Forza la password" @click="forcePassword = item" />
    </template>
  </CrudPage>

  <v-dialog :model-value="!!toImpersonate" max-width="480" @update:model-value="toImpersonate = null">
    <v-card title="Impersona utente"
      :text="`Sei sicuro di voler impersonare l'utente ${toImpersonate?.firstname} ${toImpersonate?.lastname} [ID ${toImpersonate?.id}]? La tua sessione verrà sostituita.`">
      <v-card-actions>
        <v-spacer />
        <v-btn @click="toImpersonate = null">Chiudi</v-btn>
        <v-btn color="orange" variant="flat" @click="impersonate">Impersona</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <ChangePasswordDialog v-if="forcePassword" :user-id="forcePassword.id" :user-name="`${forcePassword.firstname} ${forcePassword.lastname}`"
    @close="forcePassword = null" />

  <v-dialog :model-value="!!confirmLink" max-width="620" @update:model-value="confirmLink = null">
    <v-card title="Utente creato">
      <v-card-text>
        L'invio email non è ancora configurato. Inoltra all'utente questo link per confermare l'account e scegliere la password
        (valido 7 giorni):
        <v-text-field :model-value="confirmLink" readonly class="mt-3" append-inner-icon="mdi-content-copy"
          @click:append-inner="copyLink" />
      </v-card-text>
      <v-card-actions><v-spacer /><v-btn color="primary" @click="confirmLink = null">Chiudi</v-btn></v-card-actions>
    </v-card>
  </v-dialog>
</template>
