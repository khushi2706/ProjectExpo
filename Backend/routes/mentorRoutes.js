const express = require("express");
const mentorRoute = express.Router();

const { getAllMentor ,addNewMentor } = require("../controller/mentotController");

mentorRoute.get("/",getAllMentor);
mentorRoute.post("/add",addNewMentor);

module.exports = mentorRoute;