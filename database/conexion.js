const mongoose = require("mongoose");

const conexion = async () => {

    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/blog");
        console.log("Conectado correctamente a la base de datos Blog !!");

    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos !!");
    }
}

module.exports = {
    conexion
}