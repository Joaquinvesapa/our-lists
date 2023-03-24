/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,env}",
  ],
  theme: {
    colors : {
      'dark-grey': '#363636',
      'light-grey': '#8F8F8F',
      'green': '#21D880',
      'white': '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}
