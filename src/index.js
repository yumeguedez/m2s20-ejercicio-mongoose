require(`dotenv`).config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
const app = express();

dbConnection();
app.use(cors());
//leer cosas del body
app.use(express.json());

app.get("/api", (req, res) => {
  return res.json({
    msg: "Bienvenido al Api Demo",
  });
});

app.use("/api/usuarios", require("./routes/users.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/products", require("./routes/products.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
