/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'gray-100': '#f8f9fc',
        'gray-200': '#f1f3f9',
        'gray-300': '#dee3ed',
        'gray-400': '#c2c9d6',
        'gray-500': '#8f96a3',
        'gray-600': '#5e636e',
        'gray-700': '#2f3237',
        'gray-800': '#1d1e20',
        'gray-900': '#111213',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'bold': 700,
        'semibold': 600,
        'medium':500,
        'regular':400,
      },
      backgroundColor: {
        'gray-100': '#f8f9fc',
        'gray-200': '#f1f3f9',
        'gray-300': '#dee3ed',
        'gray-400': '#c2c9d6',
        'gray-500': '#8f96a3',
        'gray-600': '#5e636e',
        'gray-700': '#2f3237',
        'gray-800': '#1d1e20',
        'gray-900': '#111213',
      }
    },
  },
  plugins: [],
} 