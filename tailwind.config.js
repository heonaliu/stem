/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",

        primary: {
          100: "#e8f0d5",
          500: "#9CAB84",
          600: "#89986D",
        },
        accent: {
          500: "#7C9DC5",
          600: "#6B8BB3",
        },
        surface: "#ffffff",
        text: "#2f2f2f",
        muted: "#6b7280",
        lightmuted: "#c1d1ca",
      },
      fontFamily: {
        special: ["Muthiara", "sans-serif"],
      }
    },
  },
  plugins: [],
};