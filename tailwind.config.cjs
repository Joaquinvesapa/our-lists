/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,env}'
  ],
  theme: {
    colors: {
      'dark-grey': '#363636',
      'md-grey': '#4F4F4F',
      'md2-grey': '#605F5F', 
      'light-grey': '#8F8F8F',
      'green': '#21D880',
      'white': '#FFFFFF',

    },
    extend: {}
  },
  plugins: []
}
