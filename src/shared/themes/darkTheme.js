import { createTheme } from "@mui/material";
import darkLogo from "../../../public/logo_images/dark-logo.png";

export const darkTheme = createTheme({
  logo: darkLogo,
  typography: {
    fontFamily: " roboto, sans-serif",
    text: {
      primary: "#DCDCDC",
      secondary: "#92ce04",
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#92ce04",
    },
    secondary: {
      main: "#92ce04",
    },
    background: {
      default: "#292929",
    },
  },
});
