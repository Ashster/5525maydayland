/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'pink': '#e86ca5',
      'blue': '#29a7e1',
      'green': '#22a93a',
      'yellow': '#efce3e',
      'red': '#dc3320',
      'dark-blue':'#00a1e9',
    },
    borderRadius: {
      'half':'50%',
      'full':'100%',
      'full-full':'100% / 100%',
    },
    extend: {
    },
  },
  plugins: [],
}