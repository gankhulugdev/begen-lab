/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  
        'primary': '#FC864F',
        'dark': '#201D20',
        'dark-grey':'66666E',
        'bone': '#E0D1B8',
        'manatee': '#8B8B94',
        'light': '#FEFCFF'

      },
    },
    
  },
  plugins: [],
}