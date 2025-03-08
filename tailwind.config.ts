// import { carousel } from '@/public/carousel.png';
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/**/*.{tsx,css}",
  ],
  theme: {
    fontFamily: {
      cairo_new: ["Cairo"],
    },
    extend: {
      backgroundImage: {
        bg_lg: "url('/cashaicamswide.webp')",
        bg_sm: "url('/mycashaismall.webp')",
        mycash_large: "url('/cashaicamswide.webp')",
        aboutus: "url('/hero_pages/aboutmycash.webp')",
        ai_solutions: "url('/hero_pages/ai_solutions.webp')",
        payment_solutions: "url('/hero_pages/payment_solutions.webp')",
        sales_solutions: "url('/hero_pages/sales_solutions.webp')",
        video_gif: "url('/video_bg.gif')",
        video_mp4: "url('/video.mp4')",
        articles_bg: "url('/articles_bg.webp')",
      },
      screens: {
        xxs: "320px",
        xs: "450px",
      },

      lineHeight: {
        "40": "100px",
      },
      spacing: {
        "85": "23rem",
        "105": "6.563rem",
        "90": "4.5rem",
      },
      fontSize: {
        "2.5xs": "0.783rem",
      },
      colors: {
        green: "#6EC531",
        primary: {
          blue: "#232773",
          green: "#6EC531",
          grey: {
            brands: "#F9F9F9",
            grey: "#393939",
            softgrey: "#f5f6ff",
            carousel: "#F3F4F6",
            softer: "#fafafa",
            arrow: "#D9D9D9",
            form: "#979797",
            package: "#636363",
          },

          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        grident: {
          darkblue: "#00084D",
          lightblue: "#1D63ED",
        },
        accent: {
          "50": "#FAF5F0",
          "100": "#F4ECE1",
          "200": "#E8D6BF",
          "300": "#DDC2A2",
          "400": "#D2AF84",
          "500": "#C69963",
          "600": "#B78343",
          "700": "#926835",
          "800": "#6C4D28",
          "900": "#4B351B",
          "950": "#382814",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      leading: {
        "20": "780px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
