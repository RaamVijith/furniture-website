/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fontFamily: {
          'brown-donkey': ['Qwitcher Grypen', 'cursive'],
          'baletic': ['Marck Script', 'cursive'],
          'maskan': ['Qwitcher Grypen', 'cursive'],
          'saltwater': ['Pacifico', 'cursive'],
          'amishar': ['Lora', 'serif'],
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
}

