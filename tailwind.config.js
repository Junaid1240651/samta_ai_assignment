/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./components/**/*.{js,ts,jsx,tsx}"],
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
