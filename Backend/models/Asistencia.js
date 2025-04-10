const {DataTypes} = require("sequelize");
const { db } = require("../config/db-config");
const { MateriaDtl } = require("./MateriaDtl");

const Asistencia = db.define("Asistencia", {
    id_asistencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    asistencia : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    id_materia_dtl: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'materia_dtl',
            key: 'id_materia_dtl'
        },
    },
},{
    tableName: "asistencia",
    timestamps: false, 
});

// Relaciones
Asistencia.belongsTo(MateriaDtl, { foreignKey: 'id_materia_dtl' });


module.exports = {Asistencia};