const sequelize = require('sequelize'); //trae el squelize
const db = require('../config/db.js');//trae la conexion con la bd

const productosModel = db.define("productos", {
    id_producto:{
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nombre_producto:{
        type: sequelize.STRING,
        allowNull: false
    },
    descripción:{
        type: sequelize.STRING,
        allowNull: false
    },
    color:{
        type: sequelize.STRING,
        allowNull: false
    },
    talla:{
        type: sequelize.STRING,
        allowNull: false
    },
    material:{
        type: sequelize.STRING,
        allowNull: false
    },
    marca:{
        type: sequelize.STRING,
        allowNull: false
    },
    temporada:{
        type: sequelize.STRING,
        allowNull: false
    },
    existencias:{
        type: sequelize.SMALLINT,
        allowNull: false
    },
    id_proveedor:{
        type: sequelize.INTEGER,
        allowNull: false
    },
})

module.exports = productosModel;