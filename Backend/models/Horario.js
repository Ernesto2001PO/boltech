const {DataTypes} = require("sequelize");
const { db } = require("../config/db-config");

const Horario = db.define('Horario', {
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
        allowNull: false,
    },
    hora_fin: {
        type: DataTypes.TIME,
        allowNull: false,
    },
},{
    tableName: 'horario',
    timestamps: false, 
});

module.exports = { Horario };





