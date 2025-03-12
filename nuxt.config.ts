export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/main.less", "@/assets/css/prism.css"],
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "@nuxt/content"],
  app: {
    head: {
      title: "Mih4n",
      meta: [{ name: "description", content: "Mih4n's Portfolio" }],
      link: [{ rel: "icon", href: "/favicon.ico" }],
      bodyAttrs: {
        class: "bg match-braces keep-markup",
      }
    },
  },
});
