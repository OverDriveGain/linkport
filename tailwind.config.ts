import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A66C2",
          light: "#378FE9",
          dark: "#004182",
        },
        accent: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          dark: "#4F46E5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(10,102,194,0.25), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(99,102,241,0.15), transparent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
