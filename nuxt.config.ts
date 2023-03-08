// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: 'http://52.12.111.247:3000/graphql'
  //     }
  //   },
  // },

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
    },
  },
});
