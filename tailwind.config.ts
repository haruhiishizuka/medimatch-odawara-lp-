import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'serenity-blue': {
          DEFAULT: '#92C5F7',
          light: '#B8D9FA',
          dark: '#6AAFED',
        },
        'powder-pink': {
          DEFAULT: '#F7C5D0',
          light: '#FADCE3',
          dark: '#F4A9BA',
        },
        'shiny-gold': {
          DEFAULT: '#D4AF37',
          light: '#E5C96A',
          dark: '#B8941F',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        handwritten: ['var(--font-handwritten)', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(146, 197, 247, 0.15)',
        'soft-pink': '0 4px 20px rgba(247, 197, 208, 0.15)',
        'gold-glow': '0 4px 30px rgba(212, 175, 55, 0.4)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
