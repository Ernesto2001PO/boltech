const { Persona } = require('../models/Persona');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const zod = require('zod');


// Obtener todos los estudiantes
exports.getEstudiantes = async (req, res) => {
  try {
    const estudiante = await Persona.sequelize.query('SELECT * FROM personas WHERE rol = 1');
    res.json(estudiante[0]);

  } catch (error) {
    console.error('Error al obtener estudantes:', error);
    res.status(400).json({ error: error.message });
  }
}

exports.crearEstudiante = async (req, res) => {
  try {
    // Definir el esquema de validación con Zod
    const esquemaEstudiante = zod.object({
      nombre: zod.string().min(1, "El nombre es requerido"),
      apellido: zod.string().min(1, "El apellido es requerido"),
      correo: zod.string().email("El email debe tener un formato válido"),
      contraseña: zod.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
      celular: zod.number().min(1, "El celular es requerido").int("El celular debe ser un número entero"),
      fecha_nacimiento: zod.string() // Cambiado a string para aceptar fechas en formato ISO
    });

    // Validar los datos del cuerpo de la solicitud
    const datosValidados = esquemaEstudiante.parse(req.body);

    // Encriptar la contraseña
    const contraseñaEncriptada = await bcrypt.hash(datosValidados.contraseña, 10);

    // Verificar si el email ya existe
    const emailExistente = await Persona.findOne({ where: { correo: datosValidados.correo } });
    if (emailExistente) {
      return res.status(400).json({ error: "El email ya está en uso" });
    }

    // Crear el nuevo estudiante
    const nuevoEstudiante = await Persona.create({
      ...datosValidados,
      contraseña: contraseñaEncriptada,
      rol: 1,
    });

    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    if (error instanceof zod.ZodError) {
      const erroresFormateados = error.errors.map((err) => ({
        campo: err.path[0],
        mensaje: err.message,
      }));
      return res.status(400).json({ errores: erroresFormateados });
    }

    console.error("Error al crear estudiante:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


exports.createProfesor = async (req, res) => {
  try {
    const esquemaProfesor = zod.object({
      nombre: zod.string().min(1, "El nombre es requerido"),
      apellido: zod.string().min(1, "El apellido es requerido"),
      correo: zod.string().email("El email debe tener un formato válido"),
      contraseña: zod.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
      celular: zod.number().min(1, "El celular es requerido").int("El celular debe ser un número entero"),
      fecha_nacimiento: zod.string()
    });

    const datosValidados = esquemaProfesor.parse(req.body);

    const nuevoProfesor = await Persona.create({
      ...datosValidados,
      rol: 2,
    })

    res.status(201).json(nuevoProfesor);
  } catch (error) {
    console.error("Error al crear profesor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }

}

exports.getProfesores = async (req, res) => {
  try {
    const profesores = await Persona.sequelize.query('SELECT * FROM personas WHERE rol = 2');
    res.json(profesores[0]);
  } catch (error) {
    console.error('Error al obtener professores:', error);
    res.status(400).json({ error: error.message });
  }
}


exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const esquemaLogin = zod.object({
      correo: zod.string().email("El email debe tener un formato válido"),
      contraseña: zod.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    });

    const datosValidados = esquemaLogin.parse(req.body);

    const usuario = await Persona.findOne({ where: { correo: datosValidados.correo } });

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







