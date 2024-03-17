const express= require('express')//se importa express
const router= express.Router();//se crea el router que va a gestionar rutas
const paginas=require('../controllers/paginasController.js')

router.get("/", paginas.inicio);//cada peticion get necetita un req y res, requerimiento y respuesta

router.get("/registro", paginas.registro);//

router.get("/login", paginas.login);

router.get("/productos", paginas.productos);

router.get("/usuarios", paginas.usuarios);

module.exports = router;