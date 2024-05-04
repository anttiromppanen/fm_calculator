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
      maxWidth: { userCalculatorMaxWidth: "542px" },
      margin: { userCalculatorMarginMobile: "1.5rem" },
      padding: {
        userCalculatorPaddingMobile: "1.5rem",
        userCalculatorPaddingDesktopX: "1.875rem",
        userCalculatorPaddingDesktopY: "2rem"
      },
      gap: { userCalculatorGapDesktop: "1.5rem", userCalculatorGapMobile: "0.75rem" },
      screens: {
        "max-xs": { max: "350px" },
      },
    },
  },
  plugins: [
    createThemes({
      blue: {
        // GLOBAL
        userBgColor: "hsl(222, 26%, 31%)",
        userMainTextColor: "white",

        // RADIO BUTTON
        userRadioBg: "hsl(223, 31%, 20%)",
        userRadioThumbBg: "hsl(6, 63%, 50%)",

        // RESULT
        userResultBg: "hsl(224, 36%, 15%)",
        userResultText: "white",

        // KEYPAD
        userKeypadBg: "hsl(223, 31%, 20%)",
        userButtonBg: "#EAE3DB",
        userButtonShadow: "#B4A69B",
        userButtonTextColor: "hsl(221, 14%, 31%)",

        // ACCENT 1
        userButtonAccent1Bg: "hsl(225, 21%, 49%)",
        userButtonAccent1Shadow: "hsl(224, 28%, 35%)",

        // ACCENT 2
        userButtonAccent2Bg: "hsl(6, 63%, 50%)",
        userButtonAccent2Shadow: "hsl(6, 70%, 34%)",
      },
      light: {
        // GLOBAL
        userBgColor: "hsl(0, 0%, 90%)",
        userMainTextColor: "hsl(221, 14%, 31%)",

        // RADIO BUTTON
        userRadioBg: "hsl(0, 5%, 81%)",
        userRadioThumbBg: "hsl(25, 98%, 40%)",

        // RESULT
        userResultBg: "hsl(0, 0%, 93%)",
        userResultText: "hsl(60, 10%, 19%)",

        // KEYPAD
        userKeypadBg: "hsl(0, 5%, 81%)",
        userButtonBg: "#E5E4E0",
        userButtonShadow: "#A99D91",
        userButtonTextColor: "hsl(60, 10%, 19%)",

        // ACCENT 1
        userButtonAccent1Bg: "hsl(185, 42%, 37%)",
        userButtonAccent1Shadow: "hsl(185, 58%, 25%)",

        // ACCENT 2
        userButtonAccent2Bg: "hsl(25, 98%, 40%)",
        userButtonAccent2Shadow: "hsl(25, 99%, 27%)",
      },
      purple: {
        // GLOBAL
        userBgColor: "hsl(268, 75%, 9%)",
        userMainTextColor: "hsl(52, 100%, 62%)",

        // RADIO BUTTON
        userRadioBg: "hsl(268, 71%, 12%)",
        userRadioThumbBg: "hsl(176, 100%, 44%)",

        // RESULT
        userResultBg: "hsl(268, 71%, 12%)",
        userResultText: "hsl(52, 100%, 62%)",

        // KEYPAD
        userKeypadBg: "hsl(268, 71%, 12%)",
        userButtonBg: "#331B4D",
        userButtonShadow: "#851C9C",
        userButtonTextColor: "hsl(52, 100%, 62%)",

        // ACCENT 1
        userButtonAccent1Bg: "hsl(281, 89%, 26%)",
        userButtonAccent1Shadow: "hsl(285, 91%, 52%)",

        // ACCENT 2
        userButtonAccent2Bg: "hsl(176, 100%, 44%)",
        userButtonAccent2Shadow: "hsl(177, 92%, 70%)",
      },
    }),
  ],
};