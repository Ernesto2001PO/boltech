const { DataTypes } = require('sequelize');


module.exports = function (sequelize) {
    const Materia = sequelize.define("Materia", {
        id_materia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true,   // momentatne true
        },id_carrera: {
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
        id_personas: {
            type: DataTypes.INTEGER,
            references: {
                model: 'personas',
                key: 'id_persona'
            }
        }
    }, {
        tableName: "materia",
        timestamps: false,
    });


    module.exports = { Materia };



    return Materia;
}

