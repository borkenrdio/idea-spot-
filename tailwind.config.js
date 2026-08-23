/** @type {import('tailwindcss').Config} */
module.exports = {
  // 各ページ・共通パーツ・JSから注入されるクラスを走査対象にする
  content: [
    './*.html',
    './*/*.html',
    './parts/*.html',
    './*.js',
  ],
  theme: {
    extend: {
      colors: {
        green: { DEFAULT: '#80B020', light: '#A8C800', dark: '#5A8010' },
        // CSRページの講座別ブランドカラー
        robot:  { DEFAULT: '#F39800', 50: '#FFF5E6' },
        puzzle: { DEFAULT: '#486C9F', 50: '#EEF2F8' },
      },
      fontFamily: {
        sans:  ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
        serif: ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
        en:    ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
