/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#618D2A',
          600: '#366A1D',
          700: '#2A5210',
        },
      },
    },
  },
  plugins: [],
}
