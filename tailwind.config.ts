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
    // -- [ Font sizes ] --------------------------------
    fontSize: {
      xs: ['0.75rem', { // Slightly increased for better legibility
        lineHeight: '1.15rem',
        letterSpacing: '0.006em',
        fontWeight: '400',
      }],
      sm: ['0.920rem', { // Adjusted for smoother transition
        lineHeight: '1.30rem',
        letterSpacing: '0.007em',
        fontWeight: '400',
      }],
      md: ['1rem', { // Standard size for medium, making scaling more gradual
        lineHeight: '1.50rem',
        letterSpacing: '0.008em',
        fontWeight: '500',
      }],
      lg: ['1.125rem', { // Less drastic increase
        lineHeight: '1.75rem',
        letterSpacing: '0.01em',
        fontWeight: '500'
      }],
      xl: ['1.9rem', { // Incremental increase for better scaling
        lineHeight: '2.4rem',
        letterSpacing: '0.014em',
        fontWeight: '700'
      }],
      '2xl': ['2.0rem', { // Incremental increase for better scaling
        lineHeight: '2.6rem',
        letterSpacing: '0.014em',
        fontWeight: '700'
      }],
      '3xl': ['2.30rem', { // Adjusted for gradual scaling
        lineHeight: '3.0rem',
        letterSpacing: '0.016em',
        fontWeight: '700',
      }],
      '4xl': ['2.50rem', { // Reduced size for smoother transition
        lineHeight: '3.40rem',
        letterSpacing: '0.018em',
        fontWeight: '700'
      }],
      '5xl': ['3.00rem', { // Smallest size in the highest range for smoother scaling
        lineHeight: '3.80rem',
        letterSpacing: '0.02em',
        fontWeight: '800'
      }],
    },
    // -- [ Breakpoints ] --------------------------------
    screens: {
      xsm: { max: "575px" },    // Extra small devices (portrait phones, less than 576px)
      sm: { max: "767px" },    // Small devices (landscape phones, 576px and up)
      md: { max: "991px" },    // Medium devices (tablets, 768px and up)
      lg: { max: "1199px" },    // Large devices (desktops, 992px and up)
      xl: { max: "1599px" },    // Extra large devices (large desktops, 1200px and up)
      "2xl": { min: "1600px" },    // 2x large devices (larger desktops, 1600px and up)
    },
    extend: {
      // -- [ Colors ] --------------------------------
      colors: {
        transparent: "transparent",
        black: "#06101a",
        white: "#B0C4D8",
        brightwhite: "#CDD9E5",
        gray: "#617089",
        lightgray: "#8092b2",
        shaded: "#485366",
        blue: "#3780D6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        headers: "hsl(var(--header-foreground))",
        midnight: {
          "100": "#e0ebf4",
          "200": "#c1e0ee",
          "300": "#8fb9d1",
          "400": "#749dc6",
          "500": "#4d7fb0",
          "600": "#345784",
          "700": "#1f354e",
          "800": "#0d1a26",
          "900": "#06101a",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
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
