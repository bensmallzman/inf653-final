const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    stateCode: {
        required: true,
        type: String,
        unique: true
    },
    funfacts: [String]
})

module.exports = mongoose.model('Data', dataSchema)