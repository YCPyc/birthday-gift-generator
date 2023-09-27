/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "black",
        "brand-primary": "#1B78D0",
        "brand-secondary": "#073866",
        "brand-skyblue": "#4b7b8b",
        "brand-gray": {
          100: "#F6F6F6",
          200: "#C5C5C5",
          300: "#A6AEBB",
        },
      },
    },
  },
  plugins: [],
}

