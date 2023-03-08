/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      xl: "0.5rem",
      full: "9999px",
      large: "400px",
    },
    extend: {
      colors:{
        veryDarkBlue:'#0B0728',
        fadePurple:'#0B0728B2',
        primaryGrey:'#828282',
        lightGrey:'#A7A7A7',
        darkGrey:'#575757'

      },
      height: {
        30: "7.5rem",
        88: "22rem",
        118: "26rem",
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
