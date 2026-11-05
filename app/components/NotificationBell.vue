<script setup lang="ts">
// Campanella: polling ogni 90 s come l'originale, non lette prima e in grassetto, "Tutte lette", centro notifiche.
type Notif = { id: number, title: string, content: string, link: string | null, created: string, readon: string | null }
const api = useApi()
const items = ref<Notif[]>([])
const selected = ref<Notif | null>(null)
let timer: ReturnType<typeof setTimeout> | undefined

async function load() {
  try {
    const rows = await api<Notif[]>('notification/getMyNotifications')
    items.value = rows.sort((a, b) => Number(!!a.readon) - Number(!!b.readon) || b.created.localeCompare(a.created))
  }
  catch { /* rete assente: si riprova al prossimo giro */ }
  timer = setTimeout(load, 90_000)
}
onMounted(load)
onBeforeUnmount(() => clearTimeout(timer))
const unread = computed(() => items.value.filter(n => !n.readon).length)

async function open(n: Notif) {
  selected.value = n
  if (!n.readon) {
    n.readon = new Date().toISOString()
    await api('notification/markAsRead', { body: { id: n.id } }).catch(() => {})
  }
}
async function readAll() {
  items.value.forEach(n => (n.readon ??= new Date().toISOString()))
  await api('notification/markAsRead', { body: { all: true } }).catch(() => {})
}
function go() {
  const link = selected.value?.link
  selected.value = null
  if (link) navigateTo(link.startsWith('/') ? link : `/${link}`)
}
</script>

<template>
  <v-menu :close-on-content-click="false" max-width="420">
    <template #activator="{ props }">
      <v-btn v-bind="props" icon variant="text" title="Notifiche">
        <v-badge :model-value="unread > 0" color="red" dot><v-icon>mdi-bell-outline</v-icon></v-badge>
      </v-btn>
    </template>
    <v-card min-width="340">
      <v-card-title class="d-flex align-center text-subtitle-1">
        Notifiche<v-spacer />
        <v-btn size="small" variant="text" :disabled="!unread" @click="readAll">Tutte lette</v-btn>
      </v-card-title>
      <v-divider />
      <v-list density="compact" max-height="420" class="overflow-y-auto">
        <v-list-item v-for="n in items.slice(0, 10)" :key="n.id" @click="open(n)">
          <v-list-item-title :class="{ 'font-weight-bold': !n.readon }">{{ n.title.length > 50 ? `${n.title.slice(0, 50)}…` : n.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ new Date(n.created + 'Z').toLocaleString('it-IT') }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item v-if="!items.length" title="Nessuna notifica" disabled />
      </v-list>
      <v-divider />
      <v-card-actions><v-btn block variant="text" to="/notification-center">Centro notifiche</v-btn></v-card-actions>
    </v-card>
  </v-menu>
  <v-dialog :model-value="!!selected" max-width="560" @update:model-value="selected = null">
    <v-card v-if="selected" :title="selected.title" subtitle="Dettagli completi della notifica">
      <!-- content è HTML generato dal server con escapeHtml sui dati variabili -->
      <v-card-text v-html="selected.content" />
      <v-card-actions>
        <v-spacer />
        <v-btn @click="selected = null">Chiudi</v-btn>
        <v-btn v-if="selected.link" color="primary" variant="flat" @click="go">Vai</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
