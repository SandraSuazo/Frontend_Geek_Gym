import { Grid, TextField } from "@mui/material";

export const EditProfileForm = ({ formData, setFormData, isEditMode }) => {
  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

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
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            disabled={!isEditMode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="phone"
            name="phone"
            type="tel"
            label="Teléfono"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            disabled={!isEditMode}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="adress"
            name="adress"
            type="text"
            label="Dirección"
            value={formData.adress}
            onChange={(e) => handleChange("adress", e.target.value)}
            disabled={!isEditMode}
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
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            disabled={!isEditMode}
          />
        </Grid>
        {/* {isEditMode && (
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              disabled={!isEditMode}
            />
          </Grid>
        )} */}
      </Grid>
    </>
  );
};
