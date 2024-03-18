const {Sequelize, DataTypes}  = require('sequelize'); //trae el squelize
const db = require('../config/db.js');//trae la conexion con la bd

const proveedorModel = db.define('proveedor', {
    ID_Proveedor:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefono:{
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false
    },
    Correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Empresa:{
        type: DataTypes.STRING,
        allowNull: false
    }
<<<<<<< HEAD
}, 
{
    tableName: 'proveedor',
    timestamps: false
}
)
=======
})

>>>>>>> 907095d7a243eb117427f60aabbe1826d3b678ad
module.exports = proveedorModel;