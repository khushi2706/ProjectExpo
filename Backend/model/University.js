const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UniversitySchema = new Schema({
    UName: {
        type: String,
        require: true
    },
    UType:{
        type: String,
        required: true,
        enum: ['goverment', 'private']
    },
    Address: {
        type: String,
        require: true
    },
    District: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model("University" , UniversitySchema)