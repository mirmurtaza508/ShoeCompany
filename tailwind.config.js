/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        126: "500px",
        130: "766px",
        200: "1440px",
      },
      backgroundImage: {
        "hero-color-2":
          "url('https://i.pinimg.com/736x/64/eb/ef/64ebefbbd558d77f1a1e0d01a4e050c1.jpg')",
        "hero-pattern-1":
          "url('https://s3-alpha-sig.figma.com/img/87b1/f22d/3c4a82245252ec215de1afd14d9f76c3?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fiQ6ScjEJEGV~iA4v5efsAsLVRrwof6VzrC3kfaxu7AAn0O9bCLESS6cpD0hFXFu75VTcxII8~2phaWErSQrt0iLjf1Yy3Tq7QOCluCMZoIDBxSSKLjvou1xXmHwFWLHssy3Dm6PWonqiDHEuuztPs6E1nsCXg8WYFxceNcWvCI7qIOIk0ML5Y5~jSa997GOCGVEAAc5BgTpTd7ibFS1JWCEWQXmi~F~Ks41vSJ7aILsMbz3yZpB6c3Ob1vVr34qkx94n2Gl4nrTnjsBJzmTKilSXP1VdOIObSjJttotps9a8KPL7mmZoF2GZT6GbK1kaOY0rx4ojEJ7fwvwuj6hzg__')",
        "hero-pattern-2":
          "url('https://s3-alpha-sig.figma.com/img/fb90/8d43/6c32f19d2b5a568106f9b39e91090d3c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SMPFqtOkdcNqBeFrVvpo8emxNl8JNIUbnPoBukJJU6xx6h6w7Jhz4YTESv-q5z8GmHEpGQtOxrvMdmr9qQexXqcUSGa1SAM206EtoxRBcEvpp75HjkXf11NDzKOiHAHjgFV472mkOu61PhC-B~j4Q0sPnIP87rLRvt~c~~0s22fE5leL02fpVfxRLrR17AHzlBADgN88FS0qDqA0SdwMItBALjqTD8eWRtqhbil1c4UHN0ppo5oD9NkNqZBBzA38EsWwTzoyueTz4ufihVYGo-jCMgvBA907XYkwmndsWfHou3jw2dltvuHEZiyj~tEaqGxnOZ9211PhdwCbT3AMbg__')",
      },
    },
  },
  plugins: [],
};
