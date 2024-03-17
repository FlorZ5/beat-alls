const sequelize = require('sequelize'); //trae el squelize
const db = require('../config/db.js');//trae la conexion con la bd

const pedidosModel = db.define("pedidos", {
    no_pedido:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    id_carrito:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    id_cliente:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    nombre_cliente:{
        type: sequelize.STRING,
        allowNull: false
    },
    id_producto:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    nombre_producto:{
        type: sequelize.STRING,
        allowNull: false
    },
    descripcion:{
        type: sequelize.STRING,
        allowNull: false
    },
    cantidad_producto:{
        type: sequelize.SMALLINT,
        allowNull: false
    },
    precio_unitario_producto:{
        type: sequelize.SMALLINT,
        allowNull: false
    },
    precio_total_productos:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    cantidad_pagar:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    ubicacion:{
        type: sequelize.STRING,
        allowNull: false
    },
    fecha:{
        type: sequelize.DATE,
        allowNull: true
    },
    estatus:{
        type: sequelize.STRING,
        allowNull: false
    }
})

module.exports = pedidosModel;