/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        background: "#F6D9AD",
        blue: "#023047",
        whitePrimary: "#DEDEDE",
        blueFlag: "#506EA8",
        redFlag: "#E87979",
        redHover: "#c83a3a",
        yellow: "#FFB703",
        orange: "#FF8700",
        orange2: "#CC6302",
        black: "#272727",
        gray: "#949494",
        white2: "#f8fafc",
        whiteHover: "#e7e7e7",
      },
      boxShadow: {
        main: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
      },
    },
  },
  plugins: [],
};
