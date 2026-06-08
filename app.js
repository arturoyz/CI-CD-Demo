const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/bienvenida", (req, res) => {
  res.json({
    mensaje: "Esta es la 1 version de mi aplicacion implementando CI/CD",
    version: "1.0.0",
    status: "ok",
  });
});

module.exports = app;
