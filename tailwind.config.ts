import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable manual dark mode switching
  plugins: [require("tailwindcss-animate")],
};

export default config;
