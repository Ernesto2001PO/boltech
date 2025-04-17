const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const zod = require('zod');



exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const esquemaLogin = zod.object({
      correo: zod.string().email("El email debe tener un formato válido"),
      contraseña: zod.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    });

    const datosValidados = esquemaLogin.parse(req.body);

    const usuario = await db.Persona.findOne({ where: { correo: datosValidados.correo } });

    if (!usuario) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    let contraseñaValida = false;

    // Verificar si la contraseña está encriptada
    if (usuario.contraseña.startsWith('$2b$')) {
      // Comparar con bcrypt si está encriptada
      contraseñaValida = await bcrypt.compare(datosValidados.contraseña, usuario.contraseña);
    } else {
      // Comparar directamente si no está encriptada
      contraseñaValida = datosValidados.contraseña === usuario.contraseña;
    }

    if (!contraseñaValida) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Si la contraseña no estaba encriptada, encriptarla ahora
    if (!usuario.contraseña.startsWith('$2b$')) {
      usuario.contraseña = await bcrypt.hash(datosValidados.contraseña, 10);
      await usuario.save();
    }

    const token = jwt.sign(
      { id: usuario.id, correo: usuario.correo, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ mensaje: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};












