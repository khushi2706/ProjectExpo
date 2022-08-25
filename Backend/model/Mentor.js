const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var MentorSchema = new Schema({
    Name:{
        type:String,
        required: true
    },
    Speciality:{
        type:String,
    },
    MentorImg:{
        type:String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    TypeOfUser:{
        type:String,
    },
    UserId:{
        type:String,
    },
    aboutMentor:{
        type:String,
    },
    Email:{
        type:String,
    },
    TelegramId:{
        type:String,
    }
})

module.exports = mongoose.model("Mentor",MentorSchema);