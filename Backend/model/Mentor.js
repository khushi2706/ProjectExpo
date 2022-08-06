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