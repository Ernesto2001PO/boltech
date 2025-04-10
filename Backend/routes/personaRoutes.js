const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');



// ruta completa para estudiantes
// localhost:3000/api/estudiantes
router.get('/estudiantes', personaController.getEstudiantes);
router.post('/estudiantes', personaController.crearEstudiante);




module.exports = router; 