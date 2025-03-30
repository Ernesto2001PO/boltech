const {DataTypes} = require("sequelize");
const { db } = require("../config/db-config");
const { Persona } = require("./Persona"); 


const AsistenciaAdmin = db.define("AsistenciaAdmin", {
    id_asistenciaAdmin: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hora_entrada: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    hora_salida: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    id_persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'personas',
            key: 'id_persona'
        }
    },
},{
    tableName: "asistencia_admin",
    timestamps: false, 
});

// Relaciones
AsistenciaAdmin.belongsTo(Persona, { foreignKey: 'id_persona' });


module.exports = {AsistenciaAdmin};