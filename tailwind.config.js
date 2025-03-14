/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '968px',
      xl: '1440px',
    },
    extend: {
      colors:{
      VeryDarkBlue: 'hsl(243, 87%, 12%)',
      DesaturatedBlue: 'hsl(238, 22%, 44%)',
      BrightBlue: 'hsl(224, 93%, 58%)',
      ModerateCyan: 'hsl(170, 45%, 43%)',
      LightGrayishBlue: 'hsl(240, 75%, 98%)',
      LightGray: 'hsl(0, 0%, 75%)',
      boxShadow: '5px, 5px, 10px rgba(0px, 0px, 0px, 0.15)',
      brightbluedark: 'hsl(224, 93%, 38%)',
      moderatecyandark: 'hsl(170, 45%, 23%)',
      },
  },
  plugins: [],
  },
}