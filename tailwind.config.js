/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#FF0000',
        'my-green': '#41b441',
        'yellow': '#FFBF00',
        'dark-green': '#384e11',
        'my-blue': '#0000FF'
      },
    },
  },
  plugins: [],
}

