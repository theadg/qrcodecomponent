/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'], //where to look for the utility classes
  theme: {
    container:{
      width:{
        DEFAULT: '100px',
      },
    },

    screens:{
      sm: '375px',
      lg: '1440px',
    },

    fontFamily:{
      'outfit' : ['Outfit', 'sans-serif'],
    },


    borderRadius: {
      'large': '16px',
    },

    
    extend: {
      height: {
        '78': '280px',
        '128': '32rem',
        '256': '256rem',
      },
      colors: {
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 45%, 89%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      },

    },
  },
  plugins: [],
}
