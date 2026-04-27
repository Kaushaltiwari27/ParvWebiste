import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'var(--primary-dark)',
        'primary-navy': 'var(--primary-navy)',
        'accent-blue': 'var(--accent-blue)',
        'accent-electric': 'var(--accent-electric)',
        'text-muted': 'var(--text-muted)',
        'card-bg': 'var(--card-bg)',
        'border-color': 'var(--border-color)',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        general: ['"General Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 10px rgba(78, 163, 224, 0.1)',
        'glow-strong': '0 0 20px rgba(78, 163, 224, 0.2)',
        '3d': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
