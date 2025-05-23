/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryBlue: "#4D4C7D",
      secondery: "#EC7626",
      orangeColor: "#ec7526ad",
      navyBlue: "#0A043C",
      green: "#a1c181",
      textWhite: "#ffffff",
      backgroundWhite: "#FDFDFD",
      textGray: "rgb(136, 136, 136)",
      textBlack: "#000000",
      backgroundBlack: "#00000091",
      colorRed: "#e00303",
      bgRed: "#E51B20",
      blueTisAir: "#A2DBF7",
      grayTisAir: "#C7C6C6",
      orangTisBus: "#FCBD5A",
      grayTisBee: "#565656",
      yellowTisBee: "#FFCB01",
      garyTisLock: "#898989",
    },
    fontSize: {
      titleFontSize: "1.2rem",
      mainTitleFontSize: "2.2rem",
      subTitle: "1.5rem",
    },
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
