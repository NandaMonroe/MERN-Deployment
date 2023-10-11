// routes need the controller to execute the queries
const PetController = require("../controllers/pet.controller");

module.exports = (app) => {
    app.get("/api/pets", PetController.readAll);
    app.post("/api/pets", PetController.create);
    app.get('/api/pets/:id', PetController.readOne);
    app.patch('/api/pets/:id', PetController.update);
    app.delete('/api/pets/:id', PetController.delete);
};