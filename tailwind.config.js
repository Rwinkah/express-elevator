/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mesh': "url('/src/assets/mesh.png')",
        'gridImg': "url('/src/assets/background_2.png')",
      }),

      colors: {
        'expBlue': '#0375F5',
        'expBlueDark': '#0F55A3',
      }
    },
  },
  plugins: [],
}