import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: "#050508",
        surface: "#0d0d14",
        card: "#111119",
        border: "rgba(255,255,255,0.06)",
        "border-hover": "rgba(255,255,255,0.14)",
        accent: {
          DEFAULT: "#6c63ff",
          light: "#9b94ff",
          dim: "rgba(108,99,255,0.12)",
          dim2: "rgba(108,99,255,0.06)",
        },
        cyan: {
          DEFAULT: "#22d3ee",
          dim: "rgba(34,211,238,0.1)",
        },
        green: {
          DEFAULT: "#4ade80",
          dim: "rgba(74,222,128,0.1)",
        },
        pink: {
          DEFAULT: "#f472b6",
          dim: "rgba(244,114,182,0.1)",
        },
        text: {
          primary: "#f0eeff",
          secondary: "#8b8aaa",
          muted: "#4a4970",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "slide-up": "slideUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fadeIn 0.7s ease forwards",
        "beam": "beam 3s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        beam: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(400%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(108,99,255,0.25)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.2)",
        "card": "0 1px 0 rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
