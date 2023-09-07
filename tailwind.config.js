/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        open_san : ['Open Sans', 'sans-serif'],
        poppins : ['Poppins', 'sans-serif'],
        open_robot : ['Roboto', 'sans-serif'],
        source_san : ['Source Sans 3', 'sans-serif'],
      },
      colors : {
        text_primary : "#0E2368",
        text_red : "#E23744",
        text_body : "#444957",
        text_body_sec : "#646874",
        primary : "#F8F8F8",
        secondary : "#F0F1F7",
        card_border:"#373737",
        button_border: "#424961",
        articl_border:"#93A2D3"
      }
    },
  },
  plugins: [],
}

