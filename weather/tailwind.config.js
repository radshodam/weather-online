/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "9xl": "1400px",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      glassColors: {
        blue: "rgba(66, 153, 225, 0.3)",
        red: "rgba(255, 99, 71, 0.3)",
        green: "rgba(0, 128, 0, 0.3)",
        purple: 'rgba(128, 0, 128, 0.3)',
        gold: 'rgba(255, 215, 0, 0.3)', 
        pink: 'rgba(255, 182, 193, 0.3)', 
        teal: 'rgba(0, 128, 128, 0.3)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, variants }) {
      const glassColors = theme("glassColors", {});
      const utilities = {};
      for (const [color, value] of Object.entries(glassColors)) {
        utilities[`.glass-${color}`] = {
          backgroundColor: value,
        };
      }
      addUtilities(utilities, variants("glass"));
    },
  ],
};
