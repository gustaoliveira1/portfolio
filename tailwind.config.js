/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8FFE5',
        secondary: '#F25757',
        tertiary: '#4E4187',
        quaternary: '#7798AB',
      },
      screens: {
        'xm': '425px', 
      },
    },
  },
  plugins: [],
}
