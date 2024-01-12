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
  },
  plugins: [],
};
