import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this line is included
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        playfair:["Playfair Display"],
      },
    },
  },
  plugins: [],
};
export default config;
