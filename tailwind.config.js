/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'reasonImg1': "url('/src/assets/Reason1.svg')",
      }),

      colors: {
        'expBlue': '#0375F5',
        'expBlueDark': '#0F55A3',
      }
    },
  },
  plugins: [],
}