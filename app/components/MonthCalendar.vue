<script setup lang="ts">
// Calendario mese/settimana (lun→dom) con eventi per giorno. Emette l'intervallo visibile ad ogni cambio.
export type CalEvent = { id: string | number, date: string, name: string, color?: string | null, time?: string, clickable?: boolean, bold?: boolean }
const props = defineProps<{ events: CalEvent[] }>()
const emit = defineEmits<{ range: [from: string, to: string], 'click:day': [day: string], 'click:event': [e: CalEvent] }>()
const view = ref<'month' | 'week'>('month')
const focus = ref(localDay())
const today = localDay()
const WEEKDAYS = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']

const range = computed<[string, string]>(() => {
  if (view.value === 'week') {
    const mon = addDays(focus.value, -((weekdayOf(focus.value) + 6) % 7))
    return [mon, addDays(mon, 6)]
  }
  const [y, m] = focus.value.split('-').map(Number)
  const first = localDay(new Date(y!, m! - 1, 1))
  const last = localDay(new Date(y!, m!, 0))
  return [addDays(first, -((weekdayOf(first) + 6) % 7)), addDays(last, (7 - weekdayOf(last)) % 7)]
})
watch(range, ([a, b]) => emit('range', a, b), { immediate: true })
const days = computed(() => dayRange(...range.value))
const byDay = computed(() => {
  const m = new Map<string, CalEvent[]>()
  for (const e of props.events) m.set(e.date, [...(m.get(e.date) ?? []), e])
  return m
})
const title = computed(() => {
  const [y, m] = focus.value.split('-').map(Number)
  const label = new Date(y!, m! - 1, 1).toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })
  return view.value === 'week' ? `${fmtDay(range.value[0])} – ${fmtDay(range.value[1])}` : label[0]!.toUpperCase() + label.slice(1)
})
function move(dir: number) {
  if (view.value === 'week') focus.value = addDays(focus.value, 7 * dir)
  else { const [y, m] = focus.value.split('-').map(Number); focus.value = localDay(new Date(y!, m! - 1 + dir, 1)) }
}
const inMonth = (d: string) => view.value === 'week' || d.slice(0, 7) === focus.value.slice(0, 7)
defineExpose({ range })
</script>

<template>
  <div>
    <div class="d-flex align-center flex-wrap ga-2 mb-2">
      <v-btn size="small" variant="outlined" @click="focus = today">Oggi</v-btn>
      <v-btn icon="mdi-chevron-left" size="small" variant="text" @click="move(-1)" />
      <v-btn icon="mdi-chevron-right" size="small" variant="text" @click="move(1)" />
      <span class="text-subtitle-1 font-weight-medium mr-auto">{{ title }}</span>
      <v-btn-toggle v-model="view" density="compact" mandatory variant="outlined" divided>
        <v-btn value="week" size="small">Settimana</v-btn>
        <v-btn value="month" size="small">Mese</v-btn>
      </v-btn-toggle>
    </div>
    <div class="cal-grid">
      <div v-for="w in WEEKDAYS" :key="w" class="cal-head">{{ w }}</div>
      <div v-for="d in days" :key="d" class="cal-day" :class="{ 'cal-out': !inMonth(d), 'cal-today': d === today, 'cal-week': view === 'week' }"
        @click="emit('click:day', d)">
        <div class="cal-num">{{ Number(d.slice(8)) }}</div>
        <div v-for="e in byDay.get(d) ?? []" :key="e.id" class="cal-ev" :class="{ 'cal-click': e.clickable, 'font-weight-bold': e.bold }"
          :style="{ background: e.color ?? '#90a4ae' }" :title="e.name" @click.stop="e.clickable ? emit('click:event', e) : emit('click:day', d)">
          <span v-if="e.time" class="mr-1">{{ e.time }}</span>{{ e.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cal-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); border-left: 1px solid rgba(0,0,0,.12); border-top: 1px solid rgba(0,0,0,.12); }
.cal-head { font-size: .75rem; text-align: center; padding: 4px; font-weight: 600; border-right: 1px solid rgba(0,0,0,.12); border-bottom: 1px solid rgba(0,0,0,.12); }
.cal-day { min-height: 92px; padding: 2px; border-right: 1px solid rgba(0,0,0,.12); border-bottom: 1px solid rgba(0,0,0,.12); cursor: pointer; overflow: hidden; }
.cal-day.cal-week { min-height: 320px; }
.cal-day:hover { background: rgba(0,0,0,.03); }
.cal-out { opacity: .45; }
.cal-today .cal-num { background: rgb(var(--v-theme-primary)); color: white; border-radius: 50%; width: 22px; text-align: center; }
.cal-num { font-size: .75rem; margin-bottom: 2px; }
.cal-ev { font-size: .7rem; color: white; border-radius: 3px; padding: 1px 4px; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 0 0 2px rgba(0,0,0,.4); }
.cal-click { cursor: pointer; }
</style>
