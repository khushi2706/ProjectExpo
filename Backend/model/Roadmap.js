const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roadmapSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    desc :  {
        type: String,
        required: true,
    },
    ImgLink:
    {
        type: String,
        required : true,
    },
    RoadmapLink:
    {
        type: String,
        required : true,
    },     
    user : {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    },
    isApproved: {
        type: Boolean,
        default: false,
    }
})

module.exports =  mongoose.model("Roadmap", roadmapSchema);