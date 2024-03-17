const sequelize = require('sequelize'); //trae el squelize
const db = require('../config/db.js');//trae la conexion con la bd

const proveedorModel = db.define('proveedor', {
    id_proveedor:{
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
    telefono:{
        type: sequelize.BIGINT,
        unique: true,
        allowNull: false
    },
    correo:{
        type: sequelize.STRING,
        allowNull: false
    },
    empresa:{
        type: sequelize.STRING,
        allowNull: false
    }
})
module.exports = proveedorModel;