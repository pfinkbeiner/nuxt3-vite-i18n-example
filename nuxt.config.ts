// https://nuxt.com/docs/api/configuration/nuxt-config
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    strategy: "prefix_except_default",
    locales: [
      {
        name: "English",
        code: "en",
        path: "/en",
        iso: "en-US",
      },
      {
        name: "German",
        code: "de",
        path: "/",
        iso: "de-DE",
      },
    ],
    defaultLocale: "en",
  },
});
