const sequelize = require('sequelize');

const db=new sequelize('dwp','root','',{
    host: 'localhost' || "127.0.0.1",
    port:"3306",
    dialect:'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        arquire:30000, 
        idle:10000
    },
    operatorAliases:false
})
module.exports = db;