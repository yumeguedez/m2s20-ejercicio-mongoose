const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generarJWT } = require("../helpers/jwt.helper");

const registrarUsuario = async (req, res) => {
  try {
    const { user_name, password } = req.body;

    const salt = bcrypt.genSaltSync(10);

    const nuevo_usuario = {
      user_name,
      password: bcrypt.hashSync(password, salt),
    };

    const new_user = await User(nuevo_usuario).save();

    const token = await generarJWT(new_user.id);

    return res.json({
      ok: true,
      msg: "Usuario registrado",
      data: new_user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error en el servidor",
      data: {},
    });
  }
};

module.exports = {
  registrarUsuario,
};
