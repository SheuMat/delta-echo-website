import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3FA',
          100: '#D2E0F2',
          200: '#A5C1E5',
          300: '#78A2D8',
          400: '#4B83CB',
          500: '#2E6ABC',
          600: '#1B3C6B',
          700: '#152F55',
          800: '#0F2240',
          900: '#09152A',
          950: '#040C14',
        },
        teal: {
          50: '#F0FAF8',
          100: '#D0EFEA',
          200: '#A1DFD5',
          300: '#72CFBF',
          400: '#43BFAA',
          500: '#3D8B7A',
          600: '#2D6B5C',
          700: '#1E4B3F',
          800: '#0F2B22',
          900: '#000B07',
        },
        gold: {
          50: '#FEF9EE',
          100: '#FDEECF',
          200: '#FBD99F',
          300: '#F8C46F',
          400: '#F6AF3F',
          500: '#C9973E',
          600: '#A07930',
          700: '#785B24',
          800: '#503D18',
          900: '#281E0C',
        },
        cream: {
          50: '#FEFDFB',
          DEFAULT: '#FAF8F5',
          100: '#F5F1EB',
          200: '#EBE5DB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #09152A 0%, #1B3C6B 45%, #2D6B5C 100%)',
        'section-gradient': 'linear-gradient(180deg, #FAF8F5 0%, #F0FAF8 100%)',
      },
    },
  },
  plugins: [],
}

export default config
