<script setup lang="ts">
// Schermate pubbliche come il login originale: logo centrato, titolo, form a colonna singola.
defineProps<{ title: string }>()
</script>

<template>
  <v-container>
    <div class="mx-auto py-8" style="width: 100%; max-width: 680px; margin-top: 14vh">
      <div class="text-center mb-8"><img src="/logo.png" alt="Helaglobe – Improving Health & Lives" width="210" height="46"></div>
      <h1 class="text-h5 text-center mb-8 font-weight-regular">{{ title }}</h1>
      <slot />
    </div>
  </v-container>
</template>
