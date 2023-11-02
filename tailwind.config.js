import colors from './src/theme/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    // TODO 이 외에 공통적인 요소 추가
  },
  plugins: [],
}
