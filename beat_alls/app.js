const express =require('express') //exportar express y se pueda ejecutar todo lo que requier express
const app = express()//se ejecuta express
const port = 3000 //se crea un puerto, por donde sale la appp
const path = require ("path")
const rutas = require("./routes/rutas")//se importan las rutas para poder mandar llamar a nuestro contenido
const db = require('./config/db.js')//constante para iportar bd

//midleware
/*app.use((req, res, next) => {
    console.log(res)
    next();
})*/


app.set('views', path.join(__dirname, 'views'));//se indica que busque en la carpeta views las vistas para evitar confunfuciones, el path.join ayuda que la ruta se encuentre más rapido y lograr conversiones de diagonales en las rutas
app.set('view engine', 'ejs');//para setiar el ejs y que se corra cada que se ejecute la app

app.use(rutas);//para hacer uso de las rutas
app.use('/prueba', express.static(path.join(__dirname, "public")));//para cuando se mande la periccion localhost 3000 se abra inmediatamente la página de html
app.use(express.static('public'));//para cuando se mande la periccion localhost 3000 se abra inmediatamente el estilo del registro

app.listen(port, ()=>{ //contiene una funcion para escuchar el puerto, donde manda como mensaje el numero del puerto 
    console.log(`Listening on port ${port}`);
});