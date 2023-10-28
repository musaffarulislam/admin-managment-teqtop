/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#ffffff',
        'background': '#f8f9f9',
        'green': '#95bf47',
        'blue': '#17494d',
        'gray': '#E5E5E5'
      }
    },
  },
  plugins: [],
}

