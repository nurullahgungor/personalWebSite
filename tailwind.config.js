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
      'tilt-neon': ['"Tilt Neon"', 'sans-serif'],
      'libre-barcode' : ["'Libre Barcode 128 Text'", 'system-ui']
    },
    fontWeight: {
      bold: '700',
      normal: '400',
    }

  },
  plugins: [],
}