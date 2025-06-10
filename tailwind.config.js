/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        scrollText: 'scrollText 20s linear infinite',
      },
      keyframes: {
        scrollText: {
          'from': { transform: "translateX(0%)" },
          'to': { transform: "translateX(-50%) " },
        }
      }
    },
  },
  plugins: [],
}

