import { createTheme } from "@mui/material";

export const themes = createTheme({
  typography: {
    fontFamily: " roboto, sans-serif",
  },
  palette: {
    mode: "dark",
    text: {
      primary: "#DCDCDC",
      secondary: "#92ce04",
    },
    primary: {
      main: "#92ce04",
    },
    secondary: {
      main: "#92ce04",
    },
    background: {
      default: "#292929",
      paper: "#292929",
    },
  },
  palette: {
    mode: "light",
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    primary: {
      main: "#92ce04",
    },
    secondary: {
      main: "#92ce04",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
});
