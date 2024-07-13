/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  heme: {
    extend: {
      margin: {
        '-35': '-35px',
        '-55':'-55px'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
