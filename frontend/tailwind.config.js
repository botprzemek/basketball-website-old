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
        'main': 'rgb(235, 64, 52)',
        'secd': 'rgb(255, 255, 255)',
        'bkgd': 'rgb(29, 29, 29)',
      },
      backgroundSize: {
        full: '400%, 400%',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        gradient: 'gradient 30s ease infinite',
      },
    },
  },
}
