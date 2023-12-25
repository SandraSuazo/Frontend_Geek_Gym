import { createTheme } from "@mui/material";
import lightLogo from "../../../public/logo_images/light-logo.png";

export const lightTheme = createTheme({
  logo: lightLogo,
  typography: {
    fontFamily: " roboto, sans-serif",
    text: {
      primary: "#000000",
      secondary: "#92ce04",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#92ce04",
    },
    secondary: {
      main: "#92ce04",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});
