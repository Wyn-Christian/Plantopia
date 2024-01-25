"use client";

const { createTheme, responsiveFontSizes } = require("@mui/material");

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ABEDD8",
    },
    secondary: {
      main: "#111",
    },
  },
  typography: {
    h1: {
      fontSize: 64,
      fontWeight: 800,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    h2: {
      fontSize: 48,
      fontWeight: 800,
      lineHeight: 1.33,
      letterSpacing: 0,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.57,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 700,
      textTransform: "unset",
      lineHeight: 1.71,
      letterSpacing: 0,
    },
    body1: {
      letterSpacing: 0,
    },
    body2: {
      letterSpacing: 0,
      lineHeight: 1.57,
    },
    overline: {
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    caption: {
      letterSpacing: 0,
      lineHeight: 1.5,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
