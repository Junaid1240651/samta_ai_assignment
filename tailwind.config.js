/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/App/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        exsm: "300px",
      },
    },
  },
  plugins: [],
};
