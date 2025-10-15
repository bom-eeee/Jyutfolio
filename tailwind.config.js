/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','Noto Sans KR', 'system-ui', 'sans-serif']
      },
      colors: {
        dreamy: {  // Dreamy Pastel
          50:'#F7F8FF',100:'#EEF1FF',200:'#E3E7FE',300:'#CDD6FE',
          400:'#B0BFFC',500:'#92A8F7',600:'#738AE6',700:'#5D71BF',
          800:'#4B5A99',900:'#3F4B7E'
        },
        wood: {    // Warm Wood-tone
          50:'#F9F6F3',100:'#F2ECE6',200:'#E7DACE',300:'#D9C2AD',
          400:'#C7A584',500:'#B88D64',600:'#996F47',700:'#7B5738',
          800:'#5F432C',900:'#4E3725'
        }
      }
    }
  },
  plugins: []
}
