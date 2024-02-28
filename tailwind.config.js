/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pp-supply-mono-ultralight': ['PP Supply Mono UltraLight', 'sans-serif'],
        'pp-supply-mono-light': ['PP Supply Mono Light', 'sans-serif'],
        'pp-supply-mono': ['PP Supply Mono Regular', 'sans-serif'],
        'pp-supply-mono-medium': ['PP Supply Mono Medium', 'sans-serif'],
        'pp-supply-mono-bold': ['PP Supply Mono Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
