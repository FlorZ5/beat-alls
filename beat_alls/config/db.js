const sql = require('mssql');

<<<<<<< HEAD
const db=new sequelize('beat_alls','root','',{
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
=======
const db = {
  user: 'EdgeSlayer97', //Aqui puse mi usuario pero podemos generar unos identicos para no cambiar valores mientras hacemos pruebas.
  password: 'password',
  server: 'localhost', //Este dejalo así mientras hacemos pruebas.
  database: 'beat_alls',
  options: {
    encrypt: false,
    enableArithAbort: true 
  }
};

const conexion = new sql.ConnectionPool(db);
const Connect = conexion.connect();

Connect.then(() => {
  console.log('Successful connection to the database.');
}).catch(err => {
  console.error('Error connecting to database: ', err);
});

module.exports = {sql, conexion};
>>>>>>> 907095d7a243eb117427f60aabbe1826d3b678ad
