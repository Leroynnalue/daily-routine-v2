/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/**/*.{html,jsx}',
    './public/*.{html,jsx}',
  ],
  theme: {
    screens:{
      'sm': '360px',
      'md': '480px',
      'lg': '940px',
      'xl': '1440px',
    },
    extend: {
      backgroundColor:{
        'backgroundColor':"#1d1e20",
      },
      colors: {
        'backgroundColor':"#1d1e20",
      },
      fontSize: {
        normal: '1.35em',
      },
    },
  },
  plugins: [],
}
