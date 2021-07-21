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
        'product-card-inner': "hsla(206, 46%, 46%, 0.05)",
        'product-card-outer': "hsla(206, 46%, 46%, 0.5)",
        'product-outer': "hsla(206, 46%, 46%, 0.7)",
        'primary-green': "#5d7a16",
        'product-description': "#161B33",
        'product-price': "hsla(230, 40%, 14%, 0.75)",
        'product-cta': "#0E4D80",
        'new-products-title': "#0D0C1D",
        'service-illustration': "hsla(206, 46%, 46%, 0.5)",
        'service-title': "hsla(206, 57%, 17%, 0.7)",
        'service-description': "hsla(230, 40%, 14%, 0.75)",
        'footer': "hsla(198, 21%, 66%, 0.2)",
        'footer-label': "#161B33",
        'footer-link': "hsla(230, 40%, 14%, 0.65)",
        'footer-description': "#0E4D80"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
