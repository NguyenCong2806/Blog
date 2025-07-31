// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{ejs,hbs,pug}", // Đã thay đổi thành ./src/views/
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}