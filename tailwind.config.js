/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'deep-purple': {
          50: '#f8f0fb',
          100: '#f1e1f7',
          200: '#e3c7ee',
          300: '#d1a3e1',
          400: '#b873d0',
          500: '#9c4ab9',
          600: '#7e289e',
          700: '#5e0f7e',
          800: '#42045a',
          900: '#290138',
        },
        'black': '#000000',
        'white': '#FFFFFF',
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#9ecefc',
          400: '#7dd3fc',
          500: '#7aa9fa',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      backgroundColor: {
        'dark': '#000000', // Default background color for dark mode
      },
      textColor: {
        'light': '#FFFFFF',  // Default text color for light mode
      },
    },
  },
  plugins: [],
}
