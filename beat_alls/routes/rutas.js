const express= require('express')//se importa express
const router= express.Router();//se crea el router que va a gestionar rutas
const paginas = require('../controllers/paginasController.js');

router.get("/", paginas.inicio);//cada peticion get necesita un req y res, requerimiento y respuesta
/*Rutas para CRUD Usuarios*/
router.get("/usuariosRegistrados", paginas.consultasUsuarios);

router.get("/registroUsuarios", paginas.registroUsuarios);

router.post("/registroUsuarios", paginas.altasUsuario);

// router.put("/usuariosRegistrados/:id", paginas.actualizarUsuario); //Ruta para actualizar

router.get("/usuariosRegistrados/:id", paginas.eliminarUsuario);
/*Aquí terminan las rutas del CRUD usuarios*/

router.get("/login", paginas.login);

router.get("/productos", paginas.productos);

router.get("/usuarios", paginas.consultasUsuarios);

module.exports = router;