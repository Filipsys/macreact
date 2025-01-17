/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "sm-base": ["0.938rem", { lineHeight: "1.25rem" }],
      },
      fontFamily: { SFPro: ["SFPro"], SFProRounded: ["SFProRounded"] },
      keyframes: {
        "jump-up": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pop-up": {
          "0%, 80%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        jumpup: "jump-up 1s ease-in-out",
        popup: "pop-up 1.3s linear",
      },
    },
  },
  plugins: [],
};
