import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserMenu } from "./components/UserMenu.jsx";
import { DesktopMenu } from "./components/DesktopMenu.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { authData } from "../../../core/slices/authSlice.js";

export const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { token } = useSelector(authData);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    if (anchorElNav) handleCloseNavMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => handleNavigate("/")}
            sx={{
              ml: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
          >
            <img src="logo_images/logo.png" alt="Logo" style={{ height: 50 }} />
          </Typography>
          <MobileMenu
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            handleNavigate={handleNavigate}
          />
          <Typography
            onClick={() => handleNavigate("/")}
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
            }}
          >
            <img src="logo_images/logo.png" alt="Logo" style={{ height: 50 }} />
          </Typography>
          <DesktopMenu handleNavigate={handleNavigate} />
          <UserMenu token={token} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
