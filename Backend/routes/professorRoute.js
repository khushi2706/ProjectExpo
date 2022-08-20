const express = require("express");
const ProfessorRoute = express.Router();

const {  getAllProfessor , addNewProfessor ,getAllProfByDepartId , changeProfessorDetails , getProfessorById} = require("../controller/professorController");

ProfessorRoute.get("/",getAllProfessor);
ProfessorRoute.post("/add",addNewProfessor);
ProfessorRoute.get("/getByDepartId/:departId",getAllProfByDepartId);
ProfessorRoute.put("/changeDetails",changeProfessorDetails);
ProfessorRoute.get("/getById/:id",getProfessorById);

module.exports = ProfessorRoute;