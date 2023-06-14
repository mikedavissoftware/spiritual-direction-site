/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9a3412",
          "secondary": "#ca8a04",
          "accent": "#f87171",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#22d3ee",  
          "success": "#16a34a", 
          "warning": "#f97316",
          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

