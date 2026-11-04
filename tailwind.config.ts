import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      },
      colors: {
        sanctuary: {
          main: "var(--bg-main)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
          border: "var(--border-subtle)",
          cta: "var(--accent-cta)",
          ctaHover: "var(--accent-cta-hover)",
          sage: "var(--accent-sage)",
          chalk: "var(--text-primary)",
          earth: "var(--text-secondary)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
