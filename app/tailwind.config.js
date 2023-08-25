/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      sans: ['Bellefair', 'serif'],
      serif1: ['Barlow Condensed', 'sans-serif'],
      serif2: ['Barlow', 'sans-serif']
    },

    extend: {
      colors: {
        'navy-blue': '#0B0D17',
        'violet': '#D0D6F9',
        'white': '#fff',
        'gray': '#24262F',
        'light-gray': '#979797'
      },
      
      backgroundImage: {
        'home': "url('/assets/home/background-home-mobile.jpg')",
        'home-sm': "url('/assets/home/background-home-tablet.jpg')",
        'home-md': "url('/assets/home/background-home-desktop.jpg')",
        'destination': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-sm': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-md': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-sm': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-md': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology': "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-sm': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-md': "url('/assets/technology/background-technology-desktop.jpg')",
        'commander': "url('/assets/crew/image-douglas-hurley.png')",
        'mission_specialist': "url('/assets/crew/image-mark-shuttleworth.png')",
        'pilot': "url('/assets/crew/image-victor-glover.png')",
        'flight_engineer': "url('/assets/crew/image-anousheh-ansari.png')",
        'launch-vehicle-ls': "url('/assets/technology/image-launch-vehicle-landscape.jpg')",
        'launch-vehicle-pt': "url('/assets/technology/image-launch-vehicle-portrait.jpg')",
        'space-capsule-ls': "url('/assets/technology/image-space-capsule-landscape.jpg')",
        'space-capsule-pt': "url('/assets/technology/image-space-capsule-portrait.jpg')",
        'spaceport-ls': "url('/assets/technology/image-spaceport-landscape.jpg')",
        'spaceport-pt': "url('/assets/technology/image-spaceport-portrait.jpg')",
      },
      screens: {
        'sm': '520px',
        'md': '900px'
      },
      fontSize: {
        '2xl': '1.5rem', /* 24px */
        '3xl': '1.75rem', /* 28px */
        '4xl': '2rem', /* 32px */
        '5xl': '2.5rem', /* 40px */
        '6xl': '3.5rem', /* 56px */
        '7xl': '5rem', /* 80px */
        '8xl': '6.25rem', /* 100px */
        '9xl': '9.5rem' /* 150px */
      },
      letterSpacing: {
        widest: '0.16rem'
      }
    },
  },
  plugins: [],
}

