const {DataTypes} = require("sequelize");
const { db } = require("../config/db-config");
const { Carrera } = require("./Carrera");
const { Persona } = require("./Persona");


const Pago = db.define("Pago", {
    id_pago: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    materiasInscritas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    materiasPagas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gestion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_carrera: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'carrera',
            key: 'id_carrera'
        },
    },
    id_persona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'personas',
            key: 'id_persona'
        },
    },
},{
    tableName: "pago",
    timestamps: false, 
});


// Referencias de claves foráneas
Pago.belongsTo(Carrera, { foreignKey: 'id_persona' });
Pago.belongsTo(Persona, { foreignKey: 'id_carrera' });


module.exports = { Pago };