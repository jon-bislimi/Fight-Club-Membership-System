/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3C50E0",
        dark: "#1C2434",
        dark2: "#111827",
      },
    },
  },
  plugins: [],
};
