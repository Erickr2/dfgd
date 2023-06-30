const { Router } = require("express");
const { crearUsuario } = require("../controllers/CrearUsuario");
const router = Router();

router.post('/createUser',crearUsuario); 

module.exports = router