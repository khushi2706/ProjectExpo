const express = require("express");
const projectRoute = express.Router();

const { getAllProjects , getProjectById , getProjectByUserId ,addNewProject ,  } = require("../controller/projectController");

projectRoute.get("/",getAllProjects);
projectRoute.get("/:id",getProjectById);
projectRoute.get("/UserId/:UserId",getProjectByUserId);
projectRoute.post("/add" , addNewProject);

module.exports = projectRoute;