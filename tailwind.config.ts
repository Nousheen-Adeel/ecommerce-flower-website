import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Allows manual dark mode toggle
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Updated path
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Updated path
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Updated path
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

