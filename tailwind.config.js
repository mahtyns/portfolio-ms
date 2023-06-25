/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-white': '#f3f3f3',
        'gray-50': '#eeeeee',
        'gray-100': '#e7e7e7',
        'gray-500': '#454545',
        'main-dark': '#1a1a1a',
        'special-500': '#f30a30',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      },
      fontSize: {
        '2xl': '2em'
      },
      height: {
        'module-big': '1000px',
        'module-medium': '650px',
        'module-small': '400px'
      },
      animation: {
        'spin': 'spin 15s linear infinite'
      },
      flex: {
        '3': '1fr 1fr 1fr'
      }
    },
    // screens: {
    //   xs: "480px",
    //   sm: "768px",
    //   md: "1060px"
    // }
  },
  plugins: [],
}