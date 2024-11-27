/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Lato', 'sans-serif'],
      },
      colors: {
        navy: '#0A192F',
        gold: '#FFD700',
        'soft-white': '#F8F8FF',
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
      },
    },
  },
  plugins: [],
};