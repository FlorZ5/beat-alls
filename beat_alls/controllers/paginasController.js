const db = require('../config/db');
const sequelize = require('sequelize');
const usuarioModel = require('../models/usuarioModel');
const { use } = require('../routes/rutas');

const inicio = (req, res)=>{//cada que se ponga la ruta raiz responde el router/para poder usar dicha ruta raiz se debe exportar
    res.render('index', 
    {titulo:'Registro de usuarios', 
    enc:'Registro de usuarios', 
    desc:'Complete el siguiente formulario para llevar a cabo su registro'});//no pone la ruta al estar cargado el EJS desde views, para que el elemento dentro de las llaves se debe mandar llamar desde el EJS
}
/*                                           CRUD Usuarios                                     */
/*Ingreso al formulario para registro de usuarios*/
const registroUsuarios = (req, res)=>{//cada que se ponga la ruta raiz responde el router/para poder usar dicha ruta raiz se debe exportar
    res.render('registroUsuarios', 
    {titulo:'Registro de usuarios', 
    enc:'Registro de usuarios', 
    desc:'Complete el siguiente formulario para llevar a cabo su registro'});//no pone la ruta al estar cargado el EJS desde views, para que el elemento dentro de las llaves se debe mandar llamar desde el EJS
}

/*Controlador para acceder al formulario de actualización*/
const formularioActualizacion = (req, res) => {
    const ID_Usuario = req.query.id;
    const Nombre = req.query.nombre;
    const Apellido = req.query.apellido;
    const Direccion = req.query.direccion;
    const Edad = req.query.edad;
    const Fecha_nacimiento = req.query.fechaNacimiento;
    const Telefono = req.query.telefono;
    const Correo = req.query.correo;
    const Rol = req.query.rol;
    const Nombre_usuario = req.query.nombreUsuario;
    const Contrasena = req.query.contrasena;

    res.render('formularioActualizacion',{
        titulo: 'Actualizar usuarios',
        ID_Usuario,
        Nombre,
        Apellido,
        Direccion,
        Edad,
        Fecha_nacimiento,
        Telefono,
        Correo,
        Rol,
        Nombre_usuario,
        Contrasena
    })
};

/*Controlador para creación de usuarios*/
const altasUsuario = async (req, res) => {
    try {
        const datosUsuario = {
            Nombre: req.body.Nombre,
            Apellido: req.body.Apellido,
            Direccion: req.body.Direccion,
            Edad: req.body.Edad,
            Fecha_nacimiento: req.body.Fecha_nacimiento,
            Telefono: req.body.Telefono,
            Correo: req.body.Correo,
            Rol: req.body.Rol,
            Nombre_usuario: req.body.Nombre_usuario,
            Contrasena: req.body.Contrasena,
        };

        const nuevoUsuario = await usuarioModel.create(datosUsuario);

        console.log('Nuevo usuario creado:', nuevoUsuario.toJSON());
        res.render('registroUsuarios',{
            titulo:'Usuarios registrados', 
            enc:'Usuarios registrados'});
    } catch (error) {
        console.error('Error al crear nuevo usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
};

/*Controlador para actualización de usuarios*/
const actualizarUsuario = async (req, res) => {
    const userId = req.params.id;
    const newData = req.body;

    try {
        // Buscar el usuario existente
        const usuario = await usuarioModel.findByPk(userId);

        if (usuario) {
            // Actualizar los campos del usuario con los nuevos datos
            await usuario.update(newData);
            console.log('Usuario actualizado:', usuario.toJSON());
            res.redirect('/usuariosRegistrados'); // Redirigir a la página de usuarios después de actualizar
        } else {
            res.status(404).json({ error: 'No se encontró ningún usuario para actualizar' });
        }
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}



/*Controlador para baja de usuarios*/
const eliminarUsuario = async (req, res) => {
    const valores = req.params.id;

    try {
        const user = await usuarioModel.findByPk(valores);
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }

        await user.destroy();
        const consultar_User = await usuarioModel.findAll();

        res.render('usuariosRegistrados',
            {consultar_User,
            titulo:'Usuarios registrados', 
            enc:'Usuarios registrados'});
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
};

/*Controlador para consula de usuarios*/
const consultasUsuarios = async (req, res) => {
    const consultar_User = await usuarioModel.findAll();
    console.log(consultar_User);
    res.render('usuariosRegistrados',
    {consultar_User,
    titulo:'Usuarios registrados', 
    enc:'Usuarios registrados'});
}

/*                                            Fin CRUD Usuarios                                         */
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

module.exports = {
    inicio,
    altasUsuario, 
    registroUsuarios,
    actualizarUsuario,
    eliminarUsuario,
    formularioActualizacion,
    login,
    productos,
    consultasUsuarios
}
