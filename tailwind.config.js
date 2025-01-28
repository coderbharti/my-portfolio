/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        ovo: ['Ovo', 'serif'],

      },

      boxShadow: {
        pink: '0px 4px 10px rgba(255, 192, 203, 0.5)',
      },
    },
  },
  plugins: [],
}
