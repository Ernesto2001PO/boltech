const { DataTypes } = require("sequelize");
const { MateriaDtl } = require("./MateriaDtl");


module.exports = (sequelize) => {
    const Asistencia = sequelize.define("Asistencia", {
        id_asistencia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        asistencia: {
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
    }, {
        tableName: "asistencia",
        timestamps: false,
    });


    return Asistencia;
}