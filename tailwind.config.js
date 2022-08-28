module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#2BC3FC",
      "primar-second": "#017EAC",
      "dark-blue": "#00103C",
      white: "#FFFFFF",
      red: "#ff0000",
      yellow: "#F2994A",
      grey: "#798196",
      chipGrey: "#EFEFEF",
      green: "#1DFF4E",
      textInputBorder: "#00103c73",
      textBlack: "#00103ccc",
      buttongrey: "#EFEFEF",
      text_color: "#CCCCCC",
      hrlightBlue: "#00103c26",
      newGrey: '#f0f0f0',
    },
    borderWidth: {
      1: "1px",
      2: "2px",
      4: "4px",
    },
    minHeight: {
      mentor: "35vh",
      half: "58vh",
      mentorbox: "350px",
    },
    minWidth: {
      box: "150px",
      mentor: "25vh",
      mentorbox: "350px",
    },
    maxHeight: {
      mentorbox: "350px",
    },
    maxWidth: {
      threethirty: "330px",
      md: "450px",
      lg: "600px",
      box: "150px",
      mentorbox: "550px",
      packagebox: "400px",
      sessionWidth: "800px",
      buttonWidth: "188px",
    },
    fontFamily: {
      primayfont: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // add this to your plugins
  ],
};
