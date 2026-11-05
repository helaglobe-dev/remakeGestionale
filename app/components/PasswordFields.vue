<script setup lang="ts">
// Password + conferma con le regole dell'originale e indicatore di robustezza.
const props = withDefaults(defineProps<{ strong?: boolean, label?: string }>(), { strong: true, label: 'Password' })
const password = defineModel<string>({ default: '' })
const confirm = defineModel<string>('confirm', { default: '' })
const show = ref(false)
const STRONG = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
const BASIC = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const rule = (v: string) => (props.strong ? STRONG : BASIC).test(v ?? '') || (props.strong
  ? 'Almeno 8 caratteri, con un numero, una maiuscola, una minuscola e un carattere speciale'
  : 'Almeno 8 caratteri, con un numero, una maiuscola e una minuscola')
const score = computed(() => {
  const v = password.value ?? ''
  return [v.length >= 8, /[0-9]/.test(v), /[a-z]/.test(v) && /[A-Z]/.test(v), /[^a-zA-Z0-9]/.test(v), v.length >= 12].filter(Boolean).length
})
const COLORS = ['red', 'red', 'orange', 'amber', 'green', 'light-blue']
</script>

<template>
  <v-text-field v-model="password" :label="`${label}*`" :type="show ? 'text' : 'password'" autocomplete="new-password"
    :append-inner-icon="show ? 'mdi-eye-off' : 'mdi-eye'" :rules="[v => !!v || 'Password obbligatoria', rule]" @click:append-inner="show = !show" />
  <v-progress-linear :model-value="score * 20" :color="COLORS[score]" height="4" class="mb-4 mt-n2" rounded />
  <v-text-field v-model="confirm" label="Conferma la password*" :type="show ? 'text' : 'password'" autocomplete="new-password"
    :rules="[v => !!v || 'La conferma password è obbligatoria', v => v === password || 'Le password non coincidono']" />
</template>
