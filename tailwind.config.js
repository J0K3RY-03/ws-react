/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '576px',
      's': '1024px',
      'm': '1280px',
      'l': '1536px',
      'no-hover': {'raw': '(hover: hover) and (pointer: fine)'}
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        white: '#e8e8e8',
        grey: '#9f9f9f',
        black: '#111111'
      },
    },
  },
  plugins: [],
};
