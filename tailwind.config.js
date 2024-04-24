/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav': '#ACEEF7',
        'glass': "rgba(255,255,255,0.25)",
        'brown': "rgb(30,30,17)",
        'home': '#282638',
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [],
}

