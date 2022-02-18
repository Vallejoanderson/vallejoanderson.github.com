module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        deskImage: "url('/assets/background.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
