// Has to be in this order.  The server file runs from top to bottom.
const express = require('express');
const cors = require('cors');
const app = express(); //Returns an object
const PORT = 8000;

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STEPS FOR FULL SERVER CRUD
// 1. connect mongodb by requiring the file here
require('./config/mongoose.config'); //database config

// 2. create mongoose scheme
// 3. use mongoose model to make CRUD fxns -> controller
// 4. create routes to execute the fxns to the db
require('./routes/authors.routes')(app); //requiring the routes

// need the following at a bear minimum to have a server:
app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
});
