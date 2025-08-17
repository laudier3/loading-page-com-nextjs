/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // app folder
    './pages/**/*.{js,ts,jsx,tsx}', // caso tenha pages (opcional)
    './components/**/*.{js,ts,jsx,tsx}', // se usar componentes externos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
