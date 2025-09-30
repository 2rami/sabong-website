/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sabong-purple': '#9B59B6',
        'sabong-pink': '#FFC0CB',
        'sabong-blue': '#87CEEB',
        'sabong-beige': '#F5E6D3',
        'sabong-brown': '#8B4513',
      },
      fontFamily: {
        'display': ['Back to Black Demo', 'cursive'],
        'pretendard': ['Pretendard', 'sans-serif'],
        'omni': ['OmniGothic', 'Noto Sans KR', 'sans-serif'],
        'back-to-black': ['Back to Black Demo', 'cursive'],
      }
    },
  },
  plugins: [],
}