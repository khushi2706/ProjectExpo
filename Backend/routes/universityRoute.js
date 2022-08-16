const express = require("express");
const universityRoute = express.Router();
const { getAllUniversities, addNewUniversity, getUniversityById ,getUniversityByUserId} =
require("../controller/universityController");


universityRoute.get("/", getAllUniversities);
universityRoute.get("/UniversityId/:id",  getUniversityById);
universityRoute.get("/userId/:UserId",  getUniversityByUserId);
universityRoute.post("/addNew",  addNewUniversity);

module.exports = universityRoute;



