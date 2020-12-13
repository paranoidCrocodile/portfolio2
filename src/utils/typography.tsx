import Typography from "typography";

const RobotoLato = new Typography({
  baseFontSize: "25px",
  baseLineHeight: 1,
  headerFontFamily: ["Roboto", "sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
});

RobotoLato.injectStyles();

export default RobotoLato;
