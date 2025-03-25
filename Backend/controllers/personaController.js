const {Persona} = require('../models/Persona');

// Obtener todos los estudiantes
exports.getEstudiantes  = async (req, res) => {
    try {
        const estudiante = await Persona.sequelize.query('SELECT * FROM personas WHERE rol = 1');
        res.json(estudiante[0]);
      
    } catch (error) {
        console.error('Error al obtener estudantes:', error);
        res.status(400).json({ error: error.message });
    }
}

