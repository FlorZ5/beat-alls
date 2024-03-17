const sql = require('mssql');

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