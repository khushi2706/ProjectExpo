const express = require("express");
const recomRoute = express.Router();
const { getRecommenedProject } = require("../controller/recommendationController");


recomRoute.get("/", getRecommenedProject);

module.exports = recomRoute;



