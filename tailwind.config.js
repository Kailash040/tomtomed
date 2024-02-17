/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      tomad: "#85C6E2",
      tom: "#B68FE7",
      grey: "#1F1F1F",
      black: "#000000",
      white: "#FFFFFF",
      newbgcolor: "#202020",
      global :"#1B1C1B"
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        '3xl': "1440px",
      },
      
    },
  },
  plugins: [require("daisyui")],
};
