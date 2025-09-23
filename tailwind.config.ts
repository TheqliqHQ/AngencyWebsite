import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand)',
        ink: 'var(--ink)',
        slateink: 'var(--slate)',
        cloud: 'var(--cloud)',
        paper: 'var(--paper)',
        accent: 'var(--accent)',
        warn: 'var(--warn)'
      },
      boxShadow: {
        pill: '0 4px 0 0 rgba(0,0,0,0.18), 0 12px 32px rgba(0,0,0,0.18)'
      },
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Inter','Roboto','Arial','Noto Sans','sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
