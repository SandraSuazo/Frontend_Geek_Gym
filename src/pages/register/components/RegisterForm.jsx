import { Box, Grid, TextField } from "@mui/material";

export const RegisterForm = () => {
  return (
    <Box>
      <Grid sx={{ mb: 2 }}>
        <TextField
          required
          fullWidth
          id="name"
          name="name"
          type="text"
          label="Nombre y Apellidos"
        />
      </Grid>
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
