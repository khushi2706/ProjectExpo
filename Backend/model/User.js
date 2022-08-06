const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name : {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true
    },
    gender : {
        type: String,
        required: true
    },
    dob : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    email :  {
        type: String,
        required: true,
        unique: true
    },
    profile_pic :  {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    university_id: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true,
        enum: ["Student", "Professor"]
    },
    user_id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

module.exports =  mongoose.model("User", userSchema);