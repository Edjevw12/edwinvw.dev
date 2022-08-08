module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Archivo', 'sans-serif'],
    },
    colors: {
      white: '#ffff',
      red: {
        50: 'var(--color-red-50)',
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        800: 'var(--color-red-800)',
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
            h1: {
              fontSize: '2.5rem',
              fontWeight: '700',
              color: theme('colors.blue.800'),
            },
          },
        },
        dark: {
          css: {},
        },
      }),
    },
  },

  plugins: [],
}
