import { createTheme } from "@mui/material";
import darkLogo from "../../../public/logo_images/dark-logo.png";
import lightLogo from "../../../public/logo_images/light-logo.png";
// import lightFavicon from "public/icon_images/light-icon.png";
// import darkFavicon from "public/icon_images/dark-icon.png";

export const themes = createTheme({
  typography: {
    fontFamily: " roboto, sans-serif",
  },
  palette: {
    mode: "dark",
    // favicon: darkFavicon,
    logo: darkLogo,
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
    // favicon: lightFavicon,
    logo: lightLogo,
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
