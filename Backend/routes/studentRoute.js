const express = require("express");
const StudentRoute = express.Router();

const {
  getAllStudent,
  addNewStudent,
  getAllStudentByDepartId,
  getStudentById,
} = require("../controller/StudentController");

StudentRoute.get("/", getAllStudent);
StudentRoute.post("/add", addNewStudent);
StudentRoute.get("/getByDepartId/:departId", getAllStudentByDepartId);
StudentRoute.get("/getStudentById/:id", getStudentById);
module.exports = StudentRoute;
