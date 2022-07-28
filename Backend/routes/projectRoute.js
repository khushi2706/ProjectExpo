const express = require("express");
const projectRoute = express.Router();

const { getAllProjects } = require("../controller/projectController");

projectRoute.get("/",getAllProjects);

module.exports = projectRoute;