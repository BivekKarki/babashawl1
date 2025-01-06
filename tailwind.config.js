/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '0 .5rem 1rem rgba(0, 0, 0, .15)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        KPrimary: "#CD9933",
        KSecondary: "#2F4858",
      },
    },
  },
  plugins: [],
}

