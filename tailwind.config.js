/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A7FFF",
        secondary: "#c2dbff",
        lightGrey: "#f2f4f6",
      },
    },
    screens: {
      hd: "1366px",
      lineMax: "1600px",
      fhd: "1920px",
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
