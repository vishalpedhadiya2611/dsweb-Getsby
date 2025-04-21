/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    "./gatsby-browser.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
