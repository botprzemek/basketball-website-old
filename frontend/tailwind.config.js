/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': 'rgb(242, 53, 53)',
        'secd': 'rgb(255, 255, 255)',
        'bkgd': 'rgb(29, 29, 29)',
      },
      backgroundSize: {
        full: '100%, 100%',
      },
    },
  },
}
