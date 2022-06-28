module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mu-green': '#52B69A',
        'mu-blue': '#1A759F',
      },
      fontFamily: {
        sans: ['Mukta Vaani', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      maxHeight: {
        128: '32rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
}
