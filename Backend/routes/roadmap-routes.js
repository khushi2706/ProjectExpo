const express = require("express");
const roadmapRoute = express.Router();

const { getAllRoadmaps , addNewRoadmaps ,getRoadmapById } = require("../controller/roadmap-controller");

roadmapRoute.get("/",getAllRoadmaps);
roadmapRoute.post("/add", addNewRoadmaps);
roadmapRoute.get("/view/:id",getRoadmapById );
module.exports =  roadmapRoute ;