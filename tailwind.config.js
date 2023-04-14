/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html"
  ],
  theme: {
    colors: {
      'bleu': '#12C698',
      'vert': '#069205',
      'blanc': '#FFFFFF',
      'noire': '#000000',
    },
    extend: {},
    animation: {
      fadeIn: 'fadeIn 2s ease-in forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
    },
  }
}

