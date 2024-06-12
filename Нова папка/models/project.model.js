const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: "ongoing"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;