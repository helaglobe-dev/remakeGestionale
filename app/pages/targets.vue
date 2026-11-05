<script setup lang="ts">
useHead({ title: 'Target annui – Helaproject' })
</script>

<template>
  <CrudPage title="Target annui" resource="yeartarget" wrapper="Yeartarget" item-label="target" csv-name="exporttargetannui"
    :sort-by="[{ key: 'year', order: 'desc' }]" :dialog-width="520"
    :columns="[
      { title: 'Anno', key: 'year' },
      { title: 'Valore', key: 'value', align: 'end', format: v => formatEur(v) },
      { title: 'Soglia margine', key: 'soglia', align: 'end', format: v => `${Number(v).toLocaleString('it-IT')} %` },
    ]"
    :fields="[
      { key: 'year', label: 'Anno', type: 'number', required: true, default: new Date().getFullYear(), cols: 4 },
      { key: 'value', label: 'Valore', type: 'number', required: true, suffix: '€', cols: 4 },
      { key: 'soglia', label: 'Soglia margine', type: 'number', required: true, suffix: '%', cols: 4,
        rules: [v => (v >= 0 && v <= 100) || 'Tra 0 e 100'], hint: 'Progetti sotto questa % di margine sono segnalati in dashboard' },
    ]"
    :delete-text="r => `Vuoi veramente eliminare il target ${formatEur(r.value)} [${r.year}]?`" />
</template>
