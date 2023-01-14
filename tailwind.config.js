/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
        softdark: '#1e293b',
        purple: '#e879f9',
        glowindark: '#f1f5f9',
        white5: '#94a3b8',
      },
    },
  },
  plugins: [],
};
