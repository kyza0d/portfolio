import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
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
      colors: {
        transparent: "transparent",
        black: "#131517",
        white: "#B0C4D8",
        brightwhite: "#CDD9E5",
        gray: "#6a7891",
        lightgray: "#8092b2",
        shaded: "#485366",
        blue: "#3780D6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
