/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo
          dark: '#4f46e5',
          light: '#818cf8'
        },
        secondary: {
          DEFAULT: '#ec4899', // Pink
          dark: '#db2777',
          light: '#f472b6'
        },
        background: {
          DEFAULT: '#f8fafc', // Light slate
          dark: '#f1f5f9'
        },
        accent: {
          DEFAULT: '#14b8a6', // Teal
          dark: '#0d9488',
          light: '#2dd4bf'
        }
      }
    },
  },
  plugins: [],
}