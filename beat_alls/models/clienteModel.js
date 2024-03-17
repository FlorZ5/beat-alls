const sequelize = require('sequelize'); //trae el squelize
const db = require('../config/db.js');//trae la conexion con la bd

const clienteModel = db.define("cliente", {//usuarios corresponde a la tabala con la que se va a trabajar
    id_cliente:{
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre:{
        type: sequelize.STRING,
        allowNull: false
    },
    apellido:{
        type: sequelize.STRING,
        allowNull: false
    },
    direccion:{
        type: sequelize.STRING,
        allowNull: false
    },
    edad:{
        type: sequelize.SMALLINT,
        allowNull: false
    },
    fecha_nacimiento:{
        type: sequelize.DATEONLY,
        allowNull: false
    },
    telefono:{
        type: sequelize.BIGINT,
        unique: true,
        allowNull: false
    },
    correo:{
        type: sequelize.STRING,
        unique: true,
        allowNull: false
    },
    nombre_usuario: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false
    },
    contrasena:{
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = clienteModel;