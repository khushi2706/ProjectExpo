const express = require("express");
const projectRoute = express.Router();

const { getAllProjects , getProjectById , getProjectByUserId ,addNewProject , UpdateProjectLink, DownloadProject } = require("../controller/projectController");

projectRoute.get("/",getAllProjects);
projectRoute.get("/:id",getProjectById);
projectRoute.get("/UserId/:UserId",getProjectByUserId);
projectRoute.post("/add" , addNewProject);
projectRoute.put("/updateProjectLink",UpdateProjectLink);
projectRoute.get("/download/:id",DownloadProject);

module.exports = projectRoute;