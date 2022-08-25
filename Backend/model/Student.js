var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  Fname: {
    type: String,
    required: true,
  },
  LName: {
    type: String,
    required: true,
  },
  AboutMe: {
    type: String,
    required: true,
  },
  DoB: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  DepartmentId: {
    type: mongoose.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  DepartmentName: {
    type: String,
    default: "Others"
  },
  LanguageTag : {
    type: [String],
  },
Skill:{
  type : String,
  default: "Others"
},
CollegeName:{
  type : String,
  default: "Others"
},
PassOutYear:{
  type : String,
  default: "Others"
},
  UserId: {
    type: mongoose.Types.ObjectId,
    ref:"User",
    required: true
  },
  ProfileImg:{
      type: String,
      default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
})

module.exports = mongoose.model("student", studentSchema);


