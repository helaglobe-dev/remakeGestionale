<script setup lang="ts">
// Layout come l'originale: menu laterale bianco con logo, barra superiore istituzionale #00516E,
// campanella, avatar con iniziali e menu utente sotto i tre puntini.
const { user, logout } = useAuth()
const { snack } = useSnackbar()
const drawer = ref(true)
const route = useRoute()
const PUBLIC = ['/login', '/lostpassword', '/resetpassword', '/confirmemailandsetpassword']
const showChrome = computed(() => !PUBLIC.includes(route.path))

const allowed = (perm?: Perm) => !!user.value && (perm?.(user.value) ?? true)
const menu = computed(() => MENU
  .filter(e => allowed(e.perm))
  .map(e => ('items' in e ? { ...e, items: e.items.filter(i => allowed(i.perm)) } : e))
  .filter(e => !('items' in e) || e.items.length))
// gruppo aperto se contiene la pagina corrente
const opened = ref<string[]>([])
watch(() => route.path, (p) => {
  const g = MENU.find(e => 'items' in e && e.items.some(i => i.to === p))
  if (g && !opened.value.includes(g.title)) opened.value = [...opened.value, g.title]
}, { immediate: true })
const initials = computed(() => user.value
  ? (user.value.acronym || `${user.value.firstname[0] ?? ''}${user.value.lastname[0] ?? ''}`).toUpperCase()
  : '')
const changePassword = ref(false)
const showTop = ref(false)
onMounted(() => window.addEventListener('scroll', () => { showTop.value = window.scrollY > 300 }, { passive: true }))
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <v-app>
    <template v-if="showChrome">
      <v-navigation-drawer v-model="drawer" width="256" class="hg-drawer" elevation="0">
        <NuxtLink to="/" class="d-block px-5 pt-5 pb-6"><img src="/logo.png" alt="Helaglobe – Improving Health & Lives" width="210" height="46"></NuxtLink>
        <v-list v-model:opened="opened" density="comfortable" class="pt-0">
          <template v-for="entry in menu" :key="entry.title">
            <v-list-group v-if="'items' in entry" :value="entry.title">
              <template #activator="{ props }">
                <v-list-item v-bind="props" :prepend-icon="entry.icon" :title="entry.title" />
              </template>
              <v-list-item v-for="i in entry.items" :key="i.to" :to="i.to" :prepend-icon="i.icon" :title="i.title" exact />
            </v-list-group>
            <v-list-item v-else :to="entry.to" :prepend-icon="entry.icon" :title="entry.title" :exact="entry.to === '/'" />
          </template>
          <v-list-item v-if="user" :href="manualFor(user)" target="_blank" prepend-icon="mdi-book-information-variant" title="Manuale" />
        </v-list>
      </v-navigation-drawer>

      <v-app-bar color="brand" height="64" elevation="4">
        <v-app-bar-nav-icon title="Mostra/nascondi menu" @click="drawer = !drawer" />
        <v-spacer />
        <NotificationBell v-if="user" />
        <v-avatar v-if="user" color="white" size="44" class="mx-2 text-brand text-body-2 font-weight-medium" :title="`${user.firstname} ${user.lastname}`">{{ initials }}</v-avatar>
        <v-menu v-if="user">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-dots-vertical" variant="text" title="Menu utente" />
          </template>
          <v-list density="compact" min-width="220">
            <v-list-item :title="`${user.firstname} ${user.lastname}`" :subtitle="user.email" />
            <v-divider />
            <v-list-item prepend-icon="mdi-account-cog-outline" title="Il mio profilo" to="/profile" />
            <v-list-item prepend-icon="mdi-lock" title="Cambia password" @click="changePassword = true" />
            <v-list-item prepend-icon="mdi-logout" title="Esci" @click="logout" />
          </v-list>
        </v-menu>
      </v-app-bar>
      <ChangePasswordDialog v-if="changePassword" @close="changePassword = false" />
    </template>
    <v-main>
      <slot />
    </v-main>
    <v-fab v-if="showChrome && showTop" icon="mdi-arrow-up" color="brand" app location="bottom end" size="small" title="Torna su"
      @click="scrollTop" />
    <v-snackbar v-model="snack.show" :color="snack.color" location="top" :timeout="4000">
      {{ snack.text }}
      <template #actions><v-btn icon="mdi-close" variant="text" @click="snack.show = false" /></template>
    </v-snackbar>
  </v-app>
</template>
