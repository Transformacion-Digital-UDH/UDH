/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { // tamaños de pantalla personalizados
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: { // colores personalizados
        'green-custom-hover': '#3ec5ad', //usar: [bg, text, border, shadow]-green-custom
        'green-custom': '#2EBAA1', //usar: [bg, text, border, shadow]-green-custom
        'gray-custom': '#000000', //usar: [bg, text, border, shadow]-gray-custom
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'], // usar: font-epilogue
        'venus': ['VenusRising', 'sans-serif'], // usar: font-venus
      },
      fontWeight: {
      }
    },
  },
  plugins: [],
}

