module.exports = (app) => {
    require("./persona.Routes")(app);
    require("./profesor.Routes")(app);
    require("./estudiantes.Routes")(app);





}