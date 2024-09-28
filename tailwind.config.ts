import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          black: "#050505",
          white: "#FFF",
          red: "#B12231",
          gray: "#151515",
        },
      },
      fontFamily: {
        impact: ["var(--impact)"],
        impacted: ["var(--impacted)"],
      },
      letterSpacing: {
        theme: "8px",
      },
      keyframes: {
        carouselInfinite: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-102%)" },
        },
      },
      animation: {
        slide: "carouselInfinite 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
