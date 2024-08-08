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
        "hero-color-2":
          "url('https://i.pinimg.com/736x/64/eb/ef/64ebefbbd558d77f1a1e0d01a4e050c1.jpg')",
        "hero-background": "url('./src/assets/hero-background.png')",
        "hero-pattern-2":
          "url('https://s3-alpha-sig.figma.com/img/fb90/8d43/6c32f19d2b5a568106f9b39e91090d3c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMPFqtOkdcNqBeFrVvpo8emxNl8JNIUbnPoBukJJU6xx6h6w7Jhz4YTESv-q5z8GmHEpGQtOxrvMdmr9qQexXqcUSGa1SAM206EtoxRBcEvpp75HjkXf11NDzKOiHAHjgFV472mkOu61PhC-B~j4Q0sPnIP87rLRvt~c~~0s22fE5leL02fpVfxRLrR17AHzlBADgN88FS0qDqA0SdwMItBALjqTD8eWRtqhbil1c4UHN0ppo5oD9NkNqZBBzA38EsWwTzoyueTz4ufihVYGo-jCMgvBA907XYkwmndsWfHou3jw2dltvuHEZiyj~tEaqGxnOZ9211PhdwCbT3AMbg__')",
        "about-backImage":
          "url('https://s3-alpha-sig.figma.com/img/d84c/0786/528c493b61d58bd198b9df3d0b21d429?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEVJTnMPMq5mZ58q5zyZhE4qiHhxZBdKHS~HiIjCGs~Ox3LCOcc-YCZlR8XtBHMWHrm36NgF9l63HzxiPHDMrhQ2HpgV2gXOMY7Ivha3cs9o5p6Ojx8cgcugPQfDT1zhvwT63ipKqBLu8iu2O6swv3d~HU5DlBh6c5gGAEEEMvXXFTmRV7C3-J0FeRc0Qld748EuNzpXbN7R~peY8OkHNsbdUliv8KoYs1iIV0oTdzvyyyXkNMjLwrDrAB3dGg2piwPt3GxUlQL0AsY42A04gFFf4bJRVp9mHdAHLpun5pYoxfidTwbzozZvPGA4aeLMgK6SMIoSBkhngxSSttk~hg__')",
      },
      screens: {
        media540: "560px",
        media440: "440px",
      },
    },
  },
  plugins: [],
};
