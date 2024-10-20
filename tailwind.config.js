/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#080407',
        background: '#ffcdf3',
        primary: '#ff7ff7',
        secondary: '#DE7E5D',
        accent: '#434343',
      }
    },
  },
  plugins: [],
}