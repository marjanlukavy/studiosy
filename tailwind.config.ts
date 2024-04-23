import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        blue: {
          DEFAULT: "#5D9ADA",
          light: "#97ABE0",
        },
        dark: "#343F42",
        gray: "#A1A1A1",
        customWhite: "#F4F4F9",
        inputBackgroundOpacity: "#F5F5F580",
        black: "rgb(52, 63, 66)",
        red: "#FF3E3E",
      },

      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
