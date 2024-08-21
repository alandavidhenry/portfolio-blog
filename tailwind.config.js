/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,njk}'],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1c1a1b',
        'custom-light': '#fffcef'
      },
      fontFamily: {
        lekton: ['Lekton', 'sans-serif'],
        libreFranklin: ['Libre Franklin', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
