/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // Adding custom fonts
        roboto: ["Roboto", "sans-serif"],
        custom: ["MyCustomFont", "serif"],
        lato: ["Lato", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        transparent: "transparent",
        charcoalsModified: " #2E4053",
        customGreen: "#8b9467",
        sageGreen: "#8B9467",
        emraldGreen: "#008000",
        terracotta: "#DA70D6",
      },
    },
  },
  plugins: [],
};
