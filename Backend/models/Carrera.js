const {DataTypes} = require('sequelize');
const { db } = require('../config/db-config');


const Carrera = db.define('Carrera', {
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
},{
    tableName: 'carrera',
    timestamps: false, 
});




module.exports = { Carrera };