/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      txtsecondary: "#EBD96B",
      brandgreen: "#23856D",
      red: "#ff0000",
    },

    extend: {
      // textColor: {"visited"}
      backgroundColor: ["active", "disabled", "checked"],
      borderColor: ["active", "disabled", "checked", "focused"],
    },
  },
  plugins: [],
};