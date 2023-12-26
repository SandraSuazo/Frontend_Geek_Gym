import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";
import { register } from "../../shared/services/authApiCalls.js";

const backgroundImage = "gym_images/login-background.jpg";

export const Register = () => {
  // const notify = (message) => toast.error(message);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleUserRegister = async (newUser) => {
    try {
      await register(newUser);
      handleNavigate("/login");
    } catch (error) {
      console.log(error);
      // notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await handleUserRegister(newUser);
  };

  return (
    <Grid
      container
      style={{
        overflow: "hidden",
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
          background: "#DCDCDC",
        }}
      >
        <Typography variant="h4">REGISTRARSE</Typography>
        <Box noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: "80%" }}>
          <RegisterForm />
          <Button
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
