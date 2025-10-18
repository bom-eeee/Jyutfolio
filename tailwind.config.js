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
        ,
        // 사용자 지정: 파스텔 보라 팔레트
        violet: {
          50: '#fbf7ff', 100: '#f6eeff', 200: '#ead8ff', 300: '#d6bfff',
          400: '#c49bff', 500: '#b37aff', 600: '#9760e6', 700: '#7246bf',
          800: '#4f2f99', 900: '#2e1a66'
        }
        ,
        // 사용자 지정 : 파스텔 옐로우 팔레트
        yellow: {
          50:'#FFFDF2', 100:'#FFF8D8', 200:'#FFEFAD', 300:'#ffd271ff',
          400:'#FFD83A', 500:'#ffc526ff', 600:'#ffc505ff', 700:'#eeba11ff',
          800:'#b38c00ff',900:'#795200ff'}
      }
    }
  },
  plugins: []
}
