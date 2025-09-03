// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'url'
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@pinia/nuxt', '@formkit/nuxt'],
  css: ['@/app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '@components': fileURLToPath(new URL('./components', import.meta.url)),
        '@utils': fileURLToPath(new URL('./utils', import.meta.url)),
        '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
      storageBase: process.env.STORAGE_BASE || 'http://127.0.0.1:8000'
    },
  },
  alias: {
    '~/types': '/types',
    '@types': '/types'
  }
})