//create a college model based on the college schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CollegeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    type : {
        type: String,
        required: true,
        enum: ['goverment', 'private', 'grant-in-aid']
    },

    

    univeristy_id: {
        type: Schema.Types.ObjectId,
        ref: 'University',
        required: true
    }
});


module.exports = mongoose.model('College', CollegeSchema);