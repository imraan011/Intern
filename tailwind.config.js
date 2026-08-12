/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#003fdd",
        "primary-container": "#2b59ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#ecedff",
        "primary-fixed": "#dde1ff",
        "secondary": "#3d5f91",
        "secondary-container": "#a3c5fd",
        "secondary-fixed": "#d5e3ff",
        "on-secondary-fixed": "#001c3b",
        "tertiary": "#4c545f",
        "background": "#f8f9fa",
        "surface": "#f8f9fa",
        "surface-container": "#edeeef",
        "surface-container-low": "#f3f4f5",
        "surface-container-high": "#e7e8e9",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#191c1d",
        "on-surface-variant": "#434656",
        "outline": "#747688",
        "outline-variant": "#c4c5d9"
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      spacing: {
        'container-max': '1280px',
        'section-gap': '120px',
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        'gutter': '24px'
      }
    },
  },
  plugins: [],
}
