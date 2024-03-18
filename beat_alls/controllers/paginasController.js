const usuariosModel = require ('../models/usuarioModel.js');

8/*const inicio =(req, res)=>{//cada que se ponga la ruta raiz responde el router/para poder usar dicha ruta raiz se debe exportar
    res.render('index', 
    {titulo:'Juan', 
    enc:'Hola2'});//no pone la ruta al estar cargado el EJS desde views, para que el elemento dentro de las llaves se debe mandar llamar desde el EJS
}

const registro = (req, res)=>{//cada que se ponga la ruta raiz responde el router/para poder usar dicha ruta raiz se debe exportar
    res.render('registro', 
    {titulo:'Registro de usuarios', 
    enc:'Registro de usuarios', 
    desc:'Complete el siguiente formulario para llevar a cabo su registro'});//no pone la ruta al estar cargado el EJS desde views, para que el elemento dentro de las llaves se debe mandar llamar desde el EJS
}

const login = (req, res)=>{//cada que se ponga la ruta raiz responde el router/para poder usar dicha ruta raiz se debe exportar
    res.render('login', 
    {titulo:'Inicio se sesión', 
    enc:'Inicio de sesión'});//no pone la ruta al estar cargado el EJS desde views, para que el elemento dentro de las llaves se debe mandar llamar desde el EJS
}

const productos = (req, res)=>{//cada que se ponga la ruta raiz responde el router/para poder usar dicha ruta raiz se debe exportar
    res.render('productos', 
    {titulo:'Productos', 
    enc:'Productos'});//no pone la ruta al estar cargado el EJS desde views, para que el elemento dentro de las llaves se debe mandar llamar desde el EJS
}

const usuarios = async (req, res)=>{//cada que se ponga la ruta raiz responde el router/para poder usar dicha ruta raiz se debe exportar
    const usuarios = await usuariosModel.findAll();//consulta a la bd mediante el uso del usuariosModel, en lugar de hacer la consulta con el query se debe de realizar mediante squelize, usuariosModel.findAll() equivale select * from usuarios
    console.log(usuarios);
    res.render('usuarios', 
    {titulo:'Usuarios registrados', 
    enc:'Usuarios registrados'});//no pone la ruta al estar cargado el EJS desde views, para que el elemento dentro de las llaves se debe mandar llamar desde el EJS
}*/


/*module.exports = {
    inicio, 
    registro, 
    login,
    productos, 
    usuarios
}*/