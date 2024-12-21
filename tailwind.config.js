/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bright: {
          bg: '#ffffff',
          text: '#000000',
          hover: '#f0f0f0',
          active: '#e0e0e0',
        },
        dark: {
          bg: '#333333',
          text: '#ffffff',
          hover: '#444444',
          active: '#555555',
        },
      },
    },
  },
  plugins: [],
}
