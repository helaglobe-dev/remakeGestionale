<script setup lang="ts">
useHead({ title: 'Login – Helaproject' })
const { login } = useAuth()
const email = ref('')
const password = ref('')
const show = ref(false)
const error = ref('')
const loading = ref(false)

async function submit() {
  error.value = ''
  loading.value = true
  try {
    await login(email.value, password.value)
    await navigateTo('/')
  }
  catch (e: any) {
    error.value = e?.data?.data?.errors?.title ?? 'Accesso non riuscito'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <AuthCard title="Login">
    <v-form @submit.prevent="submit">
      <v-text-field v-model="email" label="Email" type="email" autocomplete="username" autofocus prepend-inner-icon="mdi-email-outline"
        density="comfortable" class="mb-2" />
      <v-text-field v-model="password" label="Password" :type="show ? 'text' : 'password'" autocomplete="current-password"
        :prepend-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'" density="comfortable" @click:prepend-inner="show = !show" />
      <div class="text-right mb-4"><NuxtLink to="/lostpassword" class="text-body-2 text-high-emphasis">Password dimenticata?</NuxtLink></div>
      <v-alert v-if="error" type="error" density="compact" variant="tonal" class="mb-4">{{ error }}</v-alert>
      <v-btn type="submit" color="brand" block size="large" :loading="loading" :disabled="!email || !password">Login</v-btn>
    </v-form>
  </AuthCard>
</template>
