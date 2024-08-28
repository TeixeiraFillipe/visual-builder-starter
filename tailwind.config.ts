import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'ghost-white': '#F8F8FC',
      'light-grey': '#D9D9D9',
      'azure': '#007EFC',
      'verdansk': '#6AF388',
      'people-eater': '#9847FF',
      'paleruby': '#EB5A79',
      'tangy': '#FFAA47',
      'vulcan': '#10141D',
      'vulcan-85': '#2C313F',
      'independence': '#484F61',
      'mischka': '#CED2DC',
      'pale-sky': '#656C81',
      'currentColor': 'currentColor',
      'transparent': 'transparent',
      'inherit': 'inherit',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans]
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            'h1': { color: 'inherit' },
            'h2': { color: 'inherit' },
            'h3': { color: 'inherit' },
            'h4': { color: 'inherit' },
            'h5': { color: 'inherit' },
            'h6': { color: 'inherit' },
          },
        },
      },
    }
  },
  safelist: [
    "btn--primary",
    "btn--secondary",
    "btn--default",
    "btn--cta"
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    function({ addBase }: { addBase: any }) {
     addBase({
        'html': { fontSize: "16px" },
        'body': {fontSize: "16px"}
      })
    },
    function ({ addBase, theme }: { addBase: any; theme: any }) {
      function extractColorVars(colorObj: Record<string, string>, colorGroup = ''): Record<string, string> {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable = colorKey === "DEFAULT" ? `-${colorGroup}` : `-${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? { [cssVariable]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
export default config;
