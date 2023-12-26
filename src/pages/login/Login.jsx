import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginForm } from "./components/LoginForm.jsx";
import { login } from "../../shared/services/authApiCalls.js";
import { setToken } from "../../core/slices/authSlice.js";

export const Login = () => {
  // const notify = (message) => toast.error(message);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleUserLogin = async (user) => {
    try {
      await login(user).then(({ data }) => {
        dispatch(setToken(data.token));
        handleNavigate("/");
      });
    } catch (error) {
      console.log(error);
      // notify(`${error.response.status}: ${error.response.data}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    await handleUserLogin(user);
  };

  return (
    <Grid container style={{ overflow: "hidden" }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          my: 17,
          mx: "auto",
          height: "55vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid",
        }}
      >
        <Typography variant="h4">LOGIN</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <LoginForm />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={() => handleNavigate("/register")}>
                ¿No tienes una cuenta? Regístrate
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
