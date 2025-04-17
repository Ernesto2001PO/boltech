

module.exports = (app) => {
    const router = require("express").Router();
    const profesorController = require('../controllers/profesor.Controller');

    // ruta completa para profesores
    // localhost:3000/api/profesores

    router.get('/profesores', profesorController.getProfesores);
    router.post('/profesores', profesorController.createProfesor);

    app.use('/api', router);

}