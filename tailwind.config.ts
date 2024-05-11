import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {

    screens: {
      'xs': '480px',
      'sm': '800px',
      'md': '1200px',
      'lg': '1500px',
      'xl': '1900px',
    },

    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },

  plugins: [
    require('daisyui'),
    plugin( ({ addVariant }) => { addVariant('children', '&>*') } )
  ],
};


export default config;
