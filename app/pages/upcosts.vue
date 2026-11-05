<script setup lang="ts">
useHead({ title: 'Costi orari profili – Helaproject' })
const api = useApi()
const owners = ref<{ id: number, name: string }[]>([])
onMounted(async () => {
  owners.value = (await api<any[]>('userprofile/list')).map(p => ({ id: p.id, name: p.profilename }))
})
</script>

<template>
  <RateListPage title="Costi orari profili" kind="upcost" owner-label="Profilo professionale" value-label="Costo orario" :owners="owners" back-to="/userprofiles" />
</template>
