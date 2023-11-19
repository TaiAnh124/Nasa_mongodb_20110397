const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    kelperName: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Planet', planetSchema)