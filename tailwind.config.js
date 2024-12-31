/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['"Jost"', 'sans-sefif'],
        satisfy: ['"Satisfy"', 'cursive'],
        caveat: ['"Caveat"', 'serif'],
        playwrite: ['"Playwrite MX Guides"', 'cursive']
      },
      fontSize: {
        '90px': '90px',
        '13px': '13px',
        '18px': '18px',
        '20px': '20px'
      },
      borderRadius: {
        '56px': '56px'
      },

      colors: {
        'dodge-blue': 'var(--color-text-special)',
        'gray-15': 'var(--color-text-one)',
        'electric-blue': 'var(--color-text-light)',
        'dark-bg': 'var(--color-dark-bg)',
        'dark-text': 'var(--color-dark-text)',
        'bg-note': 'var(--color-bg-note)',
        'line-dark': 'var(--color-border-dark)',
        'dark-gray': 'var(--color-dark-second)',
        'light-gray': 'var(--color-gray-light)',
        'normal-gray': 'var(--color-dark-gray-2)',
        'transparent-light': 'var(--color-text-bg)',
        'transparent-dark': 'var(--color-text-bg-dark)',
        'bg-loading': 'var(--color-bg-loading)'
      },
      height: {
        '2px': '2px'
      },
      width: {
        '2px': '2px'
      },
      spacing: {
        '5%': '5%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '26%': '26%',
        '30px': '30px'
      },
      keyframes: {
        spinIn: {
          '0%': {
            transform: 'translateZ(0) translateY(-100px)'
          },
          '50%': {
            transform: 'translateZ(0) translateY(0px)'
          }
        },
        pulse: {
          '0%': {
            'box-shadow': '0 0 0 0 var(--color-text-special)'
          },
          '100%': {
            'box-shadow': '0 0 0 8px transparent'
          }
        },
        heightLine: {
          '0%': {
            height: '0px',
            width: '2px'
          },
          '100%': {
            height: '50%',
            width: '0px'
          }
        }
      },
      animation: {
        rotate: 'spin 10s linear infinite',
        spinIn: 'spinIn 1.5s cubic-bezier(0.3, 0, 0.3, 1) 0s forwards',
        increaseHeight: 'heightLine 0.8s linear forwards'
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
        width: 'width'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7'
      },
      skew: {
        10: '10deg'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
