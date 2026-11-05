<script setup lang="ts">
const props = defineProps<{ userId?: number, userName?: string }>()
const emit = defineEmits<{ close: [] }>()
const api = useApi()
const toast = useSnackbar()
const form = ref()
const password = ref('')
const confirm = ref('')
const saving = ref(false)
const forced = computed(() => props.userId != null)

async function save() {
  if (!(await form.value.validate()).valid) return
  saving.value = true
  try {
    await api('user/changePassword', { body: { id: props.userId, password: password.value, rpassword: confirm.value } })
    toast.success(forced.value ? 'Password cambiata con successo' : 'Password modificata')
    emit('close')
  }
  catch (e: any) { toast.error(e.message) }
  finally { saving.value = false }
}
</script>

<template>
  <v-dialog :model-value="true" max-width="460" persistent>
    <v-card :title="forced ? `Forza cambio password di ${userName}` : 'Cambia password'">
      <v-card-text>
        <v-form ref="form" @submit.prevent="save">
          <PasswordFields v-model="password" v-model:confirm="confirm" :strong="!forced" :label="forced ? 'Nuova password' : 'Password'" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="emit('close')">Annulla</v-btn>
        <v-btn color="green" variant="flat" :loading="saving" @click="save">Cambia password</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
