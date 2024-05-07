/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
      backgroundImage: {
        "pattern-mobile":
          "url('./assets/images/background-pattern-mobile.svg')",
        "pattern-desktop":
          "url('./assets/images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
