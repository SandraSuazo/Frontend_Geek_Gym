import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RegisterForm } from "./components/RegisterForm";
import { login, register } from "../../shared/services/authApiCalls.js";
import { setToken } from "../../core/slices/authSlice.js";

const backgroundImage = "gym_images/login-background.jpg";

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleUserRegister = async (user) => {
    try {
      await register(user);
      await login(user).then(({ data }) => {
        dispatch(setToken(data.token));
        handleNavigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await handleUserRegister(user);
  };

  return (
    <Grid
      container
      style={{
        height: "91.3vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        sm={4.7}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid",
          background: "#FFFFFF",
        }}
      >
        <Typography variant="h4">REGISTRARSE</Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "80%" }}
        >
          <RegisterForm />
          <Button
            id="send-button"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
          <Grid container justifyContent="flex-end">
            <Button
              onClick={() => handleNavigate("/login")}
              sx={{ color: "#000000" }}
            >
              ¿Ya tienes una cuenta? Inicia sesión
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
