<script setup lang="ts">
useHead({ title: 'Attività – Helaproject' })
</script>

<template>
  <CrudPage title="Definizione attività" resource="activity" wrapper="Activity" item-label="attività" csv-name="exportattivita"
    :sort-by="[{ key: 'name', order: 'asc' }]"
    :columns="[
      { title: 'Acronimo', key: 'acronimo' }, { title: 'Nome', key: 'name' }, { title: 'Descrizione', key: 'description' },
      { title: 'Tipo', key: 'type', format: v => optTitle(ACTIVITY_TYPES, v) }, { title: 'Note', key: 'notes' },
    ]"
    :fields="[
      { key: 'name', label: 'Nome attività', required: true, cols: 8 },
      { key: 'acronimo', label: 'Acronimo', required: true, cols: 4 },
      { key: 'type', label: 'Tipo', type: 'select', items: ACTIVITY_TYPES, required: true, default: 'N',
        hint: 'Ferie/Permessi/Malattia viene proposta in automatico quando si registrano ore su un progetto di quel tipo' },
      { key: 'description', label: 'Descrizione', type: 'textarea', required: true },
      { key: 'notes', label: 'Note', type: 'textarea' },
    ]"
    :delete-text="r => `Vuoi veramente eliminare l'attività ${r.name} [${r.acronimo}]?`" />
</template>
