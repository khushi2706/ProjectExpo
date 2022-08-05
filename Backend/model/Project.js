//create a model where all the data of projects is stored with reference to user and college
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc :  {
        type: String,
        required: true,
    },
    link:
    {
        type: String,
        required : true,
    },
    author:
    {
        type: String,
        required: true,
    },
    languagesTag:[{
        type: String
    }],
    likes:{
        type:Number,
        defalut:0
    },
    college:{
        type: String,
    },
    user : {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    }
})

module.exports =  mongoose.model("Project", ProjectSchema);
