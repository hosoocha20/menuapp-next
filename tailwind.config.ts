import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'portrait-tablet': '641px',
        // => @media (min-width: 641px) { ... }
        'tablet' : '961px',
      },
      spacing: {
        'lg-nav': '5rem',
        'tablet-nav' : '4rem',
        'sm-nav': '2rem',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        "cabin-condensed": ["Cabin Condensed", "sans-serif"],
      },
      colors: {
        "my-orange": {
          "10": "#fff8f6",
          "50": "#fff2ed",
          "100": "#ffe2d5",
          "200": "#fdc2ab",
          "300": "#fc9775",
          "400": "#f9623e",
          "500": "#f73a18",
          "600": "#e8210e",
          "700": "#c0140e",
          "800": "#991314",
          "900": "#7b1313",
          "950": "#42080b",
        },
        "my-mango": {
          "50": "#fff9ed",
          "100": "#fff1d4",
          "200": "#ffe0a9",
          "300": "#ffc466",
          "400": "#fea639",
          "500": "#fc8a13",
          "600": "#ed6f09",
          "700": "#c55309",
          "800": "#9c4110",
          "900": "#7e3710",
          "950": "#441a06",
        },
        "my-purple": {
          "50": "#edf2ff",
          "100": "#dfe6ff",
          "200": "#c5d0ff",
          "300": "#8fa1ff",
          "400": "#7d88fc",
          "500": "#5e5ff6",
          "600": "#4c41ea",
          "700": "#4133cf",
          "800": "#352ca7",
          "900": "#2f2b84",
          "950": "#1e194d",
        },

        "my-black": {
          "10": "#f9f9f9",
          "50": "#f6f6f6",
          "80": "#ececec",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#222222",
        },
        "gun-powder": {
          "50": "#f5f6f9",
          "100": "#e8e9f1",
          "200": "#d6d8e7",
          "300": "#babed6",
          "400": "#999dc1",
          "500": "#8082b1",
          "600": "#706ea2",
          "700": "#666293",
          "800": "#57537a",
          "900": "#3f3d56",
          "950": "#2f2d3e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
