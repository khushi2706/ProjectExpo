//create a college model based on the college schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CollegeSchema = new Schema({
    Cname: {
        type: String,
        required: true
    },
    CollegeInfo: {
        type: String,
        required: true
    },
    CollegeEmail: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Ctype : {
        type: String,
        required: true,
        enum: ['goverment', 'private', 'grant-in-aid']
    },
    Uni_id: {
        type: Schema.Types.ObjectId,
        ref: 'University',
        required: true
    },
    CollegeImg : {
        type: String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
});


module.exports = mongoose.model('College', CollegeSchema);