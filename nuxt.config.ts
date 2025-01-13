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

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  app: {
    head: {
      title: process.env.META_TITLE,
      meta: [
        { name: 'description', content: process.env.META_DESCRIPTION },
        { property: 'og:title', content: process.env.META_TITLE },
        { property: 'og:description', content: process.env.META_DESCRIPTION },
        { property: 'og:image', content: process.env.META_IMAGE },
        { property: 'og:url', content: process.env.META_URL },
        { name: 'twitter:card', content: process.env.META_TWITTER_CARD },
        { name: 'twitter:title', content: process.env.META_TITLE },
        { name: 'twitter:description', content: process.env.META_DESCRIPTION },
        { name: 'twitter:image', content: process.env.META_IMAGE }
      ],
      link: [
        { rel: "icon", type: "image/png", href: process.env.META_IMAGE },
      ],
      htmlAttrs: {
        lang: 'en',
      }
    },
  },

  runtimeConfig: {
    public: {
      metaCopyright: process.env.META_COPYRIGTH,
    },
  },
})
