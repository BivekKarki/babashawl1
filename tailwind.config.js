/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        KPrimary: "#CD9933",
        KSecondary: "#2F4858",
      },
    },
  },
  plugins: [],
}

