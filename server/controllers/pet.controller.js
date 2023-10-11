// -----CONTROLLER----

// the controller does CRUD for the DB
// import the model here
const Pet = require("../models/pet.model");

// READ ALL
module.exports.readAll = (req, res) => {
    Pet.find()
        .then(allPets => {
            console.log(allPets);
            // this is what REACT will receive in res.data
            res.json(allPets);
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

// READ ONE
module.exports.readOne = (req, res) => {
    console.log(req.params);
    Pet.findOne({ _id: req.params.id })
        .then(onePet => {
            res.json(onePet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

// CREATE
module.exports.create = (req, res) => {
    Pet.create(req.body)
        .then(newPet => {
            res.json(newPet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

// UPDATE
module.exports.update = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            res.json(updatedPet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

// DELETE
module.exports.delete = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};