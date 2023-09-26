/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
        alt: "var(--font-bai-jamjuree)",
      },
      colors: {
        gray: {
          50: "#FFF",
          100: "#F1F1F2",
          200: "#D3D4D6",
          300: "#929498",
          400: "#67696F",
        },
        purple: {
          50: "#CDC0FF",
          100: "#B6A5FE",
          200: "#967DFD",
          300: "#866AFA",
          400: "#6F4FF2",
        },
        green: {
          50: "#B8F5D0",
          100: "#88EEB1",
          200: "#58E791",
          300: "#29E072",
          400: "#0CC857",
        },
        red: {
          50: "#DC3546",
          100: "#E01E1E",
        },
        black: {
          50: '#717171',
          100: '#3A3A3A',
          150: '#202020',
          200: '#0C0C0C'
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
