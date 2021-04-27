const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Return_stringSchema = new Schema({
    return_string: {
        type: String,
        required: true
    }
})

const Return_string = mongoose.model('Campsite', return_string);

module.exports = Return_string;