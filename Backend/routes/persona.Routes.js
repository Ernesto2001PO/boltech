
module.exports = (app) => {
    const router = require("express").Router();
    const personaController = require('../controllers/persona.Controller');



    // ruta completa para estudiantes
    // localhost:3000/api/estudiantes



    router.post('/login', personaController.login);





    app.use('/api', router);

}