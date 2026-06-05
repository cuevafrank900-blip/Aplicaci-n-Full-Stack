const express = require("express");
const morgan = require("morgan");
require("./src/config/db");
const app = express();
const PORT = 3000;
app.use(express.json());
//importar las rutas
const saludoRoutes=require("./src/routes/saludo.routes");
const paisRoutes =require("./src/routes/pais.routes");
//uso de rutas macro
app.use("/api",saludoRoutes);
app.use("/api/pais",paisRoutes);

//MIDLEWARE PARA JSON
//app.use(express.json());
app.use(morgan("dev"));
app.listen(PORT, () =>{
    //crear log
    console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});