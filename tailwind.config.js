const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
    },
    colors: {
      main: '#951822',
      pink: {
        50: '#FBF7F7',
      },
      blue: {
        600: '#141C3A',
      },
      black: {
        800: '#121212',
        900: '#1D1D1D',
      },
    },
    extend: {},
  },
  plugins: [],
};
