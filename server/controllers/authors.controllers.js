// Where the CRUD is done
const Authors = require('../models/authors.models');

// CREATE
module.exports.createAuthors = (request, response) => {
    const { name } = request.body;
    Authors.create({
        name,
    })
        // IMPORTANT: what we return here is what we receive in React!
        .then(newAuthor => response.json(newAuthor)) // the "newAuthor" is the new product that we are creating.
        .catch(err => response.status(400).json(err));
}

// READ
module.exports.getAllAuthors = (request, response) => {
    Authors.find()
        .then(authors => response.json(authors)) // "authors" represents all the products returned as an array.  If want to return as an object need to wrap "authors" along with its key in {}.
        .catch(err => response.json(err))
}

module.exports.getOneAuthors = (request, response) => {
    Authors.findById(request.params.id) //"Authors" is referencing the model.
        .then(author => response.json(author))  //is returning the author we asked for by id.
        .catch(err => response.json(err))
}

// UPDATE
module.exports.updateOneAuthors = (request, response) => {
    Authors.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators: true}) //"Authors" is referencing the model. "new:true" returns the new object as updated. "runValidators:true" will run validations on update.
        .then( (updatedAuthors) => response.json({author: updatedAuthors})) //Is returning updatedAuthors as an object.
        .catch(err => response.status(400).json(err));
}

// DELETE
module.exports.deleteOneAuthors = (request, response) => {
    Authors.findByIdAndDelete(request.params.id) //"Authors" is referencing the model.
        .then( (deleteOneAuthors) => response.json(deleteOneAuthors)) //"deleteOneAuthors" = the response (a.k.a. the data coming back in the response)
        .catch(err => response.json(err))
}