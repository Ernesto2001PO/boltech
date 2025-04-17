const { Persona } = require('../models');
const bcrypt = require('bcrypt');
const zod = require('zod');



exports.createProfesor = async (req, res) => {
    try {
        const esquemaProfesor = zod.object({
            nombre: zod.string().min(1, "El nombre es requerido"),
            correo: zod.string().email("El email debe tener un formato válido"),
            contraseña: zod.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
            celular: zod.number().min(1, "El celular es requerido").int("El celular debe ser un número entero"),
            fecha_nacimiento: zod.string()
        });

        const datosValidados = esquemaProfesor.parse(req.body);

        // Verificar si el email ya existe
        const emailExistente = await Persona.findOne({ where: { correo: datosValidados.correo } });
        if (emailExistente) {
            return res.status(400).json({ error: "El email ya está en uso" });
        }
        // Encriptar la contraseña
        const contraseñaEncriptada = await bcrypt.hash(datosValidados.contraseña, 10);

        // Crear el nuevo profesor
        const nuevoProfesor = await Persona.create({
            ...datosValidados,
            contraseña: contraseñaEncriptada,
            rol: 2,
        })

        res.status(201).json(nuevoProfesor);
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
