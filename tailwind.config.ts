import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    "./layout/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.70rem', { lineHeight: '1.10rem', fontWeight: '400', }],
      sm: ['0.75rem', { lineHeight: '1.15rem', fontWeight: '400' }],
      md: ['0.80rem', { lineHeight: '1.25rem', fontWeight: '500' }],
      lg: ['1.06rem', { lineHeight: '1.48rem', fontWeight: '500' }],
      xl: ['1.27rem', { lineHeight: '1.70rem', fontWeight: '600' }],
      '2xl': ['1.59rem', { lineHeight: '1.91rem', fontWeight: '600' }],
      '3xl': ['1.91rem', { lineHeight: '2.33rem', fontWeight: '700' }],
      '4xl': ['2.33rem', { lineHeight: '2.76rem', fontWeight: '700' }],
      '5xl': ['3.4rem', { lineHeight: '4.40rem', fontWeight: '800' }],
    },

    screens: {
      "2xl": { max: "1960px" },
      xl: { max: "1566px" },
      lg: { max: "1324px" },
      md: { max: "915px" },
      sm: { max: "640px" },
      xsm: { max: "460px" },
    },

    extend: {
      spacing: {
        1: "0.25em",
        1.5: "0.375em",
        2: "0.5em",
        2.5: "0.625em",
        3: "0.75em",
        3.5: "0.875em",
        4: "1em",
        5: "1.25em",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
      },
      colors: {
        transparent: "transparent",
        black: "#131517",
        white: "#B0C4D8",
        brightwhite: "#CDD9E5",
        gray: "#6a7891",
        lightgray: "#8092b2",
        shaded: "#485366",
        blue: "#3780D6",
      },
    },

  },
  plugins: [],
}
export default config
