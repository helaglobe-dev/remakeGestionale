<script setup lang="ts">
useHead({ title: 'Il mio profilo – Helaproject' })
const { user, fetchMe } = useAuth()
const api = useApi()
const toast = useSnackbar()
const f = reactive({ firstname: user.value?.firstname ?? '', lastname: user.value?.lastname ?? '' })
const form = ref()
async function save() {
  if (!(await form.value.validate()).valid) return
  try {
    await api('user/profile', { body: f })
    await fetchMe()
    toast.success('Modifica profilo completata')
  }
  catch (e: any) { toast.error(e.message) }
}
</script>

<template>
  <v-container class="py-6" style="max-width: 640px">
    <h1 class="text-h5 page-title mb-4">Il mio profilo</h1>
    <v-card class="pa-4">
      <v-form ref="form" @submit.prevent="save">
        <v-text-field :model-value="user?.email" label="Email" disabled />
        <v-text-field v-model="f.firstname" label="Nome*" :rules="[v => !!v || 'Campo obbligatorio']" />
        <v-text-field v-model="f.lastname" label="Cognome*" :rules="[v => !!v || 'Campo obbligatorio']" />
        <v-btn type="submit" color="green">Salva</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
