const { DataTypes } = require("sequelize");
const { Materia } = require("./Materia");
const { Persona } = require("./Persona");


module.exports = function (sequelize) {
    const Nota = sequelize.define("Nota", {
        id_nota: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        gestion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nota: {
            type: DataTypes.FLOAT,
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
        tableName: "nota",
        timestamps: false,
    });

    module.exports = { Nota };

    return Nota;
}




