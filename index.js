const { conexion } = require("./database/conexion");
const express = require("express");
const cors = require("cors");

// Inicializar app
console.log("App de node arrancada");

// Conectar a la base de datos
conexion();

// Crear servidor Node
 const app = express();
 const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json()); // recibir datos con content-type app/json
 app.use(express.urlencoded({extended:true})); // form-urlencoded
 app.set('view engine', 'pug');

// RUTAS
const rutas_articulo = require("./rutas/articulo");

 // Cargo las rutas
 app.use("/api", rutas_articulo);

// Rutas prueba hardcodeadas
app.get("/probando", (req, res) => {

     console.log("Se ha ejecutado el endpoint probando");

     return res.status(200).json([{
         nombre: "Eloy",
         apellido: "Ribes Leon",
         ciudad: "Girona"
     }
   ]);
 });

// Crear servidor y escuchar peticiones http
 app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
 });