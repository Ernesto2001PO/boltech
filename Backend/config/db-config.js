require('dotenv').config();


const { log } = require('console');
const {Sequelize} = require('sequelize');








const db = new Sequelize({
    dialect : 'postgres',
    database : process.env.DB_NAME,
    username : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,

});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });






module.exports = {db };

