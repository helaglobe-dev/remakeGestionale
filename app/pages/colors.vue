<script setup lang="ts">
useHead({ title: 'Colori – Helaproject' })
</script>

<template>
  <CrudPage title="Definizione colori progetto" resource="projectcolor" wrapper="Projectcolor" item-label="colore"
    :allow-duplicate="false" :dialog-width="460"
    :columns="[{ title: 'Colore', key: 'color', csv: true }, { title: 'Nome', key: 'name' }]"
    :fields="[
      { key: 'color', label: 'Colore', type: 'color', required: true, default: '#CCCCCC' },
      { key: 'name', label: 'Nome colore', hint: 'Se vuoto si usa il codice colore' },
    ]"
    :delete-text="r => `Vuoi veramente eliminare il colore ${r.name}?`">
    <template #item.color="{ item }">
      <v-chip :color="item.color" variant="elevated" size="small" label class="mr-2" />{{ item.color }}
    </template>
  </CrudPage>
</template>
