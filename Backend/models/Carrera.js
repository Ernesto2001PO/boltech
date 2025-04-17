const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    const Carrera = sequelize.define('Carrera', {
        id_carrera: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'carrera',
        timestamps: false,
    });

    return Carrera;

}
