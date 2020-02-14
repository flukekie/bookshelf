const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      colors: {
        malachite: {
          "50": "#e7f9e8",
          "100": "#c6f0c6",
          "200": "#a0e7a2",
          "300": "#73de79",
          "400": "#4bd558",
          "500": "#00cc33",
          "600": "#00bc29",
          "700": "#00a91a",
          "800": "#009705",
          "900": "#007800",
        },
      },
      fontFamily: {
        body: ["Bai Jamjuree", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
