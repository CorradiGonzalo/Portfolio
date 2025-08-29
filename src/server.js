const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

// CREAR APP
const app = express();

// HANDLEBARS COMO MOTOR DE PLANTILLAS
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// UBICACIÓN DE LAS VISTAS
app.set("views", path.join(__dirname, "views"));

// ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, "public")));

// RUTA HOME
app.get("/", (req, res) => {
    res.render("home"); // busca "home.handlebars" en /views
});

// PUERTO
app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});




