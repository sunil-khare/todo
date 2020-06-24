module.exports = (app) => {
    const todo = require('../controllers/todo.controller.js');

    app.get('/get', todo.getTodo);

    app.post('/addNew', todo.addNew);

    app.post('/deleteTodo', todo.deleteTodo)


    app.post('/update', todo.update)
}