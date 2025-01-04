/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx, js}",
    "./src/*.jsx",
    "./index.html"
  ],
  theme: {
    fontFamily:{
      'ubuntu-mono': ['Ubuntu Mono', 'monospace'], 
    },
    extend: {},
  },
  plugins: [],
}

