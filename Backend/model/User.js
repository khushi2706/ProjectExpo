const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Email :  {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        minlength: 6
    },   
    UserType: {
        type: String,
        required: true,
        enum: ["Student", "Professor" , "College-admin"]
    },
    UserId: {
        type: String,
        required: true
    }
   
});

module.exports =  mongoose.model("User", userSchema);