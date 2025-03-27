const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');


router.get('/estudiantes', personaController.getEstudiantes);




module.exports = router; 