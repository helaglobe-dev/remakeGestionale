<script setup lang="ts">
// Sezione della dashboard: intestazione istituzionale con titolo, icona e filtri (slot "filters")
defineProps<{ title: string, icon?: string }>()
</script>

<template>
  <section class="hg-section mb-5">
    <div class="hg-section__head">
      <div class="hg-section__title"><v-icon v-if="icon" size="20">{{ icon }}</v-icon>{{ title }}</div>
      <slot name="filters" />
    </div>
    <div class="hg-section__body"><slot /></div>
  </section>
</template>
