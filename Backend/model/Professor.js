var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var professorSchema = new Schema({
    Fname: {
        type: String,
        required: true
    },
LName: {
    type: String,
    required: true
},
Email: {
    type: String,
    required: true
},
ProfileLink: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
},
DoB: {
    type: String,
    required: true
},
Gender: {
    type: String,
    required: true
},
DepartmentId: { 
    type: mongoose.Types.ObjectId,
    ref:"Department",
    required: true
},
})

module.exports = new mongoose.Model("Professor", professorSchema);

