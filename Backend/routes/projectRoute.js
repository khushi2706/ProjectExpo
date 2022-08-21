const express = require("express");
const projectRoute = express.Router();

const { getAllProjects , getProjectById , getProjectByUserId ,addNewProject , getProjectBySubjectID , getProjectPlga} = require("../controller/projectController");

projectRoute.get("/",getAllProjects);
projectRoute.get("/:id",getProjectById);
projectRoute.get("/UserId/:UserId",getProjectByUserId);
projectRoute.post("/add" , addNewProject);
projectRoute.get("/Subject/:SubjectId", getProjectBySubjectID );
projectRoute.get("/getPlga/:ProjectId" , getProjectPlga)
module.exports = projectRoute;