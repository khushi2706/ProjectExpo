var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
    SubName: {
        type: String,
        required: true
    },
    SubInfo: {
        type: String,
        required: true
    },
    DepartmentId: { 
        type: mongoose.Types.ObjectId,
        ref:"Department",
        required: true
    },
    Year: {
        type: Number,
        required: true
    },

})

module.exports =  mongoose.model("Subject" , subjectSchema);