import type {Config} from 'tailwindcss';

import tailwindScrollbarHide from 'tailwind-scrollbar-hide';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        'root-background': 'hsl(var(--root-background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',

          foreground: 'hsl(var(--destructive-foreground))'
        },
        confirm: {
          DEFAULT: 'hsl(var(--confirm))',
          foreground: 'hsl(var(--confirm-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: {
          '80': 'hsl(var(--ring-80))',
          '90': 'hsl(var(--ring-90))',
          DEFAULT: 'hsl(var(--ring))'
        },
        gray: {
          '100': 'hsl(var(--gray-100))',
          '200': 'hsl(var(--gray-200))',
          '300': 'hsl(var(--gray-300))',
          '400': 'hsl(var(--gray-400))',
          '500': 'hsl(var(--gray-500))',
          '600': 'hsl(var(--gray-600))',
          DEFAULT: 'hsl(var(--gray))'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [tailwindAnimate, tailwindScrollbarHide]
} satisfies Config;
