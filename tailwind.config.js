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
      backgroundImage: {
        benner:
          "linear-gradient(to bottom,#C2DBFF4D,#C2DBFF4D),url('./benner.jpeg')",
      },
    },
    screens: {
      hd: "1366px",
      lineMax: "1600px",
      fhd: "1920px",
    },
  },
  plugins: [],
};
