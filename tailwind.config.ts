import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: { DEFAULT: "#16153F", 900: "#0E0D2B", 700: "#2A2860" },
        ivory: "#F7F2EA",
        brass: { DEFAULT: "#B3863A", deep: "#7F5C1E", light: "#E2C48C" },
        rosewood: "#6E3B4E",
        stone: "#5E5B6E",
        mist: "#ECE6DB",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "40rem" },
    },
  },
  plugins: [],
};
export default config;
