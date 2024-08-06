/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueBg': '#13144D',
        'main': '#41C93E',
        'whiteText': '#fff',
      },
      fontFamily:{
        righteous: ["Righteous", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],

      }
    },
  },
  plugins: [],
}

