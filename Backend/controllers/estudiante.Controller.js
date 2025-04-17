const db = require('../models');
const bcrypt = require('bcrypt');
const zod = require('zod');


// Obtener todos los estudiantes
exports.getEstudiantes = async (req, res) => {
    try {
        const estudiante = await db.Persona.sequelize.query('SELECT * FROM personas WHERE rol = 1');
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
        const emailExistente = await db.Persona.findOne({ where: { correo: datosValidados.correo } });
        if (emailExistente) {
            return res.status(400).json({ error: "El email ya está en uso" });
        }

        // Crear el nuevo estudiante
        const nuevoEstudiante = await db.Persona.create({
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

