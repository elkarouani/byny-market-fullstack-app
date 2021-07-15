module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Montserrat"']
      },
      colors: {
        'dropdown-gray': "hsla(198, 21%, 66%, 0.2)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
