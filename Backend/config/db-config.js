require('dotenv').config();
const {Sequelize} = require('sequelize');




const sequelize = new Sequelize({
    dialect : 'postgres',
    database : process.env.DB_NAME,
    username : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    }

});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });






module.exports = { sequelize, Sequelize };

