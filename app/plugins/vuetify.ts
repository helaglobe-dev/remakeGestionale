import { createVuetify } from 'vuetify'
import { it } from 'vuetify/locale'
import 'vuetify/styles'

// Stile del gestionale originale: tema Vuetify standard (primario blu) + colore istituzionale Helaglobe #00516E.
export default defineNuxtPlugin((app) => {
  app.vueApp.use(createVuetify({
    locale: { locale: 'it', messages: { it } },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1867C0', 'primary-darken-1': '#1F5592', secondary: '#48A9A6',
            brand: '#00516E', 'brand-light': '#E6EFF2', background: '#FFFFFF', surface: '#FFFFFF',
            error: '#B00020', info: '#2196F3', success: '#4CAF50', warning: '#FB8C00',
          },
        },
      },
    },
    defaults: {
      VTextField: { variant: 'outlined', density: 'compact' },
      VTextarea: { variant: 'outlined', density: 'compact' },
      VSelect: { variant: 'outlined', density: 'compact' },
      VAutocomplete: { variant: 'outlined', density: 'compact' },
      VCombobox: { variant: 'outlined', density: 'compact' },
      VBtn: { rounded: 'md' },
      VCard: { rounded: 'lg' },
      VDialog: { scrim: 'rgba(0,0,0,.35)' },
      VDataTable: { hover: true },
    },
  }))
})
