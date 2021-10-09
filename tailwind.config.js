const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        hand: ['Dancing Script'],
      },
      fontSize: {
        ...defaultTheme.fontSize,
        48: '48px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
