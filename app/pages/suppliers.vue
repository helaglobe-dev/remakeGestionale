<script setup lang="ts">
useHead({ title: 'Fornitori – Helaproject' })
</script>

<template>
  <CrudPage title="Fornitori" resource="supplier" wrapper="Supplier" item-label="fornitore" csv-name="export-fornitori"
    export-format="xlsx" :export-columns="anagraficaExport('supplier')" :allow-duplicate="false" :dialog-width="980"
    :sort-by="[{ key: 'name', order: 'asc' }]"
    :columns="[
      { title: 'Codice', key: 'codsup' }, { title: 'Rag. sociale', key: 'name' },
      { title: 'Tipo', key: 'type', format: v => optTitle(SUPPLIER_TYPES, v) },
      { title: 'P. IVA', key: 'piva' }, { title: 'Email', key: 'email' },
    ]"
    :fields="anagraficaFields('supplier')"
    :delete-text="r => `Vuoi veramente eliminare il fornitore ${r.name}?`" />
</template>
