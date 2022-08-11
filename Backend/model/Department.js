const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DepartSchema = new Schema({
    DepartName : {
        type: String,
        require: true,
    },
    CollegeId : {
        type: Schema.Types.ObjectId,
        ref: 'College',
        required: true
    }
})

module.exports = mongoose.model('Department',DepartSchema)