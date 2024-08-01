import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FFF3F9",
        "navy-pink": "#FFB9D4",
        "navy-red": "#FF004F",
        "pink": "#FD0786",
        "dark-pink": "#B3618C",
        "navy-blue": "#053167",
        "sky-blue": "#00F2EA",
        "grey": "#797979",
        "grey-dark": "#999999",
      },

      fontFamily: {
        "Shrikhand": "Shrikhand",
        "lexend": "Lexend Deca",
        "jost":"jost"
      },
      fontSize: {
        "8xl": "80px",
        "2xxl": "28px",
        "5xxl": "52px",
        "2lg": "22px",
        "4xxl": "40px",
        "xxs": "11.2px",
        "xsm":"15px",
      },
      lineHeight: {
        "125": "125%",
        "130": "130%",
        "150": "150%",
        "145": "145%",
      },
      backgroundImage: {
        "supporters": " url('/assets/images/webp/bg-supporters.png')",
        "supporter": " url('/assets/images/webp/bg-supporter-2.png')",
        "hero": " url('/assets/images/webp/bg-hero.png')"
      },
      borderRadius: {
        "5xl": "50px",
        "xxl": "13.54px"
      },
      boxShadow: {
        "grey-pink": "0px 0px 0px 6px #FD07864D",
        "pink-blur": "-8.12px 8.12px 16.24px 0px #FFAFCD"
      },
      screens: {
        "915": "915px",
        "576": "576px",
        "415": "415px"
      },
    },
  },
  plugins: [],
};
export default config;
