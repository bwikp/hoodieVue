/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,vue,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'card-background': '#eff0f3',
        'card-background-light': '#fffffe',
        'button-background': '#ff8e3c',
        'button-text': '#0d0d0d',
        'paragraph-black': '#2a2a2a',
        'tertiary-contrast': '#d9376e'
      },
    },
  },
  plugins: [],
}
