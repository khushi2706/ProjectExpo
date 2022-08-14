const express = require("express");
const ProfessorRoute = express.Router();

const {  getAllProfessor , addNewProfessor ,getAllProfByDepartId } = require("../controller/professorController");

ProfessorRoute.get("/",getAllProfessor);
ProfessorRoute.post("/add",addNewProfessor);
ProfessorRoute.get("/getByDepartId/:departId",getAllProfByDepartId);
module.exports = ProfessorRoute;