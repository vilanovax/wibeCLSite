import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy — primary brand color
        navy: {
          50: "#eef1f7",
          100: "#d6dded",
          200: "#aebccf",
          300: "#7d8fb0",
          400: "#4e618a",
          500: "#2f4570",
          600: "#22335a",
          700: "#1a2747",
          800: "#141e38",
          900: "#0f1729",
        },
        // Brand blue — از لوگوی وایب
        azure: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd3ff",
          300: "#8eb6ff",
          400: "#598fff",
          500: "#2f6bf5",
          600: "#1f55e6",
          700: "#1a43c4",
          800: "#1c3b9e",
          900: "#1d377d",
        },
        // Warm energetic accent — coral / amber
        ember: {
          50: "#fff4ed",
          100: "#ffe3d1",
          200: "#ffc3a3",
          300: "#ff9d6b",
          400: "#ff7a45",
          500: "#f85e26",
          600: "#e2480f",
          700: "#bb360c",
          800: "#942d12",
          900: "#782912",
        },
        cream: "#faf8f4",
        sand: "#f3efe8",
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.1rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(15, 23, 41, 0.12)",
        card: "0 2px 16px -6px rgba(15, 23, 41, 0.10)",
        lift: "0 18px 40px -16px rgba(15, 23, 41, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // فقط جابجایی، بدون مخفی‌کردن محتوا — مناسب المان‌های above-the-fold (LCP)
        rise: {
          "0%": { transform: "translateY(16px)" },
          "100%": { transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        rise: "rise 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
