import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

export const MobileMenu = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  handleNavigate,
}) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton size="large" onClick={handleOpenNavMenu}>
        <MenuIcon sx={{ background: "#FFFFFF" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem onClick={() => handleNavigate("/about")}>
          <Typography textAlign="center">CONÓCENOS</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/about/activities")}>
          <Typography textAlign="center">ACTIVIDADES</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleNavigate("/about/nutrition")}>
          <Typography textAlign="center">NUTRICIÓN</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
