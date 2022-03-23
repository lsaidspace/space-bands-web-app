const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jelo-green': 'var(--jelo-green)',
        'jelo-warning': 'var(--jelo-warning)',
        'jelo-alert': 'var(--jelo-alert)',
        'jelo-accent': colors.indigo,
      }
    },
  },
  plugins: [],
};
