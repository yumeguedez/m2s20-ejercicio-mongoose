const { Router } = require("express");

const { registrarUsuario } = require("../controllers/auth.crtl");

const router = Router();

router.post("/register", registrarUsuario);

module.exports = router;
