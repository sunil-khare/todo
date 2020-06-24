const mongoose = require('mongoose');

const tableTodo = mongoose.Schema({
    content:String,
    id: String,
    datemodified: Date,
    isDone: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('todo_table', tableTodo);