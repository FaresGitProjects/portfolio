module.exports = {
  purge: ['./src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        '3xl': '30px 30px 30px rgba(0, 0, 0, 0.65)',
      },
      boxShadow: {
        '3xl': '0px 10px 40px 25px rgba(75, 75, 75, 0.3)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
