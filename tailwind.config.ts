import type { Config } from 'tailwindcss';
import { themes } from './lib/themes';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          muted: 'var(--color-primary-muted)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          muted: 'var(--color-secondary-muted)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          secondary: 'var(--color-background-secondary)',
          muted: 'var(--color-background-muted)',
        },
      },
      textColor: {
        primary: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        dark: 'var(--color-text-dark)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
        hover: 'var(--color-border-hover)',
        muted: 'var(--color-border-muted)',
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
