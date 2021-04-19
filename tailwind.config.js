module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      'giant': '10rem',
      'exl' : '8em'
    },
    height: {
      xhigh: "140vh"
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pool': "url('../../Images/hero-pool.png')",
        'purple': "url('../../Images/purpleHero.jpg')",
        'redHero': "url('../../Images/redHero.jpg')"
      }),
      width: {
        '9/6': "150%"
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20'
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20'
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}