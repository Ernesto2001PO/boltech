
module.exports = (app) => {
    const router = require("express").Router();
    const estudianteController = require('../controllers/estudiante.Controller');



    // ruta completa para estudiantes
    // localhost:3000/api/estudiantes
    router.get('/estudiantes', estudianteController.getEstudiantes);
    router.post('/estudiantes', estudianteController.crearEstudiante);







    app.use('/api', router);

}