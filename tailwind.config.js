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
      red: {
        600: 'var(--color-red-600)',
      },
      pink: {
        50: 'var(--color-pink-50)',
      },
      blue: {
        800: 'var(--color-blue-800)',
      },
      black: {
        800: 'var(--color-black-800)',
        900: 'var(--color-black-900)',
      },
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              '&:hover': {},
              textDecorationColor: theme('colors.teal.500'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
            },
          },
        },
        dark: {
          css: {
            a: {
              '&:hover': {},
              textDecorationColor: theme('colors.teal.800'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
            },
          },
        },
      }),
    },
  },

  plugins: [],
};
