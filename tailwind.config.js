const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
        pretendard: ["var(--font-pretendard)"],
        faktumTest: ["var(--font-faktumTest)"],
      },
      animation: {
        moveFromDownToUp0_7s: "moveFromDownToUp 0.7s forwards 0.6s ease-in-out",
        moveFromDownToUp0_8s: "moveFromDownToUp 0.8s forwards 0.7s ease-in-out",
        smoothUp: "smoothUp 0.9s forwards 1s ease-in-out",
        lineAppear: "lineAppear 1s linear",
      },
      keyframes: {
        moveFromDownToUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(150%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },

        smoothUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },

        lineAppear: {
          "0%": {
            height: "0%",
          },
          "5%": {
            height: "5%",
          },
          "10%": {
            height: "10%",
          },
          "20%": {
            height: "20%",
          },
          "50%": {
            height: "50%",
          },
          "100%": {
            height: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
