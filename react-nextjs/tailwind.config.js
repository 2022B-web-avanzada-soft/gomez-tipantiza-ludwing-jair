/** @type {import('tailwindcss').Config} */
const KonstaConfig= require('konsta/config');
module.exports = KonstaConfig({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
)