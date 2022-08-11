//create a model where all the data of projects is stored with reference to user and college
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectSchema = new Schema(
    {
    PName: {
        type: String,
        required: true
    },
    Desc :  {
        type: String,
        required: true,
    },
    Link:
    {
        type: String,
        required : true,
    },
    Tags:[{
        type: String
    }],
    Rating:{
        type:Number,
        defalut:0
    },
    PType:{
        type: String,
        required: true,
        enum: [ "Software", "Hardware"]
    },
    UserId : {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    },
    SubjectId:{
        type: mongoose.Types.ObjectId,
        ref:"Subject",
        default: null
    },
    isPrivete:{
        type: Boolen,
        default : true,
    },
    Date:{
        type : Date, 
        default: Date.now  
    }
})

module.exports =  mongoose.model("Project", ProjectSchema);
