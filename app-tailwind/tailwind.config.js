const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    mode: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.trueGray,
        red: colors.rose,
        blue: {
          light: '#85d7ff',
          DEFAULT: '#ccc',
          dark: '#009eeb',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
