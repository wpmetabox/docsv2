const colors = require( 'tailwindcss/colors' );
const defaultTheme = require( 'tailwindcss/defaultTheme' );

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    fontFamily: {
      sans: [ 'Inter', ...defaultTheme.fontFamily.sans ],
      slab: [ 'Roboto Slab', ...defaultTheme.fontFamily.sans ],
    },
    extend: {
      colors: {
        accent: '#00b1b3',
        black: '#000',
      },
    },
  },
};
