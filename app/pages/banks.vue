<script setup lang="ts">
useHead({ title: 'Banche – Helaproject' })
// Come l'originale: menu con permesso fatture, pagina solo superadmin
const { user } = useAuth()
if (user.value?.role !== 'S') await navigateTo('/', { replace: true })
</script>

<template>
  <CrudPage title="Banche" resource="bank" wrapper="Bank" item-label="banca" flat-payload :allow-duplicate="false" :dialog-width="440"
    :sort-by="[{ key: 'name', order: 'asc' }]" :columns="[{ title: 'Nome', key: 'name' }]"
    :fields="[{ key: 'name', label: 'Nome', required: true }]" :delete-text="r => `Vuoi veramente eliminare la banca ${r.name}?`" />
</template>
