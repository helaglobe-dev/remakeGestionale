<script setup lang="ts">
useHead({ title: 'Clienti – Helaproject' })
</script>

<template>
  <CrudPage title="Clienti" resource="client" wrapper="Client" item-label="cliente" csv-name="export-clienti"
    export-format="xlsx" :export-columns="anagraficaExport('client')" :allow-duplicate="false" :dialog-width="980"
    :sort-by="[{ key: 'name', order: 'asc' }]"
    :columns="[
      { title: 'Rag. sociale', key: 'name' }, { title: 'P. IVA', key: 'piva' }, { title: 'Email', key: 'email' },
      { title: 'Portafoglio attivo', key: 'portafoglio', align: 'end', format: v => formatEur(v) },
      { title: 'Prog. attivi', key: 'attivi', align: 'end' }, { title: 'Prog. in coda', key: 'coda', align: 'end' },
    ]"
    :fields="anagraficaFields('client')"
    :delete-text="r => `Vuoi veramente eliminare il cliente ${r.name}?`">
    <template #item.name="{ item }">
      <span :title="`ID ${item.id}`">{{ item.name }}</span>
      <v-icon v-if="item.prioritario" color="amber-darken-2" size="small" class="ml-1" title="Cliente prioritario">mdi-shield-star</v-icon>
      <v-chip v-if="item.stopservice" color="red" size="x-small" label class="ml-1">Stop service</v-chip>
    </template>
  </CrudPage>
</template>
