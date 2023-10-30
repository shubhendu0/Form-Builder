/** @type {import('tailwindcss).Config} */

module.exports = {
  darkMode: 'class',
  content:["./src/**/*.{js,jsx,ts,tsx}"],
  // purge: [
  //   './src/**/*.js',
  //   './public/index.html',
  // ],
  theme: {
    extend: {
      // Add custom styles or extend the default theme here
      colors: {
        dark: '#1a202c',
        // Add any other custom colors you want to use for dark mode
      },
    },
    fontSize: {
      'xs': '0.75rem',    // Extra-small text size
      'sm': '0.875rem',   // Small text size
      'base': '1rem',     // Base text size (default)
      'lg': '1.125rem',   // Large text size
      'xl': '1.25rem',    // Extra-large text size
      '2xl': '1.5rem',    // 2 extra-large text size
      '3xl': '1.75rem',    // 3 extra-large text size
      // Add more custom font sizes here if needed
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
  