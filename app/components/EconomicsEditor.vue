<script setup lang="ts">
// Modifica dei campi economici, salvati uno alla volta come project/salvaCampo dell'originale.
const props = defineProps<{ project: Record<string, any> }>()
const emit = defineEmits<{ save: [field: string, value: unknown] }>()

const f = reactive({
  incrementoproposta: 0, tipoincrementoproposta: 'P', noteincremento: '',
  scontoproposta: 0, tiposcontoproposta: 'P', notesconto: '', newtotaleproposta: 0,
})
watchEffect(() => {
  for (const k of Object.keys(f) as (keyof typeof f)[]) (f as any)[k] = props.project[k] ?? (typeof f[k] === 'number' ? 0 : '')
})
const TYPES = [{ title: '%', value: 'P' }, { title: '€', value: 'V' }]
const changed = (k: keyof typeof f) => (f[k] ?? '') !== (props.project[k] ?? '')
const save = (k: keyof typeof f) => changed(k) && emit('save', k, f[k])
</script>

<template>
  <v-card variant="outlined" class="pa-4">
    <div class="text-subtitle-2 mb-3">Aggiustamenti proposta</div>
    <v-row density="compact">
      <v-col cols="8">
        <v-text-field v-model.number="f.incrementoproposta" type="number" min="0" label="Incremento" @blur="save('incrementoproposta')" />
      </v-col>
      <v-col cols="4">
        <v-select v-model="f.tipoincrementoproposta" :items="TYPES" label="Tipo" @update:model-value="save('tipoincrementoproposta')" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="f.noteincremento" label="Note incremento" @blur="save('noteincremento')" />
      </v-col>
      <v-col cols="8">
        <v-text-field v-model.number="f.scontoproposta" type="number" min="0" label="Sconto" @blur="save('scontoproposta')" />
      </v-col>
      <v-col cols="4">
        <v-select v-model="f.tiposcontoproposta" :items="TYPES" label="Tipo" @update:model-value="save('tiposcontoproposta')" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="f.notesconto" label="Note sconto" @blur="save('notesconto')" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model.number="f.newtotaleproposta" type="number" min="0" label="Nuovo totale proposta" prefix="€"
          hint="Se diverso da 0 sostituisce il totale calcolato" persistent-hint @blur="save('newtotaleproposta')" />
      </v-col>
    </v-row>
  </v-card>
</template>
