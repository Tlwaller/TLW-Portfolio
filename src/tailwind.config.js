module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: "0",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        primary: "#F74843", // Light red
        secondary: "#EDEDED", // White
        accent: "#585758", // Light gray
        background: "#37393A", // Dark gray
      },
      fontFamily: {
        display: ["Apercu", "sans-serif"],
        body: ["Apercu", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
