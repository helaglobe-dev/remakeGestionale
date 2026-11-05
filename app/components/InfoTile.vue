<script setup lang="ts">
defineProps<{ label: string, value: string }>()
</script>

<template>
  <v-card variant="tonal" class="pa-3 h-100">
    <div class="text-caption text-medium-emphasis">{{ label }}</div>
    <div class="text-body-1 font-weight-medium">{{ value }}</div>
    <slot />
  </v-card>
</template>
