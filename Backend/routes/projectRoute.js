const express = require("express");
const projectRoute = express.Router();

const { getAllProjects , getProjectById } = require("../controller/projectController");

projectRoute.get("/",getAllProjects);
projectRoute.get("/:id",getProjectById);

module.exports = projectRoute;