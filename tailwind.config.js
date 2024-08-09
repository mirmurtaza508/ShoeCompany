/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        127: "127deg",
      },
      spacing: {
        126: "500px",
        130: "766px",
        200: "1440px",
      },
      backgroundImage: {
        "testmonial-BackImage":
          "url('./src/assets/testmonial-section-background.png)",
        "hero-color-2":
          "url('https://i.pinimg.com/736x/64/eb/ef/64ebefbbd558d77f1a1e0d01a4e050c1.jpg')",
        "hero-background": "url('./src/assets/hero-background.png')",
        "about-backImage": "url('./src/assets/about-us-background.png')",
      },
      screens: {
        media560: "560px",
        media440: "440px",
      },
    },
  },
  plugins: [],
};
