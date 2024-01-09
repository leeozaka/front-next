import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dodger-blue': {
            '50': '#edfbff',
            '100': '#d6f5ff',
            '200': '#b5efff',
            '300': '#83e8ff',
            '400': '#48d8ff',
            '500': '#1ebcff',
            '600': '#06a0ff',
            '700': '#0087f5',
            '800': '#086bc5',
            '900': '#0d5b9b',
            '950': '#0e375d',
        },
      }
    },
  },
  plugins: [],
}
export default config
