"use strict";

var express = require("express");

var projectRoute = express.Router();

var _require = require("../controller/projectController"),
    getAllProjects = _require.getAllProjects,
    getProjectById = _require.getProjectById,
    getProjectByUserId = _require.getProjectByUserId,
    addNewProject = _require.addNewProject,
    UpdateProjectLink = _require.UpdateProjectLink,
    DownloadProjectLink = _require.DownloadProjectLink;

projectRoute.get("/", getAllProjects);
projectRoute.get("/:id", getProjectById);
projectRoute.get("/UserId/:UserId", getProjectByUserId);
projectRoute.post("/add", addNewProject);
projectRoute.put("/updateProjectLink", UpdateProjectLink);
projectRoute.get("/download/:id", DownloadProjectLink);
module.exports = projectRoute;