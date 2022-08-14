const Subject = require("../model/Subject");
const Department = require("../model/Department");

const getAllSubject = async (req, res, next) => {
  let subjects;
  res.set('Access-Control-Allow-Origin', '*');
  try {
    subjects = await Subject.find();
  } catch (e) {
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }

  if (!subjects) {
    return res.status(404).json({
      success: false,
      response: {
        message: "subjects not found",
      },
    });
  }

  return res.status(200).json({ success: true, subjects });
};

const addNewSubject = async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  const {  SubName,
    SubInfo,
    DepartmentId,
    Year,
    Eligibility,
Objective,
Credit,
CourseCode

     } = req.body;

  try {
    //Check if college is exist
    let DepartExist = await Department.findById(DepartmentId);

    if (!DepartExist) {
      return res.status(400).json({
        message: "Department Does not exist!",
      });
    }

    const newSubject = new Subject({
        SubName,
        SubInfo,
        DepartmentId,
        Year,
        Eligibility,
        Objective,
        Credit,
        CourseCode
    });

    await newSubject.save();
  } catch (error) {
    return res.status(400).json({
      success: false,
      response: {
        error,
      },
    });
  }
  return res.status(200).json({
    success: true,
    response: {
      code: "Subject_added_success",
    },
  });
};

const getAllSubByDepartId = async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
    const {departId} = req.params;
    console.log(departId);
    let subjects;
    try {
      subjects = await Subject.find({ DepartId : departId });
    } catch (e) {
      return res.status(400).json({
        success: false,
        response: {
          message: e,
        },
      });
    }
  
    if (!subjects) {
      return res.status(404).json({
        success: false,
        response: {
          message: "subjects not found",
        },
      });
    }
  
    return res.status(200).json({ success: true, subjects });
};
module.exports = { getAllSubject , addNewSubject , getAllSubByDepartId};