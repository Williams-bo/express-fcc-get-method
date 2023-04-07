// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/apollo", "nuxt-gtag", "@nuxtjs/tailwindcss"],

  apollo: {
    clients: {
      default: {
        httpEndpoint:
          process.env.NODE_ENV === "production"
            ? "https://wildcard-vety3kdfea-uc.a.run.app/graphql"
            : "http://localhost:3000/graphql",
      },
    },
  },
  gtag: {
    id: process.env.GOOGLE_TAG_ID,
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
          hid: "tawk.to",
          src: "https://embed.tawk.to/641fc1b94247f20fefe8033b/1gse0pfrd",
          defer: true,
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe 
          src=""https://www.googletagmanager.com/ns.html?id=GTM-T7MMMXS""
          height=""0"" 
          width=""0"" 
          style=""display:none;visibility:hidden"">
          </iframe>`,
        },
      ],
    },
  },
});
