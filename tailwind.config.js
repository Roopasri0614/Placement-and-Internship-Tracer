/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",
        background: "#ffffff",
        foreground: "#000000",

        primary: "#6366f1",
        secondary: "#f3f4f6",

        ring: "#6366f1",   // ⭐ VERY IMPORTANT
      },
    },
  },
  plugins: [],
};