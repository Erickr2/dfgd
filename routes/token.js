const { Router } = require("express");
const { validateTokenData } = require("../helpers/JWT");
const router = Router();



router.post("/generarToken", validateTokenData);


module.exports = router