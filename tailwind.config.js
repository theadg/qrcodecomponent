/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], //where to look for the utility classes
  theme: {
    screens:{
      sm: '375px',
      lg: '1440px',
    },
    extend: {
      colors: {
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 89%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      },
      
    },
  },
  plugins: [],
}
