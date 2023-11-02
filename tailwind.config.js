/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: '#FF7400',
        dark: '#001833',
        status: {
          s: '#17BD8D',
          f: '#FF4E3E',
          w: '#FFA114'
        },
        txt: '#FFF7F3',
        bg: '#ECECEC'
      }
    },
  },
  plugins: [],
}