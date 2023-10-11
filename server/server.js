const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// loads env vars
require('dotenv').config();
const port = process.env.PORT;

// import the DB connection file
require("./config/mongoose.config");

// require the routes at the end to run
require("./routes/pet.routes")(app)


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));