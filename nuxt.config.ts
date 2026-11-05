import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  ssr: false, // SPA come l'originale: è un gestionale dietro login
  devtools: { enabled: false },
  css: ['@mdi/font/css/materialdesignicons.css', '~/assets/main.css'],
  build: { transpile: ['vuetify'] },
  app: {
    head: {
      title: 'Helaproject',
      htmlAttrs: { lang: 'it' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'theme-color', content: '#00516E' }],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' },
      ],
    },
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: { template: { transformAssetUrls } },
  },
  typescript: { strict: true },
})
