import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box style={{ width: "100%" }}>
      <Box position="relative">
        <img
          src="gym_images/home-image01.png"
          alt="Fila de bicicletas"
          style={{ width: "100%", filter: "brightness(0.4)" }}
        />
        <Box
          style={{
            position: "absolute",
            width: "50%",
            top: "45%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: "bold", my: 3 }}>
            ¿POR QUÉ GEEK GYM?
          </Typography>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Juntos viviremos experiencias únicas. Te ayudaremos a construir la
            mejor versión de ti y a disfrutar de tu cuerpo y mente.{" "}
            <span style={{ color: "#92ce04" }}>
              TODO INCLUIDO y SIN PERMANENCIA
            </span>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ my: 12 }}
        style={{
          textAlign: "center",
          color: "#000000",
        }}
      >
        <Typography variant="h2" sx={{ mb: 3 }}>
          Quiénes somos...
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", mx: 5 }}>
          Somos el gimnasio con la sala fitness más grande de Madrid, ubicado en
          el Ensanche de Vallecas. En
          <span style={{ color: "#92ce04" }}> Geek Gym</span> encontrarás un
          espacio donde llevar a cabo tu entrenamiento con instalaciones
          equipadas con lo último en innovación, maquinaria y tecnología
          fitness. Estudios con más de
          <span style={{ color: "#92ce04" }}> 200 actividades </span> dirigidas
          al mes (yoga, zumba, spinning, body combat, etc.) y burbujas de clases
          virtuales para que entrenes cuando quieras. Zonas de entrenamiento
          funcional,{" "}
          <span style={{ color: "#92ce04" }}> zona de SPA con solárium, </span>
          baño turco y sauna y grandes vestuarios equipados con taquillas
          individuales y secadores.
        </Typography>
      </Box>
      <Box position="relative">
        <img
          src="gym_images/home-image02.png"
          alt="Fila de bicicletas"
          style={{ width: "100%", filter: "brightness(0.5)" }}
        />
        <Box
          style={{
            position: "absolute",
            width: "30%",
            top: "47%",
            left: "18%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", my: 3 }}>
            Lo que nos hace únicos y diferentes
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Tú decides cuándo vienes y cuándo te vas, pero...
            <span style={{ color: "#92ce04" }}> ¡El que prueba, REPITE!</span>
          </Typography>
          <Box
            sx={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "left" }}
          >
            <ul>
              <li>Un ambiente increíble y familiar</li>
              <li>Un estilo de vida saludable</li>
              <li>Un equipo motivado a tu disposición</li>
              <li>Y miles de experiencias únicas</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
