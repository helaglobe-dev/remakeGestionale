<script setup lang="ts">
useHead({ title: 'Scadenziario fatture – Helaproject' })
</script>

<template>
  <v-container fluid class="px-6">
    <h1 class="text-h5 page-title my-4">Scadenziario fatture</h1>
    <SchedulePivot mode="fatture" />
  </v-container>
</template>
