/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      'fuschia': '#F4207B',
      'white': '#fff',
      'purple': '#31297D',
      'lightpink': '#C92C93',
      'gray': '#CACACA',
      'black': '#000',
      'pink': '#FF3A7A'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

