module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      },
    screens: {
      xs: "480px",
      //=> @media (min-width:480px) { ... }

      sm: "640px",
      //=> @media (min-width:640px) { ... }

      md: "768px",
      //=> @media (min-width:768px) { ... }

      lg: "1024px",
      //=> @media (min-width:1024px) { ... }

      xl: "1280px",
      //=> @media (min-width:1280px) { ... }

      "2xl": "1536px",
      //=> @media (min-width:1536px) { ... }
    },
  },
  fontFamily: {
    sans: ['Rubik', 'sans-serif'],
    heading: ['Rubik', 'sans-serif'],
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [
    
  ],
}
