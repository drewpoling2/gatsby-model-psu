/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#fff',
      },
      black: {
        DEFAULT: '#000',
      },
      blue: {
        DEFAULT: '#1E407C',
        lightBlue: '#ccf0ff',
        robinsEggBlue: '#009CDE',
        darkNavyBlue: '#001E44',
        bluishBlack: '#000321',
      },
      gray: {
        DEFAULT: '#C0C0C0',
      },
      yellow: {
        DEFAULT: '#ffd100',
      },
    },

    fontFamily: {
      heading: ['Roboto', 'sans'],
      a: ['Roboto', 'sans'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3.438rem', { lineHeight: '3.688rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
    },
    extend: {},
  },
  //create base templates for html elements
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.5xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        a: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.bold'),
          cursor: theme('cursor.pointer'),
        },
      });
    }),
  ],
};
