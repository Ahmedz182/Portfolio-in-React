/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': '#222222',
      'darkPrimary': '#1f1f1f',
      'lightBlue': '#3d57d9',
      'darkBlue': '#243ca6',
      'pink': '#f73e4d',
      'secondary': '#4d93a2',
      'white': '#fbfffa',

    },
    screens: {


      'lg': { 'min': '1024' },

      'md': {
        'max': '1023px'
      },
      's-md': {
        'max': '749px'
      },
      'sm': { 'max': '479px' },

    }
  },
  plugins: [],
}