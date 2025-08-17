export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/main.less", "@/assets/css/prism.less"],
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/mdc",
    "@nuxtjs/sitemap",

    "nuxt-vue-dragscroll",
  ],
  app: {
    cdnURL: 'https://mih4n.xyz/',
    head: {
      title: "Mih4n",
      meta: [
        { name: "description", content: "Mih4n's Portfolio" },
        { name: "og:title", content: "Mih4n" },
        { name: "og:description", content: "Mih4n's Portfolio" },
        { name: "og:url", content: "https://mih4n.xyz" },
        { name: "og:image", content: "https://mih4n.xyz/og-big.png" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: "Mih4n" },
        { name: "twitter:image", content: "https://mih4n.xyz/og.png" },
        { name: "twitter:description", content: "Mih4n's Portfolio" }
      ],
      link: [
        { 
          rel: "icon", 
          type: 'image/ico', 
          href: "/favicon.ico" 
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          href: '/favicon.png' 
        },
        {
          rel: 'preload',
          href: '/fonts/JetBrainsMono.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/Inconsolata.ttf',
          as: 'font',
          type: 'font/ttf',
          crossorigin: 'anonymous'
        }
      ],
      script: [
        {
          src: "/scripts/dark.js",
          type: 'text/javascript',
          tagPosition: 'head',
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        class: "bg match-braces keep-markup"
      }
    },
  },
});