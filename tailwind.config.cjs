const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#BA4270",
      "primary-300": "#DA6D97",
      "neutral-50": "#FBFCFE",
      "neutral-100": "#EDF3F8",
      "neutral-500": "#6C8294",
      "neutral-800": "#36536B",
      "neutral-900": "#1B262F",
      transparent: "transparent",
    },
    screens: {
      sm: "22rem",
      md: "45rem",
      xl: "75rem",
    },
    extend: {
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
        serif: ["DM Serif Display", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
