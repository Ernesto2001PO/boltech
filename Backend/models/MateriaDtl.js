const { DataTypes } = require("sequelize");
const { Persona } = require("./Persona");
const { Materia } = require("./Materia");

module.exports = function (sequelize) {
    const MateriaDtl = sequelize.define("MateriaDtl", {
        id_materia_dtl: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        gestion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_persona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'personas',
                key: 'id_persona'
            },
        },
        id_materia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'materia',
                key: 'id_materia'
            },
        },
    }, {
        tableName: "materia_dtl",
        timestamps: false,
    });



    return MateriaDtl;
}