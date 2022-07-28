const express = require("express");
const projectRoute = express.Router();

const { getAllProjects } = require("../controller/projectController");

console.log("in router");
projectRoute.get("/",getAllProjects);

module.exports = projectRoute;