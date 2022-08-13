const Professor = require("../model/Professor");
const Department = require("../model/Department");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")

const getAllProfessor = async (req, res, next) => {
  let professors;
  try {
    professors = await Professor.find();
  } catch (e) {
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }

  if (!professors) {
    return res.status(404).json({
      success: false,
      response: {
        message: "professors not found",
      },
    });
  }

  return res.status(200).json({ success: true, professors });
};

const addNewProfessor = async (req, res, next) => {
  const { 
    Email,
    Pass,
    Fname,
    LName,
    Degree,
    DoB,
    Gender,
    DepartmentId,
    } = req.body;

    const UserType = "Professor"
    let user;
  try {

    let existUser = await User.findOne({Email : Email}).exec();
    //if already exist then not create
    if(existUser)
   {
     return res.status(400).json({
        message : "User Already exists"
    })
    }

     //encrypt password
     Password = bcrypt.hashSync(Pass);
     const newUser = new User({
         Email,
         Password,
         UserType
     });

    //Check if college is exist

    let DepartExist = await Department.findById(DepartmentId);

    if (!DepartExist) {
      return res.status(400).json({
        message: "Department Does not exist!",
      });
    }

    const session = await mongoose.startSession();
    session.startTransaction();
    user  = await newUser.save();
    
    const UserId = user._id;
    const newProfessor = new Professor({
        Fname,
        LName,
        Degree,
        DoB,
        Gender,
        DepartmentId,
        UserId  
    });
    await newProfessor.save();
    session.commitTransaction();
  } 
  catch (error) {
    return res.status(400).json({
      success: false,
      response: {
        message: "fail",
        error
      },
    });
  }
  return res.status(200).json({
    success: true,
    response: {
      code: "Professor_added_success",
    },
  });
};

const getAllProfByDepartId = async (req, res, next) => {
    const {departId} = req.params;

    let professors;
    try {
      professors = await Professor.find({ DepartId : departId });
    } catch (e) {
      return res.status(400).json({
        success: false,
        response: {
          message: e,
        },
      });
    }
  
    if (!professors) {
      return res.status(404).json({
        success: false,
        response: {
          message: "professors not found",
        },
      });
    }
  
    return res.status(200).json({ success: true, professors });
};
module.exports = { getAllProfessor , addNewProfessor , getAllProfByDepartId};