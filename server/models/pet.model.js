// ---- MODEL----

// import mongoose to build the schema
const mongoose = require("mongoose");

// the model - the rules the entries need to follow
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be present"],
        minLength: [3, "Name must be at least 3 char long"]
    },
    type: {
        type: String,
        required: [true, "Type must be present"],
        minLength: [3, "Type must be at least 3 char long"]
    },
    description: {
        type: String,
        required: [true, "Description must be present"],
        minLength: [3, "Description must be at least 3 char long"]
    },
    skillOne: {
        type: String,
    },
    skillTwo: {
        type: String,
    },
    skillThree: {
        type: String,
    }
}, { timestamps: true });

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;