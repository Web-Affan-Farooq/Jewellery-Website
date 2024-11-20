import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custombrown: "#A29875",
        customgray:"#6C757D",
        customlightbrown:'#0000009E',
      },
      backgroundColor: {
        background: "#A29875",
        customgray:"#ced1d6",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        oswald: "var(--font-oswald)",
        rye: "var(--font-rye)",
      }
    },
  },
  plugins: [],
};
export default config;

