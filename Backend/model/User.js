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
    },   
    UserType: {
        type: String,
        required: true,
        enum: ["Student", "Professor" , "College-admin"]
    },
    
   
});

module.exports =  mongoose.model("User", userSchema);