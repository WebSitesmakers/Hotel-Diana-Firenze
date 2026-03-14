/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'diana-blue': '#1F2A44',
        'diana-gray': '#E5E7EB',
        'diana-gold': '#C5A35B',
        'background': '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
