//create a model where all the data of projects is stored with reference to user and college
const { bool } = require('@hapi/joi');
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
    isChecked:{
        type: Boolean,
        defalut: false
    },
    uniqueRate:{
        type : Number
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
        type: Boolean,
        default : true,
    },
    Date:{
        type : Date, 
        default: Date.now  
    }
})

module.exports = mongoose.model("Project", ProjectSchema);
