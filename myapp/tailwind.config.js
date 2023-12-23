/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mustard: '#e8c547',
        darkPurple: '#30323d',
        litePurple: '#4d5061',
        liteBlue: '#5c80bc'
      }
    },
  },
  plugins: [],
}
