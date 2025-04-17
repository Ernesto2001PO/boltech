const { sequelize } = require('../config/db-config');


const Asistencia = require('./Asistencia')(sequelize)
const AsistenciaAdmin = require('./AsistenciaAdmin')(sequelize)
const Aula = require('./Aula')(sequelize)
const Carrera = require('./Carrera')(sequelize)
const Horario = require('./Horario')(sequelize)
const Materia = require('./Materia')(sequelize)
const MateriaDtl = require('./MateriaDtl')(sequelize)
const Nota = require('./Nota')(sequelize)
const Pago = require('./Pago')(sequelize)
const Persona = require('./Persona')(sequelize)


module.exports = {
    Asistencia,
    AsistenciaAdmin,
    Aula,
    Carrera,
    Horario,
    Materia,
    MateriaDtl,
    Nota,
    Pago,
    Persona,

    sequelize,
};

// Relaciones

// Relaciones
Asistencia.belongsTo(MateriaDtl, { foreignKey: 'id_materia_dtl' });


AsistenciaAdmin.belongsTo(Persona, { foreignKey: 'id_persona' });

// Referencias de claves foráneas
Aula.belongsTo(MateriaDtl, { foreignKey: 'id_materiaDtl' });


// Referencias de claves foráneas
Materia.belongsTo(Horario, { foreignKey: 'id_horario' });
Materia.belongsTo(Persona, { foreignKey: 'id_personas' });
Materia.belongsTo(Carrera, { foreignKey: 'id_carrera' });


// Referencias de claves foráneas
MateriaDtl.belongsTo(Persona, { foreignKey: 'id_persona' });
MateriaDtl.belongsTo(Materia, { foreignKey: 'id_materia' });



// Referencias de claves foráneas
Nota.belongsTo(Materia, { foreignKey: 'id_materia' });
Nota.belongsTo(Persona, { foreignKey: 'id_persona' });



// Referencias de claves foráneas
Pago.belongsTo(Carrera, { foreignKey: 'id_persona' });
Pago.belongsTo(Persona, { foreignKey: 'id_carrera' });




