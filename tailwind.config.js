/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily:{
        'inter' : 'Inter',
        'poppins' : 'Poppins',
        'anton' : 'Anton'
      },
      backgroundColor:{
        'glass' : "linear-gradient(136.67deg, rgba(255, 255, 255, 0.56) 0%,rgba(152, 151, 151, 0) 102.037%)"
      }
    },
  },
  plugins: [require("daisyui")],
}

