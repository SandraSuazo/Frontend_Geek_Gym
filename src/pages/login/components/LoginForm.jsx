import { Box, Grid, TextField } from "@mui/material";

export const LoginForm = () => {
  return (
    <Box>
      <Grid sx={{ mb: 2 }}>
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Correo Electrónico"
        />
      </Grid>
      <Grid sx={{ mb: 2 }}>
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Contraseña"
        />
      </Grid>
    </Box>
  );
};
