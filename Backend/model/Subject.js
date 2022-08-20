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
    Eligibility: {
        type: String,
        required: true
    },
    Objective: {
        type: String,
        required: true
    },
    Credit: {
        type: Number,
        required: true
    },
    CourseCode: {
        type: String,
        required: true
    },
    ProfessorId: { 
        type: mongoose.Types.ObjectId,
        ref:"Professor",
        default:null
    },
})

module.exports =  mongoose.model("Subject" , subjectSchema);