// nuxt.config.ts
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
    css: [
    '~/assets/scss/light-theme.scss',
    '~/assets/scss/dark-theme.scss'
  ],
  modules: ["@nuxtjs/color-mode", "vuetify-nuxt-module"],
  colorMode: {
    preference: "system", // Default color mode 
    fallback: "light", // Fallback color mode if no system preference is found
    classSuffix: "", // Suffix to add to the HTML element
  },
  vuetify: {
    moduleOptions: {
      // Your module specific options
    },
    vuetifyOptions: {
      // Your Vuetify options
    }
  },
});
