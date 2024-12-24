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
        background: '#FFFCEE',
        'font-logo': '#FFB700',
        'font-main': '#000000',
        'font-context': '#515151',
        nav: 'F5F2E7'
      },
      fontFamily:  {
        inter: ['Inter', 'serif'],
      },
      fontSize: {
        '80px': '15px',
      },
      letterSpacing: {
        '1px': '1px',
      },
      lineHeight: {
        normal: 'normal',
      },
      padding: {
        '1.5': '0.375rem',
        '96': '96px',
      },
      display: ['lt-md'],
    },
    screens: {
      // 'lt-md': {'max': '767px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

