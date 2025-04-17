const { DataTypes } = require("sequelize");
const { MateriaDtl } = require("./MateriaDtl");

module.exports = function (sequelize) {
    const Aula = sequelize.define("Aula", {
        id_aula: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_materiaDtl: {
            type: DataTypes.INTEGER,
            references: {
                model: 'materia_dtl',
                key: 'id_materiaDtl'
            },
            allowNull: false,
        },
    }, {
        tableName: "aula",
        timestamps: false,
    });

   

    return Aula;
}