/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        offwhite: '#F9F8F6',
        charcoal: '#1A1A1A',
        forest: '#1B3B36',
        accent: '#D97706',
        darkbg: '#111312',
        darkcard: '#1A1E1C'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
