const Professor = require("../model/Professor");
const Department = require("../model/Department");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose")

const getAllProfessor = async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
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
  res.set('Access-Control-Allow-Origin', '*');
  const { 
    Email,
    Pass,
    Fname,
    LName,
    Degree,
    DoB,
    Gender,
    DepartmentId,
    ProfileImg,
    PubEmail
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
        UserId  ,
        ProfileImg,
        PubEmail
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
  res.set('Access-Control-Allow-Origin', '*');
    const {departId} = req.params;

    let professors;
    try {
      professors = await Professor.find({ DepartmentId : departId });
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

const changeProfessorDetails = async(req,res)=> {
  res.set('Access-Control-Allow-Origin', '*');
  const {
       ProfessorId,
       Fname,
       LName,
       Degree,
       DoB,
       Gender
       } = req.body;
       
       console.log("===============");
  console.log(req.body);
  try {

      const filter = { _id: ProfessorId };
      const update = { 
        Fname,
       LName,
       Degree,
       DoB,
       Gender };

     await Professor.findByIdAndUpdate(ProfessorId,
          update);
      
  } catch (error) {
      return res.status(400).json({
          success : false,
          response : {
              error
          }
      })
  }
  return res.status(200).json({
      success: true,
      response: {
          code: "Professor_Update_success",
          message: "",
          data: {},
      },
  });
}

const getProfessorById = async (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");

  const ProfessorId = req.params.id;

  let professor;
  console.log("ProfessorId:" + ProfessorId);
  try {
    professor = await Professor.findById(ProfessorId);
    //console.log(Professor);
  } catch (e) {
    console.log("Exception: " + e);
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }

  if (!professor) return res.status(500).json({ message: "Not found" });

  console.log(professor);
  return res.status(200).json(professor);
};
module.exports = { getAllProfessor , addNewProfessor , getAllProfByDepartId , changeProfessorDetails, getProfessorById};