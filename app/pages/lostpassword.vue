<script setup lang="ts">
useHead({ title: 'Recupero password – Helaproject' })
const email = ref('')
const sent = ref(false)
const loading = ref(false)
const error = ref('')
async function submit() {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/user/sendemailrecoverypassword', { method: 'POST', body: { email: email.value } })
    sent.value = true
  }
  catch (e: any) { error.value = e?.data?.data?.errors?.title ?? 'Richiesta non riuscita' }
  finally { loading.value = false }
}
</script>

<template>
  <AuthCard title="Password dimenticata">
    <v-alert v-if="sent" type="success" variant="tonal">
      Se l'indirizzo è registrato riceverai un'email con il link per impostare una nuova password.
    </v-alert>
    <v-form v-else @submit.prevent="submit">
      <v-text-field v-model="email" label="Email" type="email" autocomplete="email" autofocus :rules="[v => !!v || 'Campo obbligatorio', isEmail]" />
      <v-alert v-if="error" type="error" density="compact" class="mb-4">{{ error }}</v-alert>
      <v-btn type="submit" color="primary" block :loading="loading">Invia richiesta</v-btn>
    </v-form>
    <v-btn to="/login" variant="text" block class="mt-3">Indietro</v-btn>
  </AuthCard>
</template>
