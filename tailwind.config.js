/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato']
      },
      colors: {
        canaryYellow: '#FFA718',
        purple: '#AA00AD',
        fuchsia: '#670069',
        lightPink: '#E1B4E2',
        grayishPurple: '#C8ABC9',
        veryLightPurple: '#FFF5FF',
        darkGray: '#C1C1C1',
        lightGray: '#FAFAFA'
      }
    }
  },
  plugins: []
}
