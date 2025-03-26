import type {Config} from 'tailwindcss';

import tailwindScrollbarHide from 'tailwind-scrollbar-hide';
import tailwindAnimate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--tgui--bg_color)',
        'root-background': 'var(--tgui--secondary_bg_color)',
        foreground: 'var(--tgui--text_color)',
        card: {
          DEFAULT: 'var(--tgui--card_bg_color)',
          foreground: 'var(--tgui--text_color)'
        },
        popover: {
          DEFAULT: 'var(--tgui--section_bg_color)',
          foreground: 'var(--tgui--text_color)'
        },
        primary: {
          DEFAULT: 'var(--tgui--button_color)',
          foreground: 'var(--tgui--button_text_color)'
        },
        secondary: {
          DEFAULT: 'var(--tgui--secondary_fill)',
          foreground: 'var(--tgui--text_color)'
        },
        muted: {
          DEFAULT: 'var(--tgui--hint_color)',
          foreground: 'var(--tgui--secondary_hint_color)'
        },
        accent: {
          DEFAULT: 'var(--tgui--accent_text_color)',
          foreground: 'var(--tgui--text_color)'
        },
        destructive: {
          DEFAULT: 'var(--tgui--destructive_background)',
          foreground: 'var(--tgui--destructive_text_color)'
        },
        confirm: {
          DEFAULT: 'var(--tgui--green)',
          foreground: 'var(--tgui--white)'
        },
        border: 'var(--tgui--divider)',
        input: 'var(--tgui--outline)',
        ring: {
          '80': 'var(--tgui--primary_code_highlight)',
          '90': 'var(--tgui--secondary_code_highlight)',
          DEFAULT: 'var(--tgui--tertiary_code_highlight)'
        },
        gray: {
          '100': 'var(--tgui--tertiary_bg_color)',
          '200': 'var(--tgui--quartenary_bg_color)',
          '300': 'var(--tgui--secondary_hint_color)',
          '400': 'var(--tgui--hint_color)',
          '500': 'var(--tgui--subtitle_text_color)',
          '600': 'var(--tgui--text_color)',
          DEFAULT: 'var(--tgui--black)'
        },
        chart: {
          '1': 'var(--tgui--primary_code_highlight)',
          '2': 'var(--tgui--secondary_code_highlight)',
          '3': 'var(--tgui--tertiary_code_highlight)',
          '4': 'var(--tgui--toast_accent_color)',
          '5': 'var(--tgui--surface_dark)'
        }
      }
    }
  },
  plugins: [tailwindAnimate, tailwindScrollbarHide]
} satisfies Config;
