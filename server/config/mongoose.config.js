const mongoose = require('mongoose');
const DB_NAME = "Authors_DB";
mongoose.connect("mongodb://localhost/" + DB_NAME)
    .then(() => console.log(`Established a connection to the ${DB_NAME} database.`))
    .catch(err => console.log("Something went wrong when connecting to the database.", err));