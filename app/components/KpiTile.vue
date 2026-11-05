<script setup lang="ts">
// Riquadro KPI come la dashboard originale: titolo istituzionale con info, valore grande, nota sotto.
defineProps<{ label: string, value: string, info?: string, note?: string, color?: string }>()
</script>

<template>
  <v-card class="pa-4 h-100 kpi-tile" elevation="2" rounded="lg">
    <div class="d-flex align-center ga-1 kpi-label">
      {{ label }}
      <v-tooltip v-if="info" :text="info" max-width="360" location="top">
        <template #activator="{ props }"><v-icon v-bind="props" size="16">mdi-information-outline</v-icon></template>
      </v-tooltip>
    </div>
    <div class="kpi-value" :style="color ? { color } : undefined">{{ value }}</div>
    <div v-if="note" class="text-caption mt-1">{{ note }}</div>
    <slot />
  </v-card>
</template>

<style scoped>
.kpi-tile { background: #f5f5f5; }
.kpi-label { color: #00516E; font-weight: 700; font-size: .9rem; }
.kpi-value { font-size: 1.6rem; font-weight: 700; line-height: 1.3; margin-top: 4px; }
</style>
