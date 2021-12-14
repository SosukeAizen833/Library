const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        
        type: String
    },
    author: {
        required: false,
        type: String
    },
    status: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model("Book",bookSchema)