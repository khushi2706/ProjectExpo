const express = require("express");
const StudentRoute = express.Router();

const {  getAllStudent , addNewStudent ,getAllStudentByDepartId , getAllStudentByUserId, getStudentById,changeStudentDetails } = require("../controller/StudentController");
const Student = require("../model/Student");

StudentRoute.get("/",getAllStudent);
StudentRoute.post("/add",addNewStudent);
StudentRoute.get("/getByDepartId/:departId",getAllStudentByDepartId);
StudentRoute.put("/changeDetails",changeStudentDetails);
StudentRoute.get("/getStudentById/:id",getStudentById);
StudentRoute.get("/getByUserId/:userId",getAllStudentByUserId);
module.exports = StudentRoute;
