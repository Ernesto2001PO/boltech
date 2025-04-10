const {DataTypes} = require('sequelize');
const { db } = require('../config/db-config');
const { Carrera } = require('./Carrera');
const { Horario } = require('./Horario');
const { Persona } = require('./Persona');


const Materia = db.define("Materia", {
    id_materia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_carrera: {
        type: DataTypes.INTEGER,
        references: {
            model: 'carrera',
            key: 'id_carrera'
        },
        allowNull: false,  
    },
    id_horario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'horario',
            key: 'id_horario'
        },
    },
    id_personas:{
        type: DataTypes.INTEGER,
        references:{
            model: 'personas',
            key: 'id_persona'
        }
    }
},{
    tableName: "materia",
    timestamps: false, 
});


module.exports = { Materia };

// Referencias de claves foráneas
Materia.belongsTo(Horario,{ foreignKey:'id_horario' });
Materia.belongsTo(Persona, { foreignKey: 'id_personas' });
Materia.belongsTo(Carrera, { foreignKey: 'id_carrera' });


