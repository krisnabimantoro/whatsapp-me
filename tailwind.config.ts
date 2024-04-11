import { transform } from "next/dist/build/swc";
import { blob } from "stream/consumers";
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
        'Secondary':'#4EDC83',
        'grey':'#E6EDED',
        'buttonColour':'#2A2F37',
        'gray2':'#A5A5A5',
        'third':'#008C9F'
      },

      animation: {
        blob: "blob 2s infinite"
      },
      keyframes:{
        blob:{
          "0":{
            transform : "scale(1)"
          },
          "33":{
            transform : "scale(1.2)"
          },         
          "66":{
            transform : "scale(0.8)"
          },         
          "100":{
            transform : "scale(1)"
          }
        }
      }
    },
   
  },
  plugins: [],
};
export default config;
