/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/img/images/desktop/image-header.jpg')",
        'graphic': "url('/src/assets/img/images/desktop/image-graphic-design.jpg')",
        'photography': "url('/src/assets/img/images/desktop/image-photography.jpg')",
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}
