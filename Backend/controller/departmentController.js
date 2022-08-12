const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Department = require("../model/Department");
const College = require("../model/College");

const getAllDepartment = async (req, res, next) => {
  let departments;
  try {
    departments = await Department.find();
  } catch (e) {
    return res.status(400).json({
      success: false,
      response: {
        message: e,
      },
    });
  }

  if (!departments) {
    return res.status(404).json({
      success: false,
      response: {
        message: "departments not found",
      },
    });
  }

  return res.status(200).json({ success: true, departments });
};

const addNewDepartment = async (req, res, next) => {
  const {  DepartName, CollegeId } = req.body;

  try {
    //Check if college is exist
    let CollegeExist = await College.findById(CollegeId);

    if (!CollegeExist) {
      return res.status(400).json({
        message: "College Does not exist!",
      });
    }

    const newDepartment = new Department({
        DepartName,
      CollegeId,
    });

    await newDepartment.save();
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
      code: "Department_added_success",
    },
  });
};

const getAllDepByCollegeId = async (req, res, next) => {
    const {clgId} = req.params;
    console.log(clgId);
    let departments;
    try {
      departments = await Department.find({ CollegeId : clgId });
    } catch (e) {
      return res.status(400).json({
        success: false,
        response: {
          message: e,
        },
      });
    }
  
    if (!departments) {
      return res.status(404).json({
        success: false,
        response: {
          message: "departments not found",
        },
      });
    }
  
    return res.status(200).json({ success: true, departments });
};
module.exports = { getAllDepartment , addNewDepartment , getAllDepByCollegeId};