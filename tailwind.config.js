/** @type {import('tailwindcss').Config} */

const {fontFamily} = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway: ["var(--font-raleway)", ...fontFamily.sans]

      },
      colors: {
        royalpurple: "#7851a9",
        Takealotblue: "#0B79BF",
        ElectricPurple: "#8F00FF",
        TransparentColor: "#ffffff00",
      },
    },
  },
  plugins: [],
}
