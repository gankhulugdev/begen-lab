/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  
        'primary': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',

      },
    },
    
  },
  plugins: [],
}