const { Persona } = require('../models/Persona');
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
  const { nombre, apellido, email, contrasena } = req.body;
  // Validar 
  zod.object({
    nombre: zod.string().min(1),
    apellido: zod.string().min(1),
    email: zod.string().email(),
    contrasena: zod.string().min(6)
  }).parse(req.body);

  // Verificar si el email ya existe
  const emailExistente = await Persona.findOne({ where: { email } });
  if (emailExistente) {
    return res.status(400).json({ error: 'El email ya está en uso' });

  }

  try {
    const nuevoEstudiante = await Persona.create({
      nombre,
      apellido,
      email,
      contrasena,
      rol: 1
    });

    res.status(201).json(nuevoEstudiante);
  } catch (error) {
    console.error('Error al crear estudiante:', error);
    res.status(400).json({ error: error.message });
  }
}


