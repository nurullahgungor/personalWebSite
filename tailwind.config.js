/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'audiowide': ['sans-serif', 'audiowide'],
      'tilt-neon': ["Tilt Neon", 'sans-serif']
    },
    fontWeight: {
      bold: '700',
    }

  },
  plugins: [],
}