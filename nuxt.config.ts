// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-12',

  devtools: { enabled: true },
  
  ssr: false,

  // css: ["@/assets/style.scss", "@/assets/media.scss"], // vuetify ships precompiled css, no need to import sass

  typescript: {
    shim: false,
  },

  vite: {
    // @ts-ignore
  },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: "Nuxt Math Quiz — Bridge International Asia Sdn. Bhd",
      htmlAttrs: {
        lang: 'en',
      }
    },
  },
})
