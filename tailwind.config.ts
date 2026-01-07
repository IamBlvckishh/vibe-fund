import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your signature 2026 Neo-Minimalist palette
        "vibe-cyan": "#06b6d4",
        "vibe-dark": "#050505",
        "vibe-glass": "rgba(255, 255, 255, 0.03)",
      },
      backgroundImage: {
        "vibe-gradient": "radial-gradient(circle at top, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
