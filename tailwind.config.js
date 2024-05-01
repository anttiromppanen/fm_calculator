const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [
    createThemes({
      blue: {
        userBgColor: "hsl(222, 26%, 31%)",
        userTextColor: "white",
      },
      light: {
        userBgColor: "hsl(0, 0%, 90%)",
        userTextColor: "hsl(221, 14%, 31%)",
      },
      purple: {
        userBgColor: "hsl(268, 75%, 9%)",
        userTextColor: "hsl(52, 100%, 62%)",
      },
    }),
  ],
};
