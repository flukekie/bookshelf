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
          "100": "#dfe",
          "200": "#bfc",
          "300": "#7f9",
          "400": "#4e6",
          "500": "#2d4",
          "600": "#0c3",
          "700": "#0a2",
          "800": "#082",
          "900": "#061",
          "000": "#040",
        },
      },
      fontFamily: {
        sans: ["Bai Jamjuree", ...defaultTheme.fontFamily.sans],
        serif: ["Maitree", ...defaultTheme.fontFamily.serif],
        mono: ["Fira Code", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.js'],
  },
  variants: {},
  plugins: [],
}
