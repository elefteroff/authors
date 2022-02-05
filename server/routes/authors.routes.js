const AuthorsControllers = require('../controllers/authors.controllers');

module.exports = (app) => {
    app.post('/api/new', AuthorsControllers.createAuthors);
    app.get('/api', AuthorsControllers.getAllAuthors);
    app.get('/api/edit/:id', AuthorsControllers.getOneAuthors);
    app.put('/api/edit/:id', AuthorsControllers.updateOneAuthors);
    app.delete('/api/edit/:id', AuthorsControllers.deleteOneAuthors);
}