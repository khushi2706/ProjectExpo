var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var professorSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
    LName: {
        type: String,
        required: true
    },
    Degree:[{
        type : String
    }],
    DoB: {
        type: Date,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    DepartmentId: { 
        type: mongoose.Types.ObjectId,
        ref:"Department",
        required: true
    },
    UserId:{
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true
    },
    ProfileImg:{
        type: String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    PubEmail:{
        type:String
    }
})

module.exports =  mongoose.model("Professor", professorSchema);

