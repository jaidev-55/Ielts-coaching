// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35",
        secondary: "#F7C948",
        dark: "#1A1A2E",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(135deg,#0F0C29 0%,#1A1A2E 30%,#16213E 60%,#0F3460 100%)",
        "gradient-primary": "linear-gradient(135deg,#FF6B35,#F7C948)",
      },
      backgroundSize: {
        400: "400% 400%",
      },
      animation: {
        "gradient-shift": "gradientShift 15s ease infinite",
        pulse: "pulse 2s ease infinite",
        fadeUp: "fadeUp 0.8s ease both",
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      maxWidth: {
        300: "1200px",
        145: "580px",
        110: "440px",
        122.5: "490px",
      },
      spacing: {
        15: "60px",
        37.5: "150px",
        125: "500px",
        87.5: "350px",
        8.5: "34px",
        2.25: "9px",
        3.25: "13px",
        4.5: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
