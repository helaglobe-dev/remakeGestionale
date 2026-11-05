<script setup lang="ts">
useHead({ title: 'Notifiche – Helaproject' })
type Notif = { id: number, title: string, content: string, link: string | null, created: string, readon: string | null }
const api = useApi()
const items = ref<Notif[]>([])
const selected = ref<Notif | null>(null)
onMounted(async () => { items.value = await api<Notif[]>('notification/getMyNotifications') })
async function open(n: Notif) {
  selected.value = n
  if (!n.readon) {
    n.readon = new Date().toISOString()
    await api('notification/markAsRead', { body: { id: n.id } }).catch(() => {})
  }
}
function go() {
  const link = selected.value?.link
  selected.value = null
  if (link) navigateTo(link.startsWith('/') ? link : `/${link}`)
}
</script>

<template>
  <v-container fluid class="px-6">
    <h1 class="text-h5 page-title my-4">Notifiche</h1>
    <v-data-table :items="items" density="compact" :items-per-page="25" no-data-text="Nessuna notifica"
      :headers="[{ title: 'Testo', key: 'title' }, { title: 'Data e ora', key: 'created' }, { title: 'Azioni', key: 'a', sortable: false, align: 'end' }]">
      <template #[`item.title`]="{ item }"><span :class="{ 'font-weight-bold': !item.readon }">{{ item.title }}</span></template>
      <template #[`item.created`]="{ item }">{{ new Date(item.created + 'Z').toLocaleString('it-IT') }}</template>
      <template #[`item.a`]="{ item }">
        <v-btn icon="mdi-read" size="small" variant="text" :color="item.readon ? 'green' : 'red'" title="Visualizza" @click="open(item)" />
      </template>
    </v-data-table>
    <v-dialog :model-value="!!selected" max-width="560" @update:model-value="selected = null">
      <v-card v-if="selected" :title="selected.title" :subtitle="new Date(selected.created + 'Z').toLocaleString('it-IT')">
        <!-- content: HTML generato dal server con i dati variabili già sottoposti a escape -->
        <v-card-text v-html="selected.content" />
        <v-card-actions><v-spacer /><v-btn @click="selected = null">Chiudi</v-btn><v-btn v-if="selected.link" color="primary" variant="flat" @click="go">Vai</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
