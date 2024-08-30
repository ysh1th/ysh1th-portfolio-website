/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class', 
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        background: 'rgba(255 253 246)',
        'font-main': 'rgba(0 0 0)',
        'font-context': 'rgba(81 81 81)',
      },
      fontFamily:  {
        inter: ['inter', 'serif'],
      },
      display: ['lt-md'],
    },
    screens: {
      'lt-md': {'max': '767px'}
    }
  },
  plugins: [],
}

