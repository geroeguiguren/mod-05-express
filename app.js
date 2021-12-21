const express = require ("express");
const path = require ("path")

const app = express();

app.listen (3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use (express.static(path.join (__dirname, "public")))



// requerimos el archivo de rutas main.js
const mainRoutes = require ("./routes/main");
app.use ("/", mainRoutes);


const about = require ("./routes/main");
app.use ("/about", about);







