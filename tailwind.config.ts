import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: "#1B4332",
          green: "#245842",
          emerald: "#2D6A4F",
          sage: "#52796F",
          softSage: "#84A98C",
          cream: "#FAF7F0",
          warmBg: "#F4EFE6",
          cardBg: "#FFFFFF",
          orange: "#E05A2B",
          warmOrange: "#D9683E",
          mustard: "#D4A373",
          charcoal: "#1C1F1D",
          muted: "#6B7280",
          border: "#E5DEC9",
          badgeBg: "#E3ECE5",
          badgeText: "#1B4332",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        retro: ["var(--font-retro)", "var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(27, 67, 50, 0.05)",
        card: "0 10px 30px -4px rgba(27, 67, 50, 0.08)",
        elevated: "0 20px 40px -10px rgba(27, 67, 50, 0.12)",
      },
      borderRadius: {
        'editorial': '16px',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
};
export default config;
