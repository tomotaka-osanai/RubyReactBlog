/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/javascript/entrypoints/**/*.{js,jsx,ts,tsx}", // Reactのファイルパス
    "./app/views/**/*.html.erb", // 必要ならRailsのviewも
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
