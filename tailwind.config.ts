const animate = require("tailwindcss-animate");

import type { Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...theme.fontFamily.sans],
        mabryPro: ["var(--font-mabry-pro)", ...theme.fontFamily.sans],
      },
      backgroundImage: {
        auth: "linear-gradient( rgba(0, 0, 0, 0.8) 100%, rgba(0, 0, 0, 0.8)100%), url(/img/auth-bg.webp)",
        "iphone-banner": "url(img/banner/iphone.png)",
        aboutVideo: "url(/img/video-bg.png)",
        "profile-cover": "url(/img/profile-cover.png)",
      },
      boxShadow: {
        navMenu: "0px 0px 16px 2px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        primary: "#0F5132",
        secondary: "#E3B341",
        ink: "#0B1220",
        success: "#06813E",
        danger: "#ff4d4f",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    animate,
  ],
};
export default config;
