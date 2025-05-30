/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: 'hsl(var(--primary))',
          'primary-foreground': 'hsl(var(--primary-foreground))',
          secondary: 'hsl(var(--secondary))',
          'secondary-foreground': 'hsl(var(--secondary-foreground))',
          accent: 'hsl(var(--accent))',
          'accent-foreground': 'hsl(var(--accent-foreground))',
          input: 'hsl(var(--input))',
          card: 'hsl(var(--card))',
          'card-foreground': 'hsl(var(--card-foreground))',
          destructive: 'hsl(var(--destructive))',
          'destructive-foreground': 'hsl(var(--destructive-foreground))',
          ring: 'hsl(var(--ring))',
          'textOnAccent-primary': 'hsl(var(--textOnAccent-primary))',
        },
        backgroundColor: {
          'accent-50': 'rgb(var(--accent-rgb-50))',
          'accent-100': 'rgb(var(--accent-rgb-100))',
          'accent-200': 'rgb(var(--accent-rgb-200))',
          'accent-300': 'rgb(var(--accent-rgb-300))',
          'accent-400': 'rgb(var(--accent-rgb-400))',
          'accent-500': 'rgb(var(--accent-rgb-500))',
          'accent-600': 'rgb(var(--accent-rgb-600))',
          'accent-700': 'rgb(var(--accent-rgb-700))',
          'accent-800': 'rgb(var(--accent-rgb-800))',
          'accent-900': 'rgb(var(--accent-rgb-900))',
          'accent-950': 'rgb(var(--accent-rgb-950))',
          'grayscale-rgb-50': 'rgb(var(--grayscale-rgb-50))',
          'grayscale-rgb-100': 'rgb(var(--grayscale-rgb-100))',
          'grayscale-rgb-200': 'rgb(var(--grayscale-rgb-200))',
          'grayscale-rgb-300': 'rgb(var(--grayscale-rgb-300))',
          'grayscale-rgb-400': 'rgb(var(--grayscale-rgb-400))',
          'grayscale-rgb-500': 'rgb(var(--grayscale-rgb-500))',
          'grayscale-rgb-600': 'rgb(var(--grayscale-rgb-600))',
          'grayscale-rgb-700': 'rgb(var(--grayscale-rgb-700))',
          'grayscale-rgb-800': 'rgb(var(--grayscale-rgb-800))',
          'grayscale-rgb-900': 'rgb(var(--grayscale-rgb-900))',
          'grayscale-rgb-950': 'rgb(var(--grayscale-rgb-950))',
          'surface-primary': 'rgb(var(--surface-primary))',
          'dark-surface-primary': 'rgb(9,9,11)',
          'surface-secondary': 'rgb(var(--surface-secondary))',
          'surface-tertiary': 'rgb(var(--surface-tertiary))',
          'dark-surface-tertiary': 'rgb(var(--surface-tertiary))',
        },
        textColor: {
          primary: 'hsl(var(--primary))',
          foreground: 'hsl(var(--foreground))',
          'text-primary': 'rgb(var(--text-primary))',
          'dark-text-primary': 'rgb(var(--text-primary))',
          'text-secondary': 'rgb(var(--text-secondary))',
          'text-tertiary': 'rgb(var(--text-tertiary))',
          'dark-text-tertiary': 'rgb(var(--text-tertiary))',
        },
        borderColor: {
          'dark-border': 'rgb(var(--border))',
          border: 'rgb(var(--border))',
        },
        borderRadius: {
          DEFAULT: 'var(--radius)',
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  