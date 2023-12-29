
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/heroBg.svg')",
        'card': "url('assets/images/phoneBg.svg')",
      },
      screens: {
        'xxl': { 'max': '2150px' },
        "wide": "1440px",
        'l': { 'max': '1075px' },
        'ml': { 'max': '1175px' },
        'mdl': { 'max': '883px' },
        'smd': { 'max': '815px' },
        'xmd': { 'max': '783px' },
        'md': { 'max': '768px' },
        'mds': { 'max': '750px' },
        'sml': { 'max': '668px' },
        'sm': { 'max': '668px' },
        'xsm': { 'max': '663px' },
        'sm-s': { 'max': '639px' },
        's': { 'max': '599px' },
        'xs': { 'max': '551px' },
        'x': { 'max': '494px' },
        'xx': { 'max': '420px' },
      }
    },
  },
  plugins: [
  ]
})

