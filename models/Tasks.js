const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Task = mongoose.model('Task', TaskSchema);
