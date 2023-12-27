import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Container, Typography } from "@mui/material";
import { authData } from "../../core/slices/authSlice.js";
import { userData } from "../../core/slices/userSlice.js";
import { setAuthUser, setUser } from "../../core/slices/userSlice.js";
import {
  profileUser,
  modifyProfileUser,
} from "../../shared/services/userApiCalls.js";
import { EditProfileForm } from "./components/EditProfileForm.jsx";

export const Profile = () => {
  const { token } = useSelector(authData);
  const { authUser, user } = useSelector(userData);
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: authUser.name,
    phone: user?.phone ?? null,
    adress: user?.adress ?? null,
    email: authUser.email,
  });

  const fetchProfileData = async () => {
    try {
      const response = await profileUser(token);
      dispatch(setAuthUser(response.data.authUser));
      dispatch(setUser(response.data.user));
      setFormData({
        name: response.data.authUser.name,
        phone: response.data.user?.phone ?? null,
        adress: response.data.user?.adress ?? null,
        email: response.data.authUser.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [token]);

  const handleEditButton = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
    if (!isEditMode) {
      setFormData({
        name: authUser.name,
        phone: user?.phone ?? null,
        adress: user?.adress ?? null,
        email: authUser.email,
      });
    }
  };

  const handleEditProfile = async () => {
    try {
      await modifyProfileUser(formData, token);
      fetchProfileData();
      setIsEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "#ad9859",
          }}
        >
          Perfil
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <EditProfileForm
            formData={formData}
            setFormData={setFormData}
            isEditMode={isEditMode}
          />
        </Box>
        {!isEditMode ? (
          <Button
            fullWidth
            variant="contained"
            onClick={handleEditButton}
            sx={{ mt: 3 }}
          >
            Modificar Perfil
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            onClick={handleEditProfile}
            sx={{ mt: 3 }}
          >
            Guardar Cambios
          </Button>
        )}
      </Box>
    </Container>
  );
};
