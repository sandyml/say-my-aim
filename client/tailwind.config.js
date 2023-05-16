/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      fontFamily: {
        'aurora-regular': 'Aurora Regular',
        'aurora-light': 'Aurora Light',
        'athena-regular': 'Athena Regular'
       },
       colors: {
        'beige': '#dcd7c9',
        'midnight': '#2c3639',
        'light-midnight': '#3f4e4f',
        'tahiti': '#3ab7bf',
        'black': '#000000',
        'off-beige': '#e6dcd3',
        'dark-beige': '#bda18c',
        'light-brown': '#8c7561',
        'coconut': '#e1d8c7',
        'clotted-cream': '#f5ede2',
      },
    },
  },
  plugins: [],
}