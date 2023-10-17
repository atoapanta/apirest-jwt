import app from "./app";
import config from "./config/settings";

const { port } = config;

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
