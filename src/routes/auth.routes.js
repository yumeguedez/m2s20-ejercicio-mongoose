const { Router } = require("express");

const { registrarUsuario, iniciarSesion } = require("../controllers/auth.crtl");

const router = Router();

router.post("/register", registrarUsuario);
router.post("/login", iniciarSesion);

module.exports = router;
