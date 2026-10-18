/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'renaissance-gold': '#D8894D',
        'renaissance-blue': '#2DB7A3',
        'renaissance-cream': '#071819',
        'renaissance-brown': '#EEFCF9',
        'renaissance-green': '#54CDBB',
        copper: '#D8894D',
        teal: '#2DB7A3',
        slate: {
          100: '#EEFCF9', 200: '#D2E8E4', 400: '#91B7B3', 500: '#688F8B',
          600: '#3D6662', 700: '#285052', 800: '#163334', 900: '#102829', 950: '#071819'
        },
        emerald: {
          100: '#F8E1D0', 200: '#F0C3A0', 300: '#E7A56E', 400: '#D8894D', 800: '#7A3F19'
        },
        blue: {
          300: '#76D9CA', 400: '#54CDBB', 500: '#2DB7A3', 600: '#1C8D7E', 800: '#105E56'
        }
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))'
      },
      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))'
      },
      fontFamily: {
        'serif-elegant': ['Manrope', 'sans-serif'],
        'sans-elegant': ['Manrope', 'sans-serif'],
        'data': ['IBM Plex Mono', 'monospace']
      }
    }
  },
  plugins: []
}
