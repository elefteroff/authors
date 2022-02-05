const mongoose = require('mongoose');

// the schema -> the rules that the entries in the db must follow
const AuthorsSchema = new mongoose.Schema({ //in here you pass in the object of what you want to replicate in the database.
    name: { 
        type: String,
        required: [true, "{PATH} must be present."], //Validations
        minlength: [3, "{PATH} must be at least 3 characters long."] //Validations
    },
}, { timestamps: true });

// the model -> this is what we use to make the actual queries to the db
const Authors = mongoose.model("Authors", AuthorsSchema)
module.exports = Authors