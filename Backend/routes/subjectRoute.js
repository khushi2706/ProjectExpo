const express = require("express");
const SubjectRoute = express.Router();

const {  getAllSubject , addNewSubject ,getAllSubByDepartId , getAllSubByProfId } = require("../controller/SubjectController");

SubjectRoute.get("/",getAllSubject);
SubjectRoute.post("/add",addNewSubject);
SubjectRoute.get("/getByDepartId/:departId",getAllSubByDepartId);
SubjectRoute.get("/getByProfId/:profId", getAllSubByProfId);
module.exports = SubjectRoute;