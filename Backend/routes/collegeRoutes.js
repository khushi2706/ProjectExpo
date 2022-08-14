const express = require("express");
const collegeRoute = express.Router();
const { getAllColleges, getCollegeById , addNewCollege , getCollegeByUserId , changeCollgeProfile} = require("../controller/collegeControllor");


collegeRoute.get("/", getAllColleges);
collegeRoute.get("/collegeId/:id",  getCollegeById);
collegeRoute.get("/userId/:UserId",  getCollegeByUserId);
collegeRoute.post("/addNew",  addNewCollege);
collegeRoute.put("/changeProfile" , changeCollgeProfile);

module.exports = collegeRoute;



