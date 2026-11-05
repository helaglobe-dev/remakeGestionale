<script setup lang="ts">
useHead({ title: 'Scadenziario attivo – Helaproject' })
</script>

<template>
  <v-container fluid class="px-6">
    <h1 class="text-h5 page-title my-4">Scadenziario attivo</h1>
    <SchedulePivot mode="attivo" />
  </v-container>
</template>
