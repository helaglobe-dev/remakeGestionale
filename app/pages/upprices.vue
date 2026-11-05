<script setup lang="ts">
useHead({ title: 'Prezzi orari profili – Helaproject' })
const api = useApi()
const owners = ref<{ id: number, name: string }[]>([])
onMounted(async () => {
  owners.value = (await api<any[]>('userprofile/list')).map(p => ({ id: p.id, name: p.profilename }))
})
</script>

<template>
  <RateListPage title="Prezzi orari profili" kind="upprice" owner-label="Profilo professionale" value-label="Prezzo orario" :owners="owners" back-to="/userprofiles" />
</template>
