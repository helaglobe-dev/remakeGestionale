<script setup lang="ts">
useHead({ title: 'Costi orari dipendenti – Helaproject' })
const api = useApi()
const owners = ref<{ id: number, name: string }[]>([])
onMounted(async () => {
  owners.value = (await api<any[]>('user/list')).map(u => ({ id: u.id, name: `${u.firstname} ${u.lastname}${u.activeuser ? '' : ' (non attivo)'}` }))
})
</script>

<template>
  <RateListPage title="Costi orari dipendenti" kind="cost" owner-label="Dipendente" value-label="Costo orario" :owners="owners" />
</template>
