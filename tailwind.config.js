/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tus colores de marca
        beige: '#DDD0C8',
        'dark-grey': '#323232',
        // Colores auxiliares para el mockup de WhatsApp
        'wa-bg': '#E5DDD5', // Fondo clásico del chat
        'wa-green-dark': '#075E54', // Barra superior WA
        'wa-green-light': '#DCF8C6', // Burbuja enviada WA
        'wa-incoming': '#FFFFFF', // Burbuja recibida WA
      },
      fontFamily: {
        // Usaremos una fuente sans-serif limpia por defecto
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}