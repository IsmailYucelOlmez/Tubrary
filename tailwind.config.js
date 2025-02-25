/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
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
    },
  },
  plugins: [],
}