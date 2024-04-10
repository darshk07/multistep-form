/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1c1c1c",
        primary: "#159f7e",
        secondary: "#f7ae32",
        grey: "#e6e6e666",
        dark: {
          100: "#666666",
          60: "#e5e5e5",
        },
      },
    },
  },
  plugins: [],
};
