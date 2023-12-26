import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanToken } from "../../../../core/slices/authSlice.js";

export const UserMenu = ({ token }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {
    if (anchorElUser) handleCloseUserMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleLogout = () => {
    if (anchorElUser) handleCloseUserMenu();
    dispatch(cleanToken());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip>
        <Button onClick={handleOpenUserMenu} type="submit" variant="contained">
          ÁREA CLIENTES
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {token ? (
          <Box>
            <MenuItem onClick={() => handleNavigate("/profile")}>
              <Typography textAlign="center">PERFIL</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("/")}>
              <Typography textAlign="center">MIS CLASES</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("/")}>
              <Typography textAlign="center">NUTRICIÓN</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">LOGOUT</Typography>
            </MenuItem>
          </Box>
        ) : (
          <MenuItem onClick={() => handleNavigate("/login")}>
            <Typography textAlign="center">LOGIN</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};
