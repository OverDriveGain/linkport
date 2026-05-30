export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Assembr — Multi-Platform Community Management",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Build, engage, and grow communities across every platform you publish on. Assembr is the unified workspace for community managers — LinkedIn, Slack, Discord, and more.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://linkedin.kaxtus.com" },
        {
          property: "og:title",
          content: "Assembr — Multi-Platform Community Management",
        },
        {
          property: "og:description",
          content:
            "One workspace for every community you run — LinkedIn, Slack, Discord, and more.",
        },
        {
          property: "og:image",
          content: "https://linkedin.kaxtus.com/og-image.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],

  css: ["~/assets/css/main.css"],

  ssr: true,

  nitro: {
    preset: "node-server",
    logLevel: "error",
  },

  runtimeConfig: {
    public: {
      siteUrl: "https://linkedin.kaxtus.com",
    },
  },

  compatibilityDate: "2025-03-11",
});
