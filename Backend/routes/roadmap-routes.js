const express = require("express");
const roadmapRoute = express.Router();

const { getAllRoadmaps , addNewRoadmaps } = require("../controller/roadmap-controller");

roadmapRoute.get("/",getAllRoadmaps);
roadmapRoute.post("/add", addNewRoadmaps);
module.exports =  roadmapRoute ;