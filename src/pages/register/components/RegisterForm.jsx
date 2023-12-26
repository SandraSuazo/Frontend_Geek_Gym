import { Grid, TextField } from "@mui/material";

export const RegisterForm = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="name"
            name="name"
            type="text"
            label="Nombre"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            type="email"
            label="Correo Electrónico"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Contraseña"
          />
        </Grid>
      </Grid>
    </>
  );
};
