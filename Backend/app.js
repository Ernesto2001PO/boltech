require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models/')

app.use(cors());


// Middleware
app.use(express.json());
app.use(cors());

console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

// Rutas 

require('./routes')(app);




//Sincronizar la base de datos
db.sequelize.sync({ force: false, alter: false })
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.log('Error al sincronizar la base de datos', error));

// Puerto de la app

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));


app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

