<script setup lang="ts">
useHead({ title: 'Conferma account e scegli la password – Helaproject' })
const route = useRoute()
const isConfirm = true
const code = String(route.query.code ?? '')
const password = ref('')
const confirm = ref('')
const form = ref()
const state = ref<'checking' | 'ready' | 'invalid' | 'done'>(isConfirm ? 'checking' : 'ready')
const name = ref('')
const error = ref('')
const loading = ref(false)
onMounted(async () => {
  if (!code) { state.value = 'invalid'; return }
  if (!isConfirm) return
  try {
    const res = await $fetch<any>('/api/user/confirmuser', { method: 'POST', body: { code } })
    name.value = res.data.firstname
    state.value = 'ready'
  }
  catch { state.value = 'invalid' }
})
async function submit() {
  if (!(await form.value.validate()).valid) return
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/user/set_password', { method: 'POST', body: { code, password: password.value, password_confirmation: confirm.value } })
    state.value = 'done'
  }
  catch (e: any) { error.value = e?.data?.data?.errors?.title ?? 'Operazione non riuscita' }
  finally { loading.value = false }
}
</script>

<template>
  <AuthCard title="Conferma account e scegli la password">
    <v-progress-linear v-if="state === 'checking'" indeterminate color="primary" />
    <v-alert v-else-if="state === 'invalid'" type="error" variant="tonal">Link non valido o scaduto.</v-alert>
    <v-alert v-else-if="state === 'done'" type="success" variant="tonal">Password impostata correttamente: ora puoi accedere.</v-alert>
    <v-form v-else ref="form" @submit.prevent="submit">
      <p v-if="name" class="mb-4">Ciao {{ name }}, il tuo utente è confermato: scegli la password.</p>
      <PasswordFields v-model="password" v-model:confirm="confirm" />
      <v-alert v-if="error" type="error" density="compact" class="mb-4">{{ error }}</v-alert>
      <v-btn type="submit" color="primary" block :loading="loading">Imposta password</v-btn>
    </v-form>
    <v-btn to="/login" variant="text" block class="mt-3">Vai al login</v-btn>
  </AuthCard>
</template>
