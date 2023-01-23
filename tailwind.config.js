module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        wpu: '#bada55'
      },
      spacing: {
        '13': '3.25rem'
      },
      fontFamily: {
        inter: ['Inter']
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        goyang: 'goyang 1s ease-in-out infinite',
      },
      keyframes: {
        goyang: {
          '0%, 100%': {
            transform: 'rotate(-5deg)'
          },
          '50%': {
            transform: 'rotate(5deg)'
          },
        },
      },
    },
  },
  plugins: [],
}