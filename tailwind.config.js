/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ostrich: ["Ostrich", "sans-serif"],
        quantico: ["Quantico", "sans-serif"],
      },
      colors: {
        "js-white": "#fffdf0",
        "js-hover": "#214B78",
        "js-red": "#F24236",
        "js-brown": "#564138"
      },
    },
  },
  plugins: [],
};
