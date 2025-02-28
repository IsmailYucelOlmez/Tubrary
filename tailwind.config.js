/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
        exo: ["Exo", "sans-serif"],
        exoItalic: ["ExoItalic", "sans-serif"],
        exoBold: ["ExoBold", "sans-serif"],
        philosopherBold: ["PhilosopherBold", "sans-serif"],
        berkshireSwash: ["BerkshireSwash", "sans-serif"],
      },
      colors:{
        'brandWhite':'#F1FAEE',
        'brandRed':'#E63946',
        'brandBlack':'#282828', 
        'bottomTabActive':'#2B2D42',
        'wpGreen':'#00a884',
      }
    },
  },
  plugins: [],
}