import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        DeadSpaceTitle:[`var(--font-DeadSpaceTitle)`],
        falconpunchstraight:[`var(--font-falconpunchstraight)`],
        Luciole:[`var(--font-Luciole)`],
        Orienta_Regular:[`var(--font-Orienta_Regular)`],
      }
    },
  },
  plugins: [],
};
export default config;
