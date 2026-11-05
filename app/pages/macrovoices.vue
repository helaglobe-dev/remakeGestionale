<script setup lang="ts">
useHead({ title: 'Macrovoci – Helaproject' })
</script>

<template>
  <CrudPage title="Definizione macrovoci" resource="macrovoice" wrapper="Macrovoice" item-label="macrovoce" csv-name="exportmacrovoci"
    :sort-by="[{ key: 'name', order: 'asc' }]"
    :columns="[{ title: 'Nome', key: 'name' }, { title: 'Descrizione / criterio di aggregazione', key: 'description' }]"
    :fields="[
      { key: 'name', label: 'Nome macrovoce', required: true },
      { key: 'description', label: 'Descrizione / criterio di aggregazione', type: 'textarea', required: true },
    ]"
    :delete-text="r => `Vuoi veramente eliminare la macrovoce ${r.name}?`" />
</template>
