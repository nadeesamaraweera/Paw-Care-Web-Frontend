import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'color-change': 'colorChange 3s infinite', // Define the animation
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#024573' }, // Initial color
          '50%': { color: '#00eded' }, // Midway color
          '100%': { color: '#0b22b5' }, // Final color
        },
    },
  },
  darkMode: "class",
  plugins: [nextui()],

  },
}