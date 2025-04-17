const { DataTypes } = require("sequelize");


module.exports = function (sequelize) {
    const Horario = sequelize.define('Horario', {
        id_horario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hora_inicio: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        hora_fin: {
            type: DataTypes.TIME,
            allowNull: true,
        },
    }, {
        tableName: 'horario',
        timestamps: false,
    });
    return Horario;

}



