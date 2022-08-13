const express = require("express");
const StudentRoute = express.Router();

const {  getAllStudent , addNewStudent ,getAllStudentByDepartId } = require("../controller/StudentController");

StudentRoute.get("/",getAllStudent);
StudentRoute.post("/add",addNewStudent);
StudentRoute.get("/getByDepartId/:departId",getAllStudentByDepartId);
module.exports = StudentRoute;