/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "#1F242D",
        "color-primary": "#00EEFF",
        "color-secondary": "#0BC8D6",
        "color-white": "#fff",
        "color-white-secondary": "#D9D9D9",
        "color-black": "#000000",
        "color-black-dark": "#0B0B0B",
        "color-black-light": "#585B5B",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
  },
  plugins: [],
};
