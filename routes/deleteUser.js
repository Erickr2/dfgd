const { Router } = require("express");
const { deleteUSerController } = require("../controllers/deleteUserController");
const router = Router();

router.post('/eliminarUsuario',deleteUSerController); 

module.exports = router