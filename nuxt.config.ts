// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "nuxt-gtag", "@nuxtjs/tailwindcss", '@cssninja/nuxt-toaster'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.NODE_ENV === 'production'
          ? 'https://wildcard-vety3kdfea-uc.a.run.app/graphql'
          : 'http://localhost:3000/graphql',
      },
    },
  },
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  app: {
    head: {
      title: "Ire Centenum",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Powered by nature and technology, but created with you in mind ",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/sf-pro-display",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "./favicon.png",
        },
      ],
      script: [
        {
          src: "./googleAnalytics.js",
        },
        {
          src: "./metaPixel.js",
        },
      ],
      noscript: [
        {
          innerHTML: `<img
          height="1"
          width="1"
          style="display:none"
          src="https://www.facebook.com/tr?id=148745654488888&ev=PageView&noscript=1"
        />`,
        },
      ],
    },
  },
});
