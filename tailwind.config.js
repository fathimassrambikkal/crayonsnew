/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@bit/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kids: ['"Baloo 2"', 'cursive'],
        inter: ["Inter", "sans-serif"],
  
      },
      colors: {
        coral: "#fe7162",
        primary: '#fff7f5',
      },
    },
  },
  plugins: [],
}