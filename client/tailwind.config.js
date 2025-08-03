/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "#ffbf00",
        "primary-100": "#ffc929",
        "secondary-200": "#00b050",
        "secondary-100": "#0b1a78",
      },
      keyframes: {
        tubelightFlicker: {
          "3%": { opacity: "1", filter: "brightness(1.1)" },
          "5%": { opacity: "0", filter: "brightness(0.4)" },
          "7%": { opacity: "1", filter: "brightness(1.2)" },
          "13%": { opacity: "1" },
          "16%": { opacity: "0.5" },
          "20%": { opacity: "1", filter: "brightness(1.1)" },
          "25%": { opacity: "0" },
          "30%": { opacity: "1" },
          "50%": { opacity: "1" ,filter: "brightness(1.2)" },
          "60%": { opacity: "0.3" },
          "70%": { opacity: "1" },
          "80%": { opacity: "0.5" },
          "90%": { opacity: "1" },
          "100%": { opacity: "1", filter: "brightness(1.6)" }, // final ON state
        },
        slideDown: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "tubelightFlicker": "tubelightFlicker 3s ease-in-out infinite",
        "slide-down": "slideDown 0.3s ease-out",
        "fade-in": "fadeIn 0.3s ease-in",
      },
    },
  },
  plugins: [],
};
