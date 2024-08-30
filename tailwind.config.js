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
        background: '#FFFDF6',
        'font-main': '#000000',
        'font-context': '#515151',
      },
      fontFamily:  {
        inter: ['inter', 'serif'],
      },
      display: ['lt-md'],
    },
    screens: {
      'lt-md': {'max': '767px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

