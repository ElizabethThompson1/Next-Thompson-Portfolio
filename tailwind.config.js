/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: {
        light: "#74C69D", // Vibrant green for highlights
        DEFAULT: "#52796F", // Main rich green
        dark: "#1B4332", // Deep green for contrast
      },
      secondary: {
        light: "#95D5B2", // Soft complementary green
        DEFAULT: "#40916C", // Balanced complementary green
        dark: "#264653", // Deep teal-green for contrast
      },
    },
  },
  plugins: [],
};
