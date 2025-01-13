/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "sm-base": ["0.938rem", { lineHeight: "1.25rem" }],
      },
      fontFamily: { SFPro: ["SFPro"] },
      keyframes: {
        "jump-up": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        jumpup: "jump-up 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
