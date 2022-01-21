const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a name."],
        trim: true,
        maxlength: [20, "name cannot be more than 20 chars."]
    },
    completed: {
        type: Boolean,
        default: false,
    },
    comments: {
        type: String
    }
})

module.exports = mongoose.model('Task', TaskSchema)