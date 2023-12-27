import React from "react";
import { Box, Button } from "@mui/material";

export const DesktopMenu = ({ handleNavigate }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex", justifyContent: "end" },
      }}
    >
      <Button
        onClick={() => handleNavigate("/")}
        sx={{
          my: 2,
          color: "#FFFFFF",
          display: "block",
          "&:hover": {
            color: "#000000",
            backgroundColor: "#92ce04",
          },
        }}
      >
        INICIO
      </Button>
      <Button
        onClick={() => handleNavigate("/about")}
        sx={{
          my: 2,
          color: "#FFFFFF",
          display: "block",
          "&:hover": {
            color: "#000000",
            backgroundColor: "#92ce04",
          },
        }}
      >
        CONÓCENOS
      </Button>
      <Button
        onClick={() => handleNavigate("/about/activities")}
        sx={{
          my: 2,
          color: "#FFFFFF",
          display: "block",
          "&:hover": {
            color: "#000000",
            backgroundColor: "#92ce04",
          },
        }}
      >
        ACTIVIDADES
      </Button>
      <Button
        onClick={() => handleNavigate("/about/nutrition")}
        sx={{
          my: 2,
          color: "#FFFFFF",
          display: "block",
          "&:hover": {
            color: "#000000",
            backgroundColor: "#92ce04",
          },
        }}
      >
        NUTRICIÓN
      </Button>
    </Box>
  );
};
