const express = require("express");
const departmentRoute = express.Router();

const {  getAllDepartment , addNewDepartment ,getAllDepByCollegeId } = require("../controller/departmentController");

departmentRoute.get("/",getAllDepartment);
departmentRoute.post("/add",addNewDepartment);
departmentRoute.get("/getByCollgeId/:clgId",getAllDepByCollegeId);
module.exports = departmentRoute;