const express= require('express')//se importa express
const router= express.Router();//se crea el router que va a gestionar rutas
const paginas=require('../controllers/paginasController.js')

<<<<<<< HEAD
/*router.get("/", paginas.inicio);//cada peticion get necetita un req y res, requerimiento y respuesta
=======
router.get("/", paginas.inicio);//cada peticion get necesita un req y res, requerimiento y respuesta
>>>>>>> 907095d7a243eb117427f60aabbe1826d3b678ad

router.get("/registro", paginas.registro);//

router.get("/login", paginas.login);

router.get("/productos", paginas.productos);

router.get("/usuarios", paginas.usuarios);*/

module.exports = router;