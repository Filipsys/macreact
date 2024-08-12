/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "sm-base": ["0.938rem", { lineHeight: "1.25rem" }],
      },
      
    },
  },
  plugins: [],
};