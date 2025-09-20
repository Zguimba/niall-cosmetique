/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
  fontFamily: {
    franklin: ['"FranklinGothicURW"', 'sans-serif'],
  },
},

  },
  plugins: [],
}
