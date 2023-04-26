module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)',
          },
        },
        'slide-out': {
          '0%': {
            opacity: 1,
            transform: 'translateX(0%)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
   plugins: [],
 }