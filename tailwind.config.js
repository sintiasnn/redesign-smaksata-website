/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0f9',
          100: '#cce0f3',
          200: '#99c2e6',
          300: '#66a3d9',
          400: '#3385cc',
          500: '#0066c0',
          600: '#0A3D62',
          700: '#082d4a',
          800: '#061e32',
          900: '#030f19',
        },
        secondary: {
          50: '#eafaf1',
          100: '#d5f5e3',
          200: '#abebc6',
          300: '#82e0aa',
          400: '#58d68d',
          500: '#2ECC71',
          600: '#25a35a',
          700: '#1c7a44',
          800: '#13522d',
          900: '#092916',
        },
        accent: {
          50: '#fef9e7',
          100: '#fcf3cf',
          200: '#f9e79f',
          300: '#f7da6f',
          400: '#f4ce3f',
          500: '#F1C40F',
          600: '#c19d0c',
          700: '#917609',
          800: '#604e06',
          900: '#302703',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'even': '0 0 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}