require('dotenv').config({ path: '../.env' });  
const express = require('express');
const cors = require('cors'); 
const {db } = require('./config/db-config');
const app = express();

app.use(cors());


// Middleware
app.use(express.json());
app.use(cors());

console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

// Rutas 
const personaRoutes = require('./routes/personaRoutes');

app.use('/api', personaRoutes);

//Sincronizar la base de datos

db.sync({force: false, alter: true})
    .then(() => console.log('Base de datos sincronizada'))
    .catch((error) => console.log('Error al sincronizar la base de datos', error));

// Puerto de la app

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));


app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

