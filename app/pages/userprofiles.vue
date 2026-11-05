<script setup lang="ts">
useHead({ title: 'Profili professionali – Helaproject' })
</script>

<template>
  <CrudPage title="Profili professionali" resource="userprofile" wrapper="Userprofile" item-label="profilo" :allow-duplicate="false" :dialog-width="520"
    :sort-by="[{ key: 'profilename', order: 'asc' }]"
    :columns="[{ title: 'Nome', key: 'profilename' }, { title: 'Codice', key: 'code' }]"
    :fields="[
      { key: 'profilename', label: 'Nome profilo', required: true, cols: 8 },
      { key: 'code', label: 'Codice profilo', required: true, cols: 4 },
    ]"
    :delete-text="r => `Vuoi veramente eliminare il profilo professionale ${r.profilename}?`">
    <template #toolbar>
      <v-btn to="/upprices" variant="tonal" prepend-icon="mdi-cash-plus">Prezzi orari</v-btn>
      <v-btn to="/upcosts" variant="tonal" prepend-icon="mdi-cash-minus">Costi orari</v-btn>
    </template>
  </CrudPage>
</template>
