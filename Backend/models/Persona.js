const { DataTypes } = require("sequelize");
const { db } = require("../config/db-config");

/*
module.exports = (db, DataTypes) => {
const Persona = db.define('Persona', {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  celular: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rol : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  timestamp: false,
});

return Persona;

}; 
*/

const Persona = db.define("Persona", {
  id_persona: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  celular: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});



module.exports = { Persona };
