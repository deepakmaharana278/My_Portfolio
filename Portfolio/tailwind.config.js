/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%':{transform:'scale(1)'},
          '33%':{transform:'scale(1.2)'},
          '66%':{transform:'scale(0.8)'},
          '100%':{transform:'scale(1)'},
        },
      },
      animation: {
        blob:'blob 10s infinite'
      }
    },
  },
  plugins: [],
}
