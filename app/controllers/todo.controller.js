const todo = require('../models/todo.model.js');

// Create and Save a new Devices
exports.addNew = (req, res) => {

    console.log(req.body)
    if (!req.body) {
        return res.status(400).send({
            message: "To do content can not be empty"
        });
    } else {

        // SignUp User
        const todoData = new todo(req.body.todo);

        // Save User in the database
        todoData.save()
            .then(data => {
                res.send([{ status: "1" }]);
            }).catch(err => {
                res.status(500).send({
                    status: "2",
                    message: err.message || "Some error occurred while Storing the toda."
                });
            });
    };
}


// //Login the user with userid and password
exports.getTodo = (req, res) => {

    todo.find()
        .then(todo1 => {
            if (!todo1) {
                return res.status(404).send({
                    status: 3,
                    message: "Todo not found"
                });
            }
            else {
                res.send({ todo:todo1 });
            }
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Todo not found with user id " 
                });
            }
            return res.status(500).send({
                message: "Error retrieving Todo with id "
            });
        });
};

exports.deleteTodo = (req, res) => {
    console.log(req.body.id);
    todo.find({ id: req.body.id })
        .then(devices => {
            if (!devices) {
                return res.status(404).send({
                    status: 3,
                    message: "Todo not found"
                });
            }
            else {
                res.send({ status: 1 });
            }
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Todo not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Todo with id " + req.params.noteId
            });
        });
};


exports.update = (req, res) => {
    todo.updateOne({ id: req.body.id }, { $set: { content: req.body.content } })
        .then(todo => {
            if (!todo) {
                return res.status(404).send({
                    status: 3,
                    message: "todo not found"
                });
            }
            else {
                res.send(todo);
            }
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "todo not found with id "
                });
            }
            return res.status(500).send({
                message: "Error retrieving todo with id "
            });
        });
};
