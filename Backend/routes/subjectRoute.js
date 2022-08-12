const express = require("express");
const SubjectRoute = express.Router();

const {  getAllSubject , addNewSubject ,getAllSubByDepartId } = require("../controller/SubjectController");

SubjectRoute.get("/",getAllSubject);
SubjectRoute.post("/add",addNewSubject);
SubjectRoute.get("/getByDepartId/:departId",getAllSubByDepartId);
module.exports = SubjectRoute;