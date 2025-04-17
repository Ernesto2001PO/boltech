const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    const AsistenciaAdmin = sequelize.define("AsistenciaAdmin", {
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
    }, {
        tableName: "asistencia_admin",
        timestamps: false,
    });




    return AsistenciaAdmin;
}

