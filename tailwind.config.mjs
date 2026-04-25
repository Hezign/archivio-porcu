/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette patrimoniale — pierre, terre, rouge sombre (drapeau sarde)
        pierre: {
          50: '#f7f4ee',
          100: '#ede6d6',
          200: '#d9ccad',
          300: '#c0ae80',
          400: '#a8915c',
          500: '#8c7646',
          600: '#6e5c37',
          700: '#55472c',
          800: '#3d3322',
          900: '#2a2317',
          950: '#1a150d',
        },
        sardaigne: {
          // Rouge croix de Saint-Georges / drapeau Quattro Mori
          rouge: '#9a1b1f',
          'rouge-sombre': '#6b1215',
          encre: '#1f1a14',
          parchemin: '#f1e8d4',
          sepia: '#8a6a3e',
          mer: '#2d4a5c',
        },
      },
      fontFamily: {
        // Display éditorial patrimonial + corps raffiné
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
