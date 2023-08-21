/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alpha: ["Raleway", "sans-serif"],
        gamma: ["Marck Script", "cursive"],
        sigma: ["Overpass Mono", "monospace"],
        zitta: ["Bebas Neue", 'sans-serif']
      }
    },
  },
  plugins: [],
}

