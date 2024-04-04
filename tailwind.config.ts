import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    screens: {
      'sm': '425px', // Adjust to your desired breakpoint
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    letterSpacing: {
      widest: '0.4em'
    },
    colors: {
      'mainBg': 'hsl(185, 41%, 84%)',
      'darkTxt': 'hsl(183, 100%, 15%)',
      'hover': 'hsl(172, 67%, 45%)',
      'lightGCyan': 'hsl(189, 41%, 97%)',
      'grayCyan': 'hsl(186, 14%, 43%)'
    },
    extend: {
    },
    fontFamily: {
      mainFont: ['mainFont']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
